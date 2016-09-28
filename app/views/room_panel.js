
require('styles/room_panel.css');

module.exports = RTChat.Views.RoomPanel.extend({
	template: `
		<div class="waiting-box" rv-hide="scope.rtc_state.slides">
			<div class="waiting-msg">
				Waiting for presentation to start..
			</div>
			<div rv-hide="scope.showHelp">
				<button class="btn btn-default toggle-help"> Help </button>
			</div>
			<div class="help" rv-show="scope.isAdmin |and scope.showHelp">
				<div data-subview="help"></div>
			</div>
		</div>
		<div data-subview="viewer"></div>
		<div rv-show="scope.rtc_state.showChat">
			<div data-subview="chat"></div>
		</div>
	`,
	events: {
		'click .toggle-help': function() {
			this.scope.showHelp = !this.scope.showHelp;
		}
	},
	subviewCreators: {
		viewer: function() { return new RTChat.Views.Viewer(); },
		chat: function() { return new RTChat.Views.ChatPanel(); },
		help: function() { return new RTChat.Views.HelpPanel(); },
	},
	render: function() {
		var self = this;
		this.scope = {rtc_state: {}};

		// Make the magic happen~~
		RTChat.RTCWrapper.joinRoom(window.location.hash, { xVideoContainer: this.$('.video-container') }, function(hasPeers) {
			//TODO: push on the list of admins
			if (!hasPeers)
				RTChat.RTCWrapper.updateState({admins: [RTChat.RTCWrapper.connection.extra.fullId]});
		});

		this.$el.html(this.template);
		Rivets.bind(this.$el, { scope: this.scope });

		// self.scope.rtc_state = {};
		RTChat.RTCWrapper.onStateChange(function(old, newState) {
			console.log("StateUpdate", old, newState);
			// if(self.scope.isAdmin) return; // TODO: Never remove admin?
			// Become admin if the others think you should be.
			if (newState.admins)
				RTChat.RTCWrapper.connection.extra.isAdmin =
					newState.admins.indexOf(RTChat.RTCWrapper.connection.extra.fullId) >= 0;

			self.scope.rtc_state = newState;
			self.scope.isAdmin = RTChat.RTCWrapper.connection.extra.isAdmin;
		});

		// Show help if the user is new.
		var user = RTChat.UserService.getAppData();
		if (!user.other_imgur_accounts && !user.signedin_imgur_accounts)
			this.scope.showHelp = true;

		return this;
	},
});
