var TodoItem = Backbone.Model.extend({
  urlRoot: "/todos",

  defaults: {
    text: "",
    completed: false
  },

  toggle: function() {
    console.log(this.get('completed'));
    this.save({ completed: !(this.get('completed')) });
  }
});
