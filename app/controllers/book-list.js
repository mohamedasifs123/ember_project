import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as controller } from '@ember/controller';
import { inject as service } from '@ember/service';

export default class BookListController extends Controller {
  @controller application; // Inject application controller
@service flashMessages;
 


  @action
  startEditing(book, index) {
    this.application.editingBook = book;
    this.application.editingIndex = index;
  }
  @action
  odeleteBook(name) {
    this.flashMessages.add({
      message: 'Book deleted successfully!',
      type: 'Delete',
      timeout: 500,
      priority: 200,
      sticky: true,
      showProgress: true,
      extendedTimeout: 500,
      destroyOnClick: false,
    });

    this.application.books = this.application.books.filter(
      (book) => book.name !== name
    );
  }
  @action
  deleteBook(bookId) {
    this.application.books = this.application.books.filter(b => b.id !== bookId);
  }
  @action
  deleteBooks(selectedIds) {
    this.application.books = this.application.books.filter(
      (book) => !selectedIds.includes(book.id)
    );
  }
  
}
