import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class BookListComponent extends Component {
  @tracked selectedBooks = new Set(); // Multiple selection
  @tracked singleSelectedBook = null; // Single selection
  @tracked searchQuery = '';
  @service  flashMessages;

  @action
  alert() {
    alert('Click outside detected!');
  }
  @service notifications;

  @action
  toggleSelection(bookId) {
    if (this.selectedBooks.has(bookId)) {
      this.selectedBooks.delete(bookId);
    } else {
      this.selectedBooks.add(bookId);
    }
    this.selectedBooks = new Set(this.selectedBooks); // re-trigger render
  }

 
  @action
  bulkDelete() {
    if (this.selectedBooks.size === 0) {
  this.flashMessages.success('No books selected!');
      return;
    }

    this.args.onBulkDelete([...this.selectedBooks]);
    this.selectedBooks.clear();
  }

  @action
  updateSearch(event) {
    this.searchQuery = event.target.value;
  }

  @action
  searchBook() {
    let found = this.args.books.some(
      (book) => book.name.toLowerCase() === this.searchQuery.toLowerCase(),
    );

    if (found) {
      alert('Book found!');
    } else {
      alert('Book not found!');
    }
  }

  @action
  deleteBook(index) {
     this.args.onDelete(index);
  }
}
