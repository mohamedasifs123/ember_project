import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ApplicationController extends Controller {
@service flashMessages;
@tracked books = [
  {
    name: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    price: 12,
    gender: 'Male',
    categories: ['Classic', 'Drama'],
  },
  {
    name: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    price: 15,
    gender: 'Female',
    categories: ['Historical', 'Drama'],
  },
  {
    name: '1984',
    author: 'George Orwell',
    price: 18,
    gender: 'Male',
    categories: ['Dystopian', 'Political'],
  },
  {
    name: 'Pride and Prejudice',
    author: 'Jane Austen',
    price: 10,
    gender: 'Female',
    categories: ['Romance', 'Classic'],
  },
  {
    name: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    price: 20,
    gender: 'Male',
    categories: ['Fantasy', 'Adventure'],
  },
  {
    name: 'The Silent Patient',
    author: 'Alex Michaelides',
    price: 16,
    gender: 'Non-Binary',
    categories: ['Thriller', 'Mystery'],
  },
  {
    name: 'Sapiens: A Brief History of Humankind',
    author: 'Yuval Noah Harari',
    price: 22,
    gender: 'Prefer Not to Say',
    categories: ['Non-Fiction', 'History'],
  },
  {
    name: 'Dune',
    author: 'Frank Herbert',
    price: 25,
    gender: 'Male',
    categories: ['Science Fiction', 'Adventure'],
  },
  {
    name: 'Little Women',
    author: 'Louisa May Alcott',
    price: 14,
    gender: 'Female',
    categories: ['Classic', 'Family'],
  },
  {
    name: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    price: 13,
    gender: 'Male',
    categories: ['Coming-of-Age', 'Classic'],
  },
  {
    name: 'Educated',
    author: 'Tara Westover',
    price: 17,
    gender: 'Female',
    categories: ['Memoir', 'Biography'],
  },
  {
    name: 'Brave New World',
    author: 'Aldous Huxley',
    price: 19,
    gender: 'Male',
    categories: ['Dystopian', 'Science Fiction'],
  },
];


  @tracked editingBook = null; // Track book being edited
  @tracked editingIndex = null; // Track index for updating
  @action
  alert() {
    alert('Click outside detected!');
  }

  @tracked showLongMessage = false;

  shortMessage = "The books are great...";
  longMessage = "The books are great! They provide so much knowledge and entertainment.";

  @action
  toggleMessage() {
    this.showLongMessage = !this.showLongMessage;
  }
  @action
  deleteBooks(selectedIndexes) {
    this.books = this.books.filter(
      (_, index) => !selectedIndexes.includes(index),
    );
  }

  @action
  deleteBook(index) {
    this.flashMessages.success('Book deleted successfully!');
    this.books = this.books.filter((_, i) => i !== index);
  }

  @action
  startEditing(book, index) {
    this.editingBook = book;
    this.editingIndex = index;
  }
  @action

    apply(startDate, endDate, picker) {
      console.log('date range updated:', startDate + ' - ' + endDate);
      console.log('Picker: ', picker);
    }
@action
    cancel() {
      console.log('date range change canceled');
    }



}
