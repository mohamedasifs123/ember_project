import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class FlashListController extends Controller {
    
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
      console.log('🔥 Loading more...');
      if (model._loading) return;
    
      model._loading = true;
    
      setTimeout(() => {
        let newItems = this.generateItems(15);
        // 🔥 KEY FIX HERE — DO NOT MUTATE, REPLACE!
        model.items = [...model.items, ...newItems];
        model._loading = false;
    
        console.log('Items now:', model.items.length);
      }, 500);
    }
    
 
}
