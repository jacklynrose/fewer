$(function() {
  var app = new TodoApp;
  Backbone.history.start({ pushState: true });

  $(document).on("click", "a:not([data-bypass])", function(event) {
    var href = $(this).attr("href"),
    protocol = this.protocol + "//";

    if ( href.slice(protocol.length) !== protocol ) {
      event.preventDefault();
      app.router.navigate(href, true);
    }
  });
});
