
require("styles/room_panel.css");

module.exports = RTChat.Views.RoomPanel.extend({
	template: `
			<div class="waiting-msg" rv-hide="rtc.state.presentation">
				Waiting for presentation to start..
			</div>
			<div class="viewer" class="carousel slide" rv-show="slides | length | gt 0">
			<!-- Indicators -->
			<ol class="carousel-indicators" rv-show="user.isAdmin">
				<li rv-each-item="slides" rv-data-slide-to="index" data-target="#viewer"></li>
			</ol>

			<!-- Wrapper for slides -->
			<div class="carousel-inner" role="listbox">
				<div rv-each-url="slides" class="item">
					<img rv-src="url" alt="...">
				</div>
			</div>

			<!-- Controls -->
			<a class="left carousel-control" rv-show="user.isAdmin" href="#viewer" role="button" data-slide="prev">
				<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
				<span class="sr-only">Previous</span>
			</a>
			<a class="right carousel-control" rv-show="user.isAdmin" href="#viewer" role="button" data-slide="next">
				<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
				<span class="sr-only">Next</span>
			</a>
			<div class="ping" class="fa fa-circle-thin hidden"></div>
		</div>
	`,
	// render: function() {
	// 	console.log("Im sumb", this.render)
	// }


});
