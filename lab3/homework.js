"use strict"
//Part A
//using a regular function
function countSumOfSquares(numbers) {
    return numbers.map(function (num) {
        return (num * num)
    })
        .reduce(
            function (acc, curr) {
                return acc + curr;
            }
            , 0);
}
console.log(countSumOfSquares([1, 2, 3]));

//Part B
//function expression
const printOddNumbers = function (numbers) {
    return numbers.filter(function (num) {
        return num % 2 != 0
    })
}
console.log(printOddNumbers([1, 3, 2, 8, 0, 5, 6, 4]))



//Part C
//arrow function
const printFibo = (n, a, b) => {
    if (n <= 0) {
        console.log("")
        return;
    }


    const fiboSequence = Array(n)
        .fill(0)
        .reduce((sequenceSoFar, unUsedValue, index) => {
            if (index == 0) return [a];
            if (index == 1) return [a, b];
            const nextValue = sequenceSoFar[index - 1] + sequenceSoFar[index - 2];
            return [...sequenceSoFar, nextValue];
        }, []);

    console.log(fiboSequence.join(", "))
}


//Number 2
let user = { name: "John", years: 30, isAdmin: false };
const { name, years: age, isAdmin = false } = user;
console.log(name);
console.log(age);
console.log(isAdmin);

// alert(name);
// alert(age);
// alert(isAdmin);


//Number 3
let libraryBooks = [
    { title: "The Road Ahead", author: "Bill Gates", ID: 1235 },
    { title: "Walter Isaacson", author: "Steve Jobs", ID: 4268 },
    { title: "The Road Ahead", author: "Bill Gates", ID: 4268 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", ID: 3257 }
];

const addBook = function (title, author, ID) {
    //check if book exists
    const exists = libraryBooks.some(book =>
        book.title === title && book.author == author && book.ID == ID);

    if (!exists) {
        const newBook = { title, author, ID };
        libraryBooks.push({
            newBook
        })
        return newBook;
    } else {
        return null;
    }

}
console.log(addBook("The Road Ahead", "Bill Gatess", "1235"))


//getTitles
function getTitles() {
    const titles = libraryBooks.map(book => book.title)
    const uniqueTitles = [...new Set(titles)];
    //sorting in ascending order
    return uniqueTitles.sort();
}
console.log(getTitles());

//findBooks
const findBooks = function (title) {
    return libraryBooks
        .filter(book => book.title && book.title.toLowerCase().includes(title.toLowerCase()))
        .sort((a, b) => {
            const idA = String(a.ID);
            const idB = String(b.ID);
            return idA.localeCompare(idB)
        })
}

console.log(findBooks("The"))

