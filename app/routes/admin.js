import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('item');
  },
  actions: {
    save(params) {
      var newItem = this.store.createRecord('item', params);
      newItem.save();
      this.transitionTo('admin');
    },

    update(item, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          item.set(key,params[key]);
        }
      });
      item.save();
      this.transitionTo('admin');
    },

    destroyItem(item) {
      item.destroyRecord();
      this.transitionTo('admin');
    }
  }
});
