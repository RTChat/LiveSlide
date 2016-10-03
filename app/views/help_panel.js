// HelpPanel - teaches presenters how to use LiveSlide.

module.exports = Backbone.View.extend({
	id: 'HelpPanel',
	template: `
		<h3>
			Getting Started is simple:
			<span class="pull-right fa fa-times toggle-help"></span>
		</h3>
		<ol>
			<li>
				<span class="signin inline btn btn-primary bold"> Sign-in with Imgur </span> or
				<span class="add-acct inline btn btn-default"> add anothers account </span>
			</li>
			<li><span class="upload btn btn-default"> Upload presentation to imgur </span></li>
			<li><span class="invite btn btn-default"> Invite people to view your live presentation </span></li>
			<li><span class="start disabled btn btn-default"> Start presentation by clicking it in the sidebar </span></li>
		</ol>
		<span class="fa fa-bug"></span>
		<a href="https://github.com/RTChat/LiveSlide/issues/new">report a bug</a>
	`,
	//NOTE: this is extremely hacky as it relies on, and manipulates other views ☠
	events: {
		'click .signin': function(ev) {
			$('#Sidebar .signin .fa-question-circle').click();
		},
		'click .add-acct': function(ev) {
			$('#Sidebar .add-acct .fa-question-circle').click();
		},
		'click .upload': function(ev) {
			var target = $('#Sidebar .fa-upload');
			if (target.length > 0)
				target.click();
			else
				this.$('.signin').click();
		},
		'click .invite': function(ev) {
			$('#Header .fa-clipboard').click();
		},
		// StopProp on all buttons.
		'click .btn': function(ev) {
			ev.stopPropagation();
		}
	},
	render: function() {
		this.$el.html(this.template);

		// Disable "sign in" button when signed in.
		if (RTChat.UserService.getAppData().signedin_imgur_accounts)
			this.$('.signin').addClass("disabled");

		return this;
	}
});
