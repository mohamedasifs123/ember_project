import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { or } from 'ember-truth-helpers';
import {task,timeout  } from 'ember-concurrency'
export default class BookFormComponent extends Component {
  @tracked bookName = this.args.editingBook?.name || '';
  @tracked bookAuthor = this.args.editingBook?.author || '';
  @tracked bookPrice = this.args.editingBook?.price || '';
  @tracked bookGender = this.args.editingBook?.gender ||' Male';
  @tracked bookCategories = this.args.editingBook?.categories || [];
  @service flashMessages;
  options = ['Fiction', 'Non-Fiction', 'Science', 'History', 'Fantasy'];
genders = ['Male', 'Female'];
  @action
  selectCategory(category) {
    this.selectedCategory = category;
  }
  @action
  updateField(event) {
    this[event.target.name] = event.target.value;
  }
  @tracked bookCategories = [];


  @action
  toggleCategory(category) {
    if (this.bookCategories.includes(category)) {
      this.bookCategories = this.bookCategories.filter((c) => c !== category);
    } else {
      this.bookCategories = [...this.bookCategories, category];
    }
  }

  @task
  *saveBook() {
    this.flashMessages.success('Cool story bro', {
      someOption: 'hello',
    });

    this.flashMessages.add({
      message: 'hello',
      type: 'foo',
      componentName: 'some-component',
      content: customContent,
    });
    if (!this.bookName || !this.bookAuthor || !this.bookPrice || !this.bookGender) {
      this.flashMessages.success('Please fill all required fields!');
      return;
    }
    yield new Promise((resolve) => setTimeout(resolve, 2000));
    this.flashMessages.success(
      this.args.editingBook ? 'Book updated successfully!' : 'Book added successfully!'
    );
    this.flashMessages.add({
      message:  this.bookName,

      type: 'alpaca',
      timeout: 500,
      priority: 200,
      sticky: true,
      showProgress: true,
      extendedTimeout: 500,
      destroyOnClick: true,
      onDestroy() {
        // behavior triggered when flash is destroyed
      },
    });

    this.args.onSave({
      name: this.bookName,
      author: this.bookAuthor,
      price: this.bookPrice,
      gender: this.bookGender,
      categories: this.bookCategories,
    });

    // Reset form after saving
    this.bookName = '';
    this.bookAuthor = '';
    this.bookPrice = '';
    this.bookGender = '';
    this.bookCategories = [];

  }


}
