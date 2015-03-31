HomeController = AppController.extend({
  waitOn: function() {
    return this.subscribe('items');
  },
  data: {
    items: Items.find({_id: 1})
  },
  onAfterAction: function () {
    //Meta.setTitle('Click the World');
  }
});
