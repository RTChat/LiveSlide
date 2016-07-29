// A glorified wrapper for bootstrap carousel.

require('styles/viewer.css');

module.exports = Backbone.View.extend({
  id: 'Viewer',
  template: `
    <div class="carousel slide" rv-show="scope.state.slides | length | gt 0" rv-class-mouse-crosshair="scope.capturePing">
      <!-- Indicators -->
      <ol class="carousel-indicators" rv-show="scope.extra.isAdmin">
        <li rv-each-item="scope.state.slides" rv-data-slide-to="index" data-target="#Viewer .carousel"></li>
      </ol>

      <!-- Wrapper for slides -->
      <div class="carousel-inner" role="listbox">
        <div rv-each-url="scope.state.slides" class="item">
          <img rv-src="url" alt="...">
        </div>
      </div>

      <!-- Controls -->
      <a class="left carousel-control" rv-show="scope.extra.isAdmin" href="#Viewer .carousel" role="button" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" rv-show="scope.extra.isAdmin" href="#Viewer .carousel" role="button" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>

      <!-- Ping -->
      <div class="ping fa fa-circle-thin hidden"></div>
    </div>
  `,
  events: {
    'click .carousel-control': function(e) {
      // if (!(this.scope.extra.isAdmin)) return;
      var self = this;
      var dir = this.$(e.currentTarget).data('slide');
      setTimeout(function() { // HACK: wait for bootstrap to do its thing
        var cur = $('.carousel-inner > .item.'+dir).index('.item');
        RTChat.RTCWrapper.updateState({ currentSlide: cur });
        self.renderPing(false); // Stop ping
      });
    },
    'click .carousel-indicators > li': function(e) {
      // if (!(this.scope.user.isAdmin)) return;
      RTChat.RTCWrapper.updateState({ currentSlide: $(e.currentTarget).data('slide-to') });
      self.renderPing(false); // Stop ping
    },
    'click .mouse-crosshair': function(e) { // Ping
      this.scope.capturePing = false;
      var viewer = $(e.currentTarget);
      var offset = viewer.offset();
      RTChat.RTCWrapper.updateState({ ping: {
        left: (e.pageX - offset.left) / viewer.width(),
        top: (e.pageY - offset.top) / viewer.height()
      }});
    }
  },
  initialize: function() {
    var self = this;
    RTChat.RTCWrapper.onStateChange(function(prevState, state) {
      if (prevState.albumId != state.albumId) {
        self.scope.state = state;
        self.render(); //TODO: why is a full render necessary? (the carousel doesnt load images otherwise)
      } else if (prevState.currentSlide != state.currentSlide) {
        // self.scope.state = state;
        self.$('.carousel').carousel(state.currentSlide);
        self.renderPing(false);
      } else if (prevState.ping != state.ping) {
        self.renderPing(state.ping);
      }
    });

    this.scope.extra = RTChat.RTCWrapper.connection.extra;
  },
  render: function() {
    this.$el.html(this.template);
    RTChat.Rivets.bind(this.$el, {scope: this.scope});

    // Make the proper slide active.
    var active = this.scope.state && this.scope.state.currentSlide || 0;
    this.$('.item').eq(active).addClass('active');
    this.$('.carousel-indicators > li').eq(active).addClass('active');

    // Prevent autoslide.
    this.$('.carousel').carousel({ interval: false });

    return this;
  },
  startPing: function() {
    this.scope.capturePing = true;
  },
  renderPing: function(ping_state) {
    this.scope.capturePing == false;

    if (!ping_state) ping_state = {top: 0, left: -100}; // Render off screen.
    var viewer = this.$('.active img');
    var offset = parseInt(viewer.css('marginLeft'), 10); // for when the screen is wider than the image.
    var ping = this.$('.ping').removeClass('hidden');
    ping.css({
      top: (ping_state.top * viewer.height()) - (ping.height() / 2),
      left:(ping_state.left * viewer.width()) - (ping.width()  / 2) + offset
    });
    window.getComputedStyle(ping[0]); // Force opacity render.
    ping.addClass('hidden');
  },
  scope: {}
});
