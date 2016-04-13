// LiveSlide - Presentation webapp built using the RTChat framework.

// Load all views in an extensible way.
// "views/sample_view.js" becomes "views.SampleView".
var views = RTChat.load_module(require.context('app/views', true, /\.js$/));

// Extend Views
_.extend(RTChat.Views, views);

// Extend AppConfig
_.extend(RTChat.AppConfig, require('app/config.json'));
