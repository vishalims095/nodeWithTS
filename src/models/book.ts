import mongoose = require("mongoose");

const uri: string = "mongodb://127.0.0.1:27017/assignment";

mongoose.connect(uri, (err: any) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("Successfully Connected!");
  }
});

export interface IBook extends mongoose.Document {
  title: string;
  author: number;
  name : string;
}

export const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  name: { type: String, required: true }

});

const Book = mongoose.model<IBook>("Book", BookSchema);
export default Book;