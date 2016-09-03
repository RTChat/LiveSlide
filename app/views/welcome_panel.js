
require('styles/welcome_panel.css');

// Extend WelcomePanel
module.exports = RTChat.Views.WelcomePanel.extend({
	template: `<h2>Welcome To LiveSlide!</h2>
		A slideshow presentation app built using the <a href="https://rtchat.github.io" target="_open" rel="nofollow">RTChat</a> framework!
		<br><br>
		to get started:
		<br>
		<a class="btn btn-default" rv-href="'#' |+ scope.random_rooms |index 0">Go To a Random Room</a>
	`,
	//TODO:
		// <a class="btn btn-default" href="#global-chat">Go To a Random Room</a>
});
