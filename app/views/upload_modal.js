
require('styles/upload_modal.css');

var ImgurLoader = require('utils/imgur_loader.js');

module.exports = Backbone.View.extend({
  className: 'modal fade upload',
  template: `
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title">Upload Presentation to Imgur</h4>
        </div>

        <div class="modal-body">
          <form class="form-inline">
            <div class="form-group">
              <input type="text" placeholder="Presentation Name" name="name" autocomplete="off" class="form-control">
            </div>
            <label class="btn btn-default" for="fileSelector">
              <input id="fileSelector" type="file" name="file" style="display:none;">
              <span>Select File</span>
            </label>
          </form>
          <div class="alert alert-danger" rv-show="errorMsg">
            <strong>Error:</strong> { errorMsg }
          </div>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-primary upload">Upload</button>
          <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
          <div class="progress" rv-show="progress">
            <div class="progress-bar progress-bar-striped active" rv-width="progress"></div>
          </div>
        </div>
      </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
  `,
  events: {
    'click .disabled' : function (e) {
      e.preventDefault();
      e.stopImmediatePropagation();
    },
    'change  #fileSelector': function(e) {
      // Update button text when a file is selected.
      $(e.target).next('span').html(e.target.files[0].name);
    },
    'click button.upload': function() {
      var self = this;
      this.scope.errorMsg = undefined; //TODO: error array

      // Validate File.
      if (this.$('form [name="file"]')[0].files.length < 1) {
        return this.scope.errorMsg = "Must select a file!";
      }

      var user_conf = RTChat.UserService.getAppConf();
      var data = (new FormData(this.$('form')[0]));
      data.set("username", user_conf.imgur_account_name);
      data.set("refresh_token", user_conf.imgur_refresh_token);

      // Validate Name.
      if (this.$('form [name="name"]').val().length < 1) {
        // return this.scope.errorMsg = "Must enter a name!";
        data.set("name", this.$('form [name="file"]')[0].files[0].name)
      }

      // Submit!
      ImgurLoader.upload({
        data:  data,
        // Enable progress tracking.
        xhr: function() {
          var xhr = new window.XMLHttpRequest();
          xhr.upload.addEventListener("progress", function (e) {
            console.log("UPLOAD", e.loaded / e.total)
            self.onprogress(e.loaded / e.total);
          }, false);
          xhr.addEventListener("progress", function (e) {
            console.log("DOWNLOAD", e.loaded, '/', e.total)
            // self.onprogress(e.loaded / e.total);
          }, false);
          //TODO: imgur_upload progress??
          return xhr;
        },
      }, function() { // After Upload...
        //TODO: display success msg.
        self.hide();
        self.onsuccess && self.onsuccess();
      });

      // Disable elements.
      this.$('.btn').addClass('disabled');
      this.$('input').prop('disabled', true);

      // start progress bar.
      self.onprogress(0.001);
    }
  },
  initialize: function() {
    this.scope = {};
  },
  onprogress: function(percent) {
    this.scope.progress = percent;
    this.$('.progress-bar').css({width: percent*100+'%'});
  },
  onsuccess: null,
  render: function() {
    this.onprogress(0);
    this.$el.html(this.template);
    Rivets.bind(this.$el, this.scope);

    return this;
  },
  show: function() {
    this.render().$el.modal('show');
    this.trigger('show');
  },
  hide: function() {
    this.$el.modal('hide');
    this.trigger('hide');
  },
});
