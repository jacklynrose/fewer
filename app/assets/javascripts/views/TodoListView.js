var TodoListView = Backbone.View.extend({
  id: "todo-list",

  initialize: function() {
    this.collection.on("reset", this.render, this);
    this.collection.on("add", this.appendTodo, this);
    this.collection.fetch();
  },

  appendTodo: function(todo) {
    var todoView = new TodoView({model: todo});
    this.$el.append(todoView.render().el);
  },

  render: function() {
    this.collection.each(this.appendTodo);
    return this;
  }
});
