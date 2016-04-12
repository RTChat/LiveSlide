// LiarsDice! - built using the RTChat framework.

// Extend Views
_.extend(RTChat.Views, {
	WelcomePanel: require('app/views/welcome_panel.js'),
});

// Extend AppConfig
_.extend(RTChat.AppConfig, require('app/config.json'));
