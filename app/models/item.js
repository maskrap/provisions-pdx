import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  cost: DS.attr(),
  description: DS.attr(),
  category: DS.attr(),
  image: DS.attr(),
  comments: DS.hasMany('comment', { async: true }),
});
