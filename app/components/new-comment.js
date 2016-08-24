import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveComment() {
      var params = {
        name: this.get('name'),
        comment: this.get('comment'),
        item: this.get('item'),
      };
      this.sendAction('saveComment', params);
    },
  }
});
