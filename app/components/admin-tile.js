import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(item, params) {
      this.sendAction('update', item, params);
    },
    delete(item) {
      if (confirm('Are you sure you want to delete this item?')) {
        this.sendAction('destroyItem', item);
      }
    }
  }
});
