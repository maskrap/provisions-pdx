import Ember from 'ember';

export default Ember.Component.extend({
  showUpdateForm: false,

  actions: {
    showUpdateForm() {
      this.set('showUpdateForm', true);
    },
    update(item) {
      item.save();
      this.set('showUpdateForm', false);
    }
  }
});
