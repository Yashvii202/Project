const mongoose = require('mongoose');
const express = require('express')
const bookSchema = require('./bookschema')
const bodyParser = require("body-parser")
const Book = require('./bookschema')
const cors = require('cors');  // Import the CORS package

mongoose.connect("mongodb+srv://YashviKotadiya:Yashvi2@cluster0.mvzkc.mongodb.net/").then(() => {
    const app = express();
    app.listen(3001, () => {
        console.log("Server Started");
    })
    console.log("Connected to MongoDB")

    app.use(bodyParser.json())

    app.use(cors());

    //GetAll
    app.get('/books', async (req, res) => {
        const ans = await Book.find();
        res.send(ans);
    });

    //GetByID
    app.get('/books/:id', async (req, res) => {
        const ans = await Book.findOne({ id: req.params.id });
        res.send(ans);
    });

    //Create
    app.post('/books', async (req, res) => {
        stu = new Book({ ...req.body });
        const ans = await stu.save();
        res.send(ans);
        
    });

    //Delete
    app.delete('/books/:id', async (req, res) => {
        const ans = await Book.deleteOne({ id: req.params.id });
        res.send(ans);
    });

    // Update Book by ID
    app.put('/books/:id', async (req, res) => {
        try {
            const book = await Book.findOne({ id: req.params.id });
            Object.assign(book, req.body);
            const updatedBook = await book.save();
            res.send(updatedBook);
        } catch (err) {
            res.status(500).send({ error: err.message });
        }
    });
    
})