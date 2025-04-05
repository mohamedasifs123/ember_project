import { A } from '@ember/array';
import Route from '@ember/routing/route';
 import { tracked } from '@glimmer/tracking';

class ModelData {
  @tracked data;
}
   function booleanToss() {
  return Math.round(Math.random());
}
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

function getWidth() {
  return getRandomNumber(1500, 1920);
}

  function getDynamicHeight() {
  return getRandomNumber(300, 600);
}

  function getDynamicWidth(height, isPortrait) {
  return Math.round(isPortrait ? height / 16 * 9 : height / 9 * 16);
}
  function get(start, total, prefix = '') {
  let ret = [];
  let height;

  for (let i = start; i < start + total; i++) {
    height = Math.max(getDynamicHeight() * Math.random(), 40);
    ret.push({
      number: i,
      height,
      width: getDynamicWidth(height, booleanToss()),
      prefixed: prefix + i
    });
  }

  return ret;
}
export default Route.extend({
  model() {
    let model = new ModelData();
    model.data = {
      numbers: A(get(0, 100)),
      first: 0,
      last: 100
    };
    return model;
  },

  actions: {
    willTransition() {
      this.currentModel = null;
    }
  }
});
