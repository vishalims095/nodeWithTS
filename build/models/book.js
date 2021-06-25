"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookSchema = void 0;
var mongoose = require("mongoose");
var uri = "mongodb://127.0.0.1:27017/assignment";
mongoose.connect(uri, function (err) {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log("Successfully Connected!");
    }
});
exports.BookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    name: { type: String, required: true }
});
var Book = mongoose.model("Book", exports.BookSchema);
exports.default = Book;
//# sourceMappingURL=book.js.map