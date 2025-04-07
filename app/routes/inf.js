import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class FlashListRoute extends Route {
  model() {
    return {
      items: this.generateItems(30),
      _loading: false
    };
  }

  generateItems(count) {
    let items = [];
    for (let i = 0; i < count; i++) {
      items.push({
        id: `box-${Math.random()}`,
        height: 60 + Math.floor(Math.random() * 120)
      });
    }
    return items;
  }

  @action
  loadMore(model) {
    if (model._loading) return;
console.log('adjsl')
    model._loading = true;
    setTimeout(() => {
      let newItems = this.generateItems(20);
      model.items.push(...newItems);
      model._loading = false;
    }, 500);
  }
}
