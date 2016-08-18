require('styles/sidebar.css');

var AppConfig = require('app/config');
// var UploadModal = require('views/upload_modal');
var ImgurLoader = require('utils/imgur_loader.js');

module.exports = RTChat.Views.Sidebar.extend({
	template: `
		<a rv-unless="scope.imgur_account_name"
			rv-href="'https://api.imgur.com/oauth2/authorize?client_id=' |+ scope.clientId |+ '&response_type=token&state=' |+ scope.hash">
			Sign-in with Imgur to upload
		</a>
		<ul rv-if="scope.imgur_account_name" class="album">
			<div class="header">
				{ scope.imgur_account_name }
				<span class="pull-right fa fa-upload"></>
				<span class="pull-right fa fa-ellipsis-v"></>
			</div>
			<li rv-each-album="scope.user_albums" rv-data-id="album.id">
				{ album.title }
			</li>
		</ul>
		<div class="add-acct">
			<span rv-hide="scope.editing">Add  Imgur Account </span>
			<input rv-show="scope.editing" placeholder="Imgur Account Name">
		</div>
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
					slides: _.map(album.images, function(i) {return i.link.replace(/^http:/,'https:')}),
					currentSlide: 0,
				});
			});
			// target.addClass("selected"); //TODO: loading?
			this.toggle(); // close //TODO: do we want this?
		},
		'click .fa-refresh': function() {
			this.getAlbums();
		},
		'click .fa-upload': function() {
			UploadModal.render();
		},
		// 'click .fa-trash': function(e) {
		// 	var self = this;
		// 	e.stopImmediatePropagation();
		// 	PresLoader.delete(this.$(e.currentTarget).parent().data('path'), function() {
		// 		self.getList();
		// 	});
		// }
		'click .add-acct': function(ev) {
			this.scope.editing = true;
			this.$(ev.currentTarget).find('input').val("").focus();
		},
		'keyup .add-acct input': function(ev) {
			if (ev.keyCode != 13) return true;
			this.scope.editing = false;
			if (!this.scope.other_imgur_accounts) this.scope.other_imgur_accounts = [];
			this.scope.other_imgur_accounts.push(this.$(ev.currentTarget).val());

			RTChat.UserService.setAppConf({
				other_imgur_accounts: this.scope.other_imgur_accounts
			});

			this.scope.iaccts = this.getAlbums(this.scope.other_imgur_accounts);
		},
		'blur .add-acct input': function(ev) {
			this.scope.editing = false;
		}
	},
	// Return an array of accounts with albums populated asynchronously.
	getAlbums: function(list_of_account_names) {
		if (!list_of_account_names) return []; // Don't fail when passed undefined.
		var accounts = [];

		_.forEach(list_of_account_names, function(a) {
			var acct = { name: a };

			// Add it now so it shows up in the GUI, then add the albums asynchronously.
			accounts.push(acct);

			ImgurLoader.listAlbums(a, function(list) {
				console.log("got list", acct.name, list)

				if (list.length)
				_.extend(acct, {
					name: list[0].account_url,
					// Remove empty albums
					albums: _.reject(list, function(o) { return o.images_count == 0 })
				});
			});
		});

		return accounts;
	},
	render: function() {
		this.scope = RTChat.UserService.getAppConf()
		this.scope.hash = window.location.hash.substring(1);
		this.scope.clientId = AppConfig['imgur_client_id'];
		this.scope.user_albums = this.getAlbums([this.scope.imgur_account_name])[0]
		this.scope.iaccts = this.getAlbums(this.scope.other_imgur_accounts);

		this.$el.html(this.template);
		RTChat.Rivets.bind(this.$el, {scope: this.scope});

		// start closed.
		this.$el.removeClass('open');

		var self = this;
		RTChat.RTCWrapper.onStateChange(function(old, newState) {
			// Open or close if starts or ends
			setTimeout(function() { //HACK: "extra" gets set by an onStateChange handler
				if (RTChat.RTCWrapper.connection.extra.isAdmin) {
					if (!newState.albumId && newState.admins) { //HACK: check admins to ensure we are still in a room
						self.$el.addClass('open');
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
