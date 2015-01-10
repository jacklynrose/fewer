var ControlsView = Backbone.View.extend({
  template: Handlebars.compile($("#controls-template").html()),

  events: {
    "keypress input": "addTodo"
  },

  $input: function() {
    return this.$el.find("input");
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  addTodo: function(event) {
    if ( (event.keyCode || event.which) == 13 && this.$input().val().trim() ) {
      this.collection.create({ text: this.$input().val() });
      this.$input().val("");
    }
  }
});
