import Component from '@glimmer/component';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/template';

function numberToOpacity(number) {
  if (number % 255 === 0) return 1;
  if (number % 255 === 254) return 0;
  return (255 / (number % 255)).toFixed(3);
}

export default class NumberSlideComponent extends Component {
  get style() {
    const { item } = this.args;
    const isDynamic = this.args.isDynamic || false;

    const opacity = numberToOpacity(item.number);
    let styleStr = `background: rgba(0,125,255,${opacity});`;

    if (isDynamic) {
      styleStr += ` height: ${Math.round(item.height)}px; box-sizing: content-box;`;
    }

    return htmlSafe(styleStr);
  }
}
