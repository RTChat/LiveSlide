
module.exports = RTChat.Views.Header.extend({
	attributes: {
		"rv-show": "scope.noHash |or scope.extra.isAdmin"
	},
	template: `
		<div class="fa fa-bars toggle-left-sidebar"></div>
		<span>
			<span rv-unless="scope.roomName">{ scope.appName }</span>
			<span rv-if="scope.roomName"><a href="#">{ scope.appName }</a>
				<span rv-if="scope.state.presentation"> &nbsp; { scope.state.presentation } </span>
			</span>
		</span>
		<button class="stop btn btn-default fa fa-stop" rv-show="scope.state.albumId"></button>
		<button class="ping btn btn-default fa fa-crosshairs" rv-class-active="capturePing" rv-show="scope.state.albumId"></button>
		<span class="pull-right" rv-show="scope.roomName">
			{ scope.rtc.connection.peers | length } viewers
		</span>
	`,
	//TODO:
		// <span> Copy Invite Link </span>
	events: {
		'click .stop': function(e) {
			RTChat.RTCWrapper.updateState({albumId: null, slides: null})
		},
		// 'click .ping': function(e) { // Handled by "layout" view
	},
	initialize: function() {
		var self = this;
		Backbone.Subviews.add( this );
		RTChat.RTCWrapper.onStateChange(function(old, newState) {
			if (!self.scope.extra)
				self.scope.extra = RTChat.RTCWrapper.connection.extra;
			self.scope.state = newState;
		});
		this.scope.noHash = function() {return !window.location.hash}
	},
});
