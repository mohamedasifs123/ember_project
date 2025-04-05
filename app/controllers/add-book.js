import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as controller } from '@ember/controller';
import { inject as service } from '@ember/service';

export default class AddBookController extends Controller {
  @controller application; // Inject application controller
  @service flashMessages;

  @action
  addBook(newBook) {
    this.application.books = [...this.application.books, newBook]; // Add new book to array
  }

  @action
  addOrUpdateBook(book) {
    if (this.application.editingBook !== null) {
      // Update existing book
      this.application.books[this.application.editingIndex] = book;
      // Bootstrap: the flash message component will have 'alert alert-success' classes
// Foundation: the flash message component will have 'alert-box success' classes
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
