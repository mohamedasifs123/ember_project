import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as controller } from '@ember/controller';
import { inject as service } from '@ember/service';

export default class BookListController extends Controller {
  @controller application; // Inject application controller
@service flashMessages;
  @action
  deleteBooks(selectedIndexes) {
this.flashMessages.Delete('Books deleted successfully!');
    this.application.books = this.application.books.filter(
      (_, index) => !selectedIndexes.includes(index),
    );
  }

  @action
  startEditing(book, index) {
    this.application.editingBook = book;
    this.application.editingIndex = index;
  }
  @action
  deleteBook(index) {
    this.flashMessages.add({
      message: 'books deleted successfully!',
      type: 'Delete',
      timeout: 500,
      priority: 200,
      sticky: true,
      showProgress: true,
      extendedTimeout: 500,
      destroyOnClick: false,
      onDestroy() {
        // behavior triggered when flash is destroyed
      },
    });
     this.application.books = this.application.books.filter(
      (_, i) => i !== index,
    );
  }
}
