var TodoList = Backbone.Collection.extend({
  url: '/todos',
  model: TodoItem
});
