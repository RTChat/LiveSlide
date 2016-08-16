

module.exports = RTChat.Views.RoomPanel.extend({
	template: `
		<div class="waiting-msg" rv-hide="scope.rtc_state.slides">
			Waiting for presentation to start..
		</div>
		<div data-subview="viewer"></div>
		<div rv-show="scope.rtc_state.showChat">
			<div data-subview="chat"></div>
		</div>
	`,
	initialize: function() {
		console.log("initroomView")
		Backbone.Subviews.add( this );

		var self = this;
		self.scope.rtc_state = {};
		RTChat.RTCWrapper.onStateChange(function(old, newState) {
			console.log("StateUpdate", old, newState);
			// if(self.scope.isAdmin) return; // TODO: Never remove admin?
			// Become admin if the others think you should be.
			if (newState.admins)
				RTChat.RTCWrapper.connection.extra.isAdmin =
					newState.admins.indexOf(RTChat.RTCWrapper.connection.extra.fullId) >= 0;
			self.scope.rtc_state = newState;
		});
	},
	subviewCreators: {
		viewer: function() { return new RTChat.Views.Viewer(); },
		chat: function() { return new RTChat.Views.ChatPanel(); },
	},
	render: function render() {
		this.$el.html(this.template);
		RTChat.Rivets.bind(this.$el, { scope: this.scope });

		//TODO: initialize state?
		// Make the magic happen~~
		RTChat.RTCWrapper.joinRoom(window.location.hash, { xVideoContainer: this.$('.video-container') }, function(hasPeers) {
			//TODO: push on the list of admins
			if (!hasPeers)
				RTChat.RTCWrapper.updateState({admins: [RTChat.RTCWrapper.connection.extra.fullId]});
		});


		return this;
	},
});
