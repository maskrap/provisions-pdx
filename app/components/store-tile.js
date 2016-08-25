import Ember from 'ember';

export default Ember.Component.extend({

  sortBy: ['cost:asc'],
  sortedItems: Ember.computed.sort('items', 'sortBy'),

});
