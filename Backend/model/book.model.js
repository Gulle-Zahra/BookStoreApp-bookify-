import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
   name: String,
   category: String,
   price: Number,
   title: String,
   image: String,
});

const Book = mongoose.model("Book", bookSchema);

export default Book;