// jQuery pluguin for ContextMenus (better popovers)

$.fn.context_menu = function(options) {

	console.log("CContextMenu", this, options);


	var el = $(options.template || '<div></div>');
	this.append(el);
	el.hide();
	el.css({
		position: 'absoute',
		top: 0,
		left: 0,
	});

	_.each(options.events || {}, function(fn, key) {
		console.log("ECECEC", arguments)


	});

}