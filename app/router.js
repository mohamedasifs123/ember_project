import EmberRouter from '@ember/routing/router';
import config from 'ember-project/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('book-list');
  this.route('add-book');
  this.route('edit');
  this.route('/');
  this.route('truth-helpers-demo');
  this.route('click');
  this.route('select');
  this.route('scrollable');
  this.route('flexible');
  this.route('key');
  this.route('inf');
});
