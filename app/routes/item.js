import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('item', params.item_id);
  },

  actions: {
    saveComment(params) {
      var newComment = this.store.createRecord('comment', params);
      var item = params.item;
      item.get('comments').addObject(newComment);
      newComment.save().then(function() {
        return item.save();
    });
      this.transitionTo('item', params.item);
    },
  }
});
