import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  cost: DS.attr(),
  description: DS.attr(),
  image: DS.attr(),
  ratings: DS.attr(),
  category: DS.belongsTo('category', { async: true}),
  comments: DS.hasMany('comment', { async: true }),
});
