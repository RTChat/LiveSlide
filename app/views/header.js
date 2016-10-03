
require('styles/header.css');

var Clipboard = require('clipboard');

var original_render = RTChat.Views.Header.prototype.render;

module.exports = RTChat.Views.Header.extend({
	attributes: {
		"rv-show": "scope.noHash |or scope.extra.isAdmin"
	},
	template: `
		<div class="fa fa-bars toggle-left-sidebar"></div>
		<span class="bold">
			<span rv-unless="scope.roomName">{ scope.appName }</span>
			<span rv-if="scope.roomName"><a href="#">{ scope.appName }</a></span>
		</span>
		<div class="tools">
			<span><span class="stop fa fa-stop" rv-show="scope.state.albumId"></span></span>
			<span><span class="ping fa fa-crosshairs" rv-class-active="capturePing" rv-show="scope.state.albumId"></span></span>
		</div>
		<span class="pull-right" rv-show="scope.roomName">
			{ scope.users |length } viewers
		</span> &nbsp;
		<div class="tools">
			<span class="fa fa-clipboard" rv-show="scope.roomName"
				tooltip="Invite link copied to Clipboard"
				rv-data-clipboard-text="scope.href">
			</span>
		</div>
	`,
	events: {
		'click .stop': function(e) {
			RTChat.RTCWrapper.updateState({albumId: null, slides: null});
		},
		// 'click .ping': function(e) { // Handled by "layout" view
	},
	render: function() {
		original_render.call(this); // super

		// Init tooltip
		this.$('[tooltip]').Opentip({
			targetJoint: 'left bottom',
			showOn: 'click',
			hideDelay: 2.0,
		});

		var self = this;
		RTChat.RTCWrapper.onStateChange(function(old, newState) {
			self.scope.state = newState;
			self.scope.users = RTChat.RTCWrapper.users;

			if (!self.scope.extra)
				self.scope.extra = RTChat.RTCWrapper.connection.extra;
		});

		this.scope.href = window.location.href;
		this.scope.noHash = !window.location.hash;

		// Enable clipboard
		new Clipboard('[rv-data-clipboard-text]');
	}
});
