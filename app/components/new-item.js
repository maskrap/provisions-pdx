import Ember from 'ember';

export default Ember.Component.extend({
  addNewItem: false,
  actions: {
    itemFormShow() {
      this.set('addNewItem', true);
    },

    save() {
      var params = {
        name: this.get('name')? this.get('name') : "",
        description: this.get('description')? this.get('description') : "",
        category: this.get('category')? this.get('category') : "",
        image: this.get('image')? this.get('image') : "",
        cost: parseFloat(this.get('cost')? this.get('cost') : "").toFixed(2),
      };
      this.set('addNewItem', false);
      this.sendAction('save', params);
    }
  }
});
