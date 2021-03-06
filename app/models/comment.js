import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  comment: DS.attr(),
  rating: DS.attr(),
  item: DS.belongsTo('item', { async: true})
});
