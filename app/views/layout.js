
require('styles/layout.css');

var original_events = RTChat.Views.Layout.prototype.events;

module.exports = RTChat.Views.Layout.extend({
	events: _.extend(original_events, {
		'click .ping': function() {
			this.subviews.room.subviews.viewer.startPing()
		}
	}),
});
