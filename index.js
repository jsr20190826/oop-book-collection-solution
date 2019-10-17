class BookList {
  constructor () {
    this._numberOfBooksRead = 0
    this._numberOfUnreadBooks = 0
    this._currentBook = null
    this._nextBook = null
    this._previousBook = null
    this._books = []
  }

  add (book) {
    this._books.push(book)
  }

  startReadingFirstBook () {
    // check to ensure array has books inside
    // if it does, then set the currentBook to the first "unread" book in the _books array

    if (this._books.length > 0) {
      this._currentBook = this._books.find((book) => book.read === false)
    }
  }

  finishCurrentBook () {
    // mark the current book that is being read as "read = true"
    this._currentBook.markAsRead()

		// Give it a read date of new Date()
    this._currentBook.dateRead = new Date()

		// Change the last **book** read to be the book that just got finished
    this._previousBook = this._currentBook

    // set the new _currentBook to the next book in the _books array

    // find the first book in the array that has not been read
    this._currentBook = this._books.find((book) => book.read === false)

		// Change the next **book** to be read property to be the first unread book you find in the list of books
    this._nextBook = this._books.filter((book) => book.read === false)[1]
    // this._nextBook = this._books[indexOfCurrentBook + 2]
  }
}

class Book {
  constructor (title, genre, author, read) {
    this._title = title
    this._genre = genre
    this._author = author
    this._read = read // boolean
    this._dateRead = null
  }

  get read () {
    return this._read
  }

  markAsRead () {
    this._read = true
  }

  set dateRead (newDate) {
    this._dateRead = newDate
  }
}

const odessey = new Book('The Odessey', 'epic poem', 'Homer', false)
const huckFinn = new Book('Huckberry Finn', 'fiction', 'Tom Sawyer', false)
const winningFriends = new Book('how to win friends and influence people', 'non-fiction', 'Dale Carnegie ', true)
const rasinInSun = new Book('Raisin in Sun', 'fiction', 'Lorraine Hansberry', false)
const leanStartup = new Book('Lean Startup', 'non-fiction', 'Eric Ries', true)
const tenXRule = new Book('The 10X Rule', 'non-fiction', 'Grant Cardone', false)

const bookList = new BookList()

// console.log(odessey)
// console.log(huckFinn)
console.log(bookList)

bookList.add(odessey)
bookList.add(huckFinn)
bookList.add(winningFriends) // read = true
bookList.add(raisinInSun)
bookList.add(leanStartup) // read = true
bookList.add(tenXRule)

console.log(bookList)

bookList.startReadingFirstBook()

console.log(bookList)

bookList.finishCurrentBook()

console.log(bookList)

bookList.finishCurrentBook()

console.log(bookList)

bookList.finishCurrentBook()

console.log(bookList)
