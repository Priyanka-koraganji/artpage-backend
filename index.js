const express = require('express');
const app = express();

let topBooks = [
    {
        title: 'Harry Potter and the Sorcerer\'s Stone',
        author: 'J.K. Rowling'
    },
    {
        title: 'Lord of the Rings',
        author: 'J.R.R. Tolkien'
    },
    {
        title: 'Twilight',
        author: 'Stephanie Meyer'
    }
];

app.get('/', (req, res) => {
    res.send('hello there!');
})
app.get('/books',(req,res) => {
    res.json(topBooks);
})
app.listen(8080, () => {
    console.log("welcome to 8080 port");
})