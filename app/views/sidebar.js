require('styles/sidebar.css');

var AppConfig = require('app/config');
// var UploadModal = require('views/upload_modal');
var ImgurLoader = require('utils/imgur_loader.js');

module.exports = RTChat.Views.Sidebar.extend({
	template: `
		<a rv-unless="scope.signedIn"
			rv-href="'https://api.imgur.com/oauth2/authorize?client_id=' |+ scope.clientId |+ '&response_type=token&state=' |+ scope.hash">
			Sign in to imgur
		</a>
		<ul rv-if="scope.signedIn">
			<li rv-each-album="scope.userAlbums" rv-data-path="scope.userName |+ '/' |+ album">
		</ul>
		<div class="add-acct"> Add  Imgur Account </div>
		<ul rv-each-user="scope.iaccts" class="album">
			<div class="header">
				{ user.name  }
				<span class="pull-right fa fa-ellipsis-v"></>
			</div>
			<li rv-each-album="user.albums" rv-data-id="album.id">
				{ album.title }
			</li>
		</ul>
	`,
	events: {
		'click .album > li': function(e) {
			// Load Presentation
			var target = this.$(e.currentTarget)
			ImgurLoader.getAlbum(target.data('id'), function(album) {
				RTChat.RTCWrapper.updateState({
					albumId: album.id,
					title: album.title,
					// slides: _.map(album.images, function(i) {return i.link}),
					slides: _.map(album.images, function(i) {return i.link.replace(/^http:/,'https:')}),
					currentSlide: 0,
				});
			});
			// target.addClass("selected"); //TODO: loading?
		},
		'click .fa-refresh': function() {
			this.getAlbums();
		},
		// 'click .fa-upload': function() {
		// 	UploadModal.render();
		// },
		// 'click .fa-trash': function(e) {
		// 	var self = this;
		// 	e.stopImmediatePropagation();
		// 	PresLoader.delete(this.$(e.currentTarget).parent().data('path'), function() {
		// 		self.getList();
		// 	});
		// }
		'click .add-acct': function() {

		},
	},
 	initialize: function() {
		this.scope = {};
		//TODO: populate from UserService
		this.savedImgurAccounts = ['thannman', 'deadpoolsupplier'];
		this.getAlbums();


		// UploadModal = new UploadModal();
		// UploadModal.onsuccess = function() { self.getList(); };
		// this.extra = RTChat.RTCWrapper.connection.extra;
	},
	getAlbums: function() {
		var scope = this.scope;
		scope.iaccts = []; // The list of added users

		_.forEach(this.savedImgurAccounts, function(a) {
			var acct = { name: a };

			// Add it now so it shows up in the GUI, then add the albums asynchronously.
			scope.iaccts.push(acct);

			ImgurLoader.listAlbums(a, function(list) {
				console.log("got list", acct.name, list)

				_.extend(acct, {
					name: list[0].account_url,
					// Remove empty albums
					albums: _.reject(list, function(o) { return o.images_count == 0 })
				});
			});
		});
	},
	// OLD_getList: function() {
	// 	var self = this;
	// 	this.scope.folders = null;
	// 	PresLoader.getList(function(list) {
	// 		self.scope.folders = list;
	// 		self.render();
	// 	});
	// },
	render: function() {
		this.$el.html(this.template);
		RTChat.Rivets.bind(this.$el, {scope: this.scope});

		// start closed.
		this.$el.removeClass('open');

		this.scope.hash = window.location.hash.substring(1);
		this.scope.clientId = AppConfig['imgur_client_id'];

		var self = this;
		RTChat.RTCWrapper.onStateChange(function(old, newState) {
			// Open or close if starts or ends
			setTimeout(function() { //HACK: "extra" gets set by an onStateChange handler
				if (RTChat.RTCWrapper.connection.extra.isAdmin) {
					if (!newState.albumId && newState.admins) { //HACK: check admins to ensure we are still in a room
						self.$el.addClass('open');
					} else {
						self.$el.removeClass('open');
					}
				}
			})

			// self.extra = RTChat.RTCWrapper.connection.extra;

			//TODO: update "selected"
			// if (old.presentation !== newState.presentation) {
			// 	self.scope.presentation = newState.presentation;
			// 	// Keep selection in sync.
			// 	self.$('.selected').removeClass('selected');
			// 	if (newState.presentation)
			// 		self.$('li[data-path="'+newState.presentation+'"]').addClass('selected');
			// }
			// if (old.albumId !== newState.albumId) {

			// if (!newState.albumId && RTChat.RTCWrapper.connection.extra.isAdmin) {
			// 	self.$el.toggleClass('open', !newState.albumId)
			// }

		});

		// this.$('li[data-path="'+this.scope.presentation+'"]').addClass('selected');
		return this;
	},
	scope: {}
});
