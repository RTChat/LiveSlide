

module.exports = RTChat.Views.RoomPanel.extend({
	template: `
		<div class="waiting-msg" rv-hide="scope.rtc_state.slides">
			Waiting for presentation to start..
		</div>
		<div data-subview="viewer"></div>
	`,
		// <div data-subview="chat"></div>
	initialize: function() {
		Backbone.Subviews.add( this );
		var self = this;
		RTChat.RTCWrapper.onStateChange(function(old, newState) {
			console.log("StateUpdate", old, newState);
			// if(self.scope.isAdmin) return; // TODO: Never remove admin?
			// Become admin if the others think you should be.
			if (newState.admins)
			RTChat.RTCWrapper.connection.extra.isAdmin = newState.admins.indexOf(RTChat.RTCWrapper.connection.extra.fullId) !== -1;
			self.scope.rtc_state = newState;
		});
	},
	subviewCreators: {
		viewer: function() { return new RTChat.Views.Viewer(); },
	},
	render: function render() {
		this.$el.html(this.template);
		RTChat.Rivets.bind(this.$el, { scope: this.scope });

		// Make the magic happen~~
		RTChat.RTCWrapper.joinRoom(window.location.hash, { xVideoContainer: this.$('.video-container') }, function(hasPeers) {
			//TODO: push on the list of admins
			if (!hasPeers)
				RTChat.RTCWrapper.updateState({admins: [RTChat.RTCWrapper.connection.extra.fullId]});
		});

		return this;
	},
});
