require('styles/sidebar.css');

var AppConfig = require('app/config');
var UploadModal = require('views/upload_modal');
var ImgurLoader = require('utils/imgur_loader.js');

module.exports = RTChat.Views.Sidebar.extend({
	template: `
		<div rv-if="scope.signed_in_accounts |length |eq 0" class="signin">
			<a rv-href="'https://api.imgur.com/oauth2/authorize?client_id=' |+ scope.clientId |+ '&response_type=token&state=' |+ scope.hash">
				Sign-in with Imgur to upload
			</a>
			<span class="pull-right fa fa-question-circle"
				tooltip="Imgur is a free image hosting site that liveslide uses to store the presentations you upload">
			</span>
		</div>
		<div rv-each-user="scope.signed_in_accounts" class="dropdown">
			<div rv-data-acct-name="user.name">
				{ user.name }
				<span class="pull-right fa fa-ellipsis-v"></span>
				<span class="pull-right fa fa-upload"></span>
			</div>
			<ul class="album">
				<li rv-each-album="user.albums" rv-data-id="album.id">
					{ album.title }
				</li>
			</ul>
		</div>
		<div class="add-acct">
			<span rv-hide="scope.editing">Add  Imgur Account </span>
			<span class="pull-right fa fa-question-circle"
				tooltip="You can add any imgur account and view its albums as presentations">
			</span>
			<input rv-show="scope.editing" placeholder="Imgur Account Name">
		</div>
		<div rv-each-user="scope.other_accounts" class="dropdown" >
			<div rv-data-acct-name="user.name">
				{ user.name }
				<span class="pull-right fa fa-ellipsis-v"></span>
			</div>
			<ul class="album">
				<li rv-each-album="user.albums" rv-data-id="album.id">
					{ album.title }
				</li>
			</ul>
		</div>
		<div data-subview="context_menu"></div>
		<div data-subview="upload_modal"></div>
	`,
	contextMenuTemplate: `
		<li class="imgur"><a> View & Edit on Imgur </a></li>
		<li class="delete"><a> Remove </a></li>
	`,
	events: {
		'click .album > li': function(e) {
			var self = this;
			var target = this.$(e.currentTarget);

			if (!RTChat.RTCWrapper.connection) {
				// Go to a random room then load selected presentation.
				this.inhibitAutoOpen = true;
				window.location.href = '#'+RTChat.Random.shortid();
			}

			// Wait for url change...
			setTimeout(function() {
				// Load Presentation
				ImgurLoader.getAlbum(target.data('id'), function(album) {
					RTChat.RTCWrapper.updateState({
						albumId: album.id,
						title: album.title,
						slides: _.map(album.images, function(i) {return i.link.replace(/^http:/,'https:');}),
						currentSlide: 0,
					});

					// Close sidebar
					self.toggle(false);
					self.inhibitAutoOpen = false;
				});
			});

			// target.addClass("selected"); //TODO: loading?
		},
		'click .fa-upload': function() {
			this.subviews.upload_modal.show();
		},
		'click .add-acct': function(ev) {
			if (!this.scope.editing) {
				this.scope.editing = true;
				this.$(ev.currentTarget).find('input').val("").focus();
				ev.stopPropagation();
			}
		},
		// Add new account
		'keyup .add-acct input': function(ev) {
			if (ev.keyCode != 13) return true;
			this.scope.editing = false;
			if (!this.scope.user.other_imgur_accounts) this.scope.user.other_imgur_accounts = [];
			var name = this.$(ev.currentTarget).val();

			var self = this;
			// Add the acct to the array instantly because it will be populated asynchronously.
			this.scope.other_accounts.unshift(this.getAlbums([name], function(acct) {
				// Now that we have the exact acct name, insert it into the list.
				self.scope.user.other_imgur_accounts.unshift(acct.name);
				RTChat.UserService.setAppData({
					//TODO: use id in addition to "name"?
					other_imgur_accounts: self.scope.user.other_imgur_accounts
				});
			})[0]);
		},
		// == ContextMenu == //
		'click #ContextMenu li.delete': function() {
			if (_.findWhere(this.scope.user.signedin_imgur_accounts, {name: this.menu_target})) {
				// Remove user account info. this.scope.
				this.scope.signed_in_accounts = [];
				RTChat.UserService.setAppData({
					signedin_imgur_accounts: []
				});
			} else {
				// Remove from user.other_imgur_accounts
				var ii = _.indexOf(this.scope.user.other_imgur_accounts, this.menu_target);
				if (ii >= 0) {
					//TODO: only calling setAppData is needed.
					this.scope.user.other_imgur_accounts.splice(ii, 1);
					RTChat.UserService.setAppData({
						other_imgur_accounts: this.scope.user.other_imgur_accounts
					});
				}

				// Remove from scope.other_accounts
				ii = _.findIndex(this.scope.other_accounts, {name: this.menu_target});
				if (ii >= 0) this.scope.other_accounts.splice(ii, 1);
			}
		},
		'click #ContextMenu li.imgur': function() { // open imgur in a new tab
			window.open("https://" +this.menu_target + ".imgur.com/", "_blank");
		},
		'click .fa-ellipsis-v': function(ev) {
			this.subviews.context_menu.toggle(ev.currentTarget);
			this.menu_target = $(ev.currentTarget).parent('[data-acct-name]').data("acct-name");
			ev.stopPropagation(); // Needed or else the body listener hack will close it immediately.
		},
		'scroll': function() {
			this.subviews.context_menu.hide();
		},
	},
	initialize: function() {
		var self = this;
		Backbone.Subviews.add( this );
		//HACK: close "popovers" on click anywhere.
		$('body').on('click', function(ev) {
			self.subviews.context_menu.hide();
			self.scope.editing = false;
		});
	},
	subviewCreators: {
		// Extend ContextMenu
		context_menu: function() { return new (RTChat.Views.ContextMenu.extend({
			className: 'dropdown-menu', // Use Bootstrap styling
			template: this.contextMenuTemplate,
		}))(); },
		// upload_modal: function() { return new UploadModal(); }
		upload_modal: function() {
			var self = this;
			var m = new UploadModal();
			m.on('hide', function() {
				// Refresh users albums.
				// TODO: caching messes this up.
				self.scope.signed_in_accounts = self.getAlbums(self.scope.user.signedin_imgur_accounts);
			});
			return m;
		}
	},
	// Returns an array of accounts with albums populated asynchronously.
	// Callback gets called once for every acct when populated.
	getAlbums: function(list_of_account_names, callback) {
		if (!list_of_account_names) return []; // Don't fail when passed undefined.
		var accounts = [];

		var self = this;
		_.forEach(list_of_account_names, function(a) {
			var acct = a;
			if (!a.name) acct = { name: a };

			// Add it now so it shows up in the GUI, then add the albums asynchronously.
			accounts.push(acct);

			ImgurLoader.listAlbums(acct.name, function(list) {
				// console.log("got list", acct.name, list)

				if (list.length)
				_.extend(acct, {
					id: list[0].account_url, // Update to the exact capitalization name.
					name: list[0].account_url, // Update to the exact capitalization name.
					// Remove empty albums
					albums: _.reject(list, function(o) { return o.images_count === 0; })
				});

				if (callback) callback.call(this, acct);
			});
		});

		return accounts;
	},
	render: function() {
		var self = this;
		this.scope = {};
		this.scope.user = RTChat.UserService.getAppData();
		this.scope.hash = window.location.hash.substring(1);
		this.scope.clientId = AppConfig.imgur_client_id;
		this.scope.signed_in_accounts = this.getAlbums(this.scope.user.signedin_imgur_accounts);
		this.scope.other_accounts = this.getAlbums(this.scope.user.other_imgur_accounts);

		this.$el.html(this.template);
		Rivets.bind(this.$el, {scope: this.scope});

		// Start closed.
		this.$el.removeClass('open');

		// Init Tooltips
		this.$('[tooltip]').Opentip({targetJoint: 'right'});

		RTChat.RTCWrapper.onStateChange(function(old, newState) {
			// Open or close if starts or ends
			setTimeout(function() { //HACK: "extra" gets set by an onStateChange handler
				if (RTChat.RTCWrapper.connection.extra.isAdmin && !newState.albumId &&
						newState.admins && !self.inhibitAutoOpen) {
						//HACK: check admins to ensure we are still in a room
					self.$el.addClass('open');
				}
			});

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
