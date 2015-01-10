var TodoApp = Backbone.Router.extend({
  $container: $("#container"),
  $content: $("#content"),
  $controls: $("#controls"),

  initialize: function() {
    this.collection = new TodoList;
    var controlsView = new ControlsView({ collection: this.collection });
    this.$controls.html(controlsView.render().el);

    setInterval(function(collection) {
      collection.fetch();
    }, 2000, this.collection);
  },

  routes: {
    "": "index"
  },

  index: function() {
    var todoListView = new TodoListView({ collection: this.collection });
    this.$content.html(todoListView.render().el);
  }
});
