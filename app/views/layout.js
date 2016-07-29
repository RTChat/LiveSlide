
require('styles/layout.css');

// var original_render = RTChat.Views.Layout.prototype.render;

module.exports = RTChat.Views.Layout.extend({
	// render: function() {
		// original_render.call(this);

	// 	// Room-names ending w/ a questionmark will display the "admin" view.
	// 	if (document.location.hash.substr(document.location.hash.length -1) == '?') {
	// 		this.$el.addClass("admin");
	// 	}	else {
	// 		this.$el.removeClass("admin");
	// 	}

	// 	return this;
	// }
});
