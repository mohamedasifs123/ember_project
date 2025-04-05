import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class EditComponent extends Component {
  @tracked selectedBooks = new Set();
  @tracked searchQuery = '';

  @action
  toggleSelection(index) {
    if (this.selectedBooks.has(index)) {
      this.selectedBooks.delete(index);
    } else {
      this.selectedBooks.add(index);
    }
    this.selectedBooks = new Set(this.selectedBooks); // Ensure UI updates
  }


  @action
  bulkDelete() {
    if (this.selectedBooks.size === 0) {
      alert('No books selected!');
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
  @action
  startEditing(book, index) {
    this.editingBook = book;
    this.editingIndex = index;
  }
}
