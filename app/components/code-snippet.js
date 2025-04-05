import Component from '@glimmer/component';

export default class extends Component {
  a=2;
  get snippet() {
    return this.a+2
  }
}
