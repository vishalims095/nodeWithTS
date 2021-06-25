"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.feedbackSchema = void 0;
var mongoose = require("mongoose");
var uri = "mongodb://127.0.0.1:27017/assignment";
exports.feedbackSchema = new mongoose.Schema({
    customer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        require: true
    },
    rate: {
        type: Number,
        default: 0
    },
    user_comment: {
        type: String
    },
    created_at: {
        type: String,
        default: "28-sep-2020"
    }
});
var feedback = mongoose.model("feedback", exports.feedbackSchema);
exports.default = feedback;
//# sourceMappingURL=feedbackModel.js.map