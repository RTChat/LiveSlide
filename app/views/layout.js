
require('styles/layout.css');

var original_events = RTChat.Views.Layout.prototype.events;

module.exports = RTChat.Views.Layout.extend({
	events: _.extend(original_events, {
		'click .ping': function() {
			this.subviews.room.subviews.viewer.startPing()
		},
		// 'click': function(ev) {
		// 	console.log("fffff", ev)
		// 	// Close all popovers
		// 	// $('.popover').popover('hide');
		// }
	}),
	initialize: function() {
		var self = this;
		Backbone.Subviews.add( this );

		// Imgur OAuth2 gives us special query-string parameters. Use em then loose em.
		if (window.location.href.match(/\?state=/)) {
			var params = paramsToObj();
			RTChat.UserService.setAppConf({
				// imgur_account_id: params.account_id,
				imgur_account_name: params.account_username,
				imgur_refresh_token: params.refresh_token
			});
			// The "state" is the previous roomName; navigate there.
			return window.location.href.replace(/\?.*$/, "#"+(params.state||''));
		}

		$(window).on('hashchange', function() { self.render(); });
	},
});

function paramsToObj(url) {
		if (!url) url = window.location.href;
		var obj = {}
		//TODO: urldecode
		url.replace(/(^|\?|&|#)([^\?&=#]+)=([^\?&=#]+)/g, function(m, a, key, value) {
			// console.log("XX", arguments)
			obj[key] = value;
		});
		return obj;
}

// console.log("paramsToObject Tests:");
// var one = "?thing1=blah&thing2=lame";
// console.log(one, "==>", paramsToObj(one));
