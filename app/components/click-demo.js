
import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class ClickDemoComponent extends Component {
  @action
  handleClick() {
    alert("Button clicked!");
  }

  @action
  outsideClicked() {
    alert("You clicked outside!");
  }
}
