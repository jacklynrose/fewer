var TodoView = Backbone.View.extend({
  className: "todo",
  template: Handlebars.compile($("#todo-template").html()),

  initialize: function() {
    this.model.on("destroy", this.removeSelf, this);
    this.model.on("remove", this.removeSelf, this);
    this.model.on("change", this.render, this);
  },

  events: {
    "click .delete": "delete",
    "click .complete": "complete"
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },

  delete: function() {
    this.model.destroy();
  },

  removeSelf: function() {
    this.$el.remove();
  },

  complete: function(event) {
    this.model.toggle();
    event.preventDefault();
  }
});
