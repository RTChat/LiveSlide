
require('styles/welcome_panel.css');

// Extend WelcomePanel
module.exports = RTChat.Views.WelcomePanel.extend({
	template: `<h2>Welcome To LiveSlide!</h2>
		<h4>
			A free and <a href="https://github.com/RTChat/LiveSlide" target="_open" rel="nofollow">open source</a>
			live slideshow presentation app built using the <a href="https://rtchat.github.io" target="_open" rel="nofollow">RTChat</a> framework! </h4>
		<br>
		<a class="btn btn-default" rv-href="'#' |+ scope.random_rooms |index 0">Get started by creating a new room</a>
	`,

	//TODO:
		// <a class="btn btn-default" href="#global-chat">Go To a Random Room</a>
});
