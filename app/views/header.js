
module.exports = RTChat.Views.Header.extend({
	template: `
		<div class="fa fa-bars"></div>
		<span>
			<span rv-unless="scope.roomName">{ scope.appName }</span>
			<span rv-if="scope.roomName"><a href="#">{ scope.appName }</a> / { scope.roomName }</span>
		</span>
		<button class="stop btn btn-default fa fa-stop" rv-show="rtc.state.presentation"></button>
		<button class="ping btn btn-default fa fa-crosshairs" rv-class-active="capturePing" rv-show="rtc.state.presentation"></button>
		<div data-subview="user_menu"></div>
	`,
	events: {
		'click .stop': function(e) {
			RTCWrapper.state.presentation = null;
			RTCWrapper.syncState();
		},
		'click .ping': function(e) {
			this.scope.capturePing = !this.scope.capturePing;
			e.stopPropagation();
		},
	},
	initialize: function() {
		Backbone.Subviews.add( this );
		this.scope.rtc = RTChat.RTCWrapper;
	}
});
