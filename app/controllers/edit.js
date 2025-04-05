import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as controller } from '@ember/controller';

export default class BookListController extends Controller {
  @controller application; // Inject application controller
  @action
  cancelEditing() {
    this.application.editingBook = null;
    this.application.editingIndex = null;
  }
  @action
  startEditing(book, index) {
    this.application.editingBook = book;
    this.application.editingIndex = index;
  }

  @action
  addOrUpdateBook(book) {
    if (this.application.editingBook !== null) {
      // Update existing book
      this.application.books[this.application.editingIndex] = book;
      this.application.books = [...this.application.books]; // Trigger UI update
    } else {
      // Add new book
      this.application.books = [...this.application.books, book];
    }

    // Reset editing state
    this.application.editingBook = null;
    this.application.editingIndex = null;
  }
}
