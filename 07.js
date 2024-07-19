const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    publisher: "Doubleday",
    print: () => {console.log(book);}
}
// console.log(book.print());
// book.print()

// const title = book.title
// console.log(title);
// console.log(book.author);

book.details = () => {return `'${book.author}' is the author of the book '${book.title}'`}

// console.log(book.details());

// book.updateDate = (newYear) => {book.year = newYear}
// console.log(book.year);
// book.updateDate(1926)
// console.log(book.year);

const library = [
    {
        title: 'book1',
        author: 'kunal',
        year: 1975
    },
    {
        title: 'book2',
        author: 'rahul',
        year: 2008
    },
    {
        title: 'book3',
        author: 'vishal',
        year: 2003
    }
]

// console.log(library);

// library.forEach(book => {
//     console.log(book.title);
// });

const book4 = {
        title: 'book1',
        author: 'vishal',
        year: 2003,
        info: function() {
            return `${this.author} is the author of the book ${this.title}`;
        }
}

// console.log(book4);
// console.log(book4.info);
// console.log(book4.info());

// for(let i in book)
//     {
//         console.log(i+" : "+book[i])
//     }

console.log(Object.keys(book))
console.log(Object.values(book))