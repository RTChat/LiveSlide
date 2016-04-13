
require('styles/welcome_panel.css');

// Extend WelcomePanel
module.exports = RTChat.Views.WelcomePanel.extend({
	template: `<h2>Welcome To LiveSLide!</h2>
		built using the <a href="https://github.com/RTChat/RTChat">RTChat</a> framework!
		<br><br>
		<a class="btn btn-default" href="#global-chat?">Go To global chat</a>
	`,
});
