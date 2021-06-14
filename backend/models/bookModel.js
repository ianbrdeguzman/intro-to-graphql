import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
    name: { type: String, required: true },
    genre: { type: String, required: true },
    authorId: { type: Number, required: true },
});

const Book = mongoose.model('Book', bookSchema);

export default Book;
