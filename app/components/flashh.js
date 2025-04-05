import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class TruthHelpersDemoComponent extends Component {
  @tracked a = 0;
  @tracked b = 0;
  @tracked isActive = false;
  @tracked items = [];

  @action
  updateA(event) {
    this.a = Number(event.target.value);
  }

  @action
  updateB(event) {
    this.b = Number(event.target.value);
  }
}
