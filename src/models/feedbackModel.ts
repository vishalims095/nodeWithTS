import mongoose = require("mongoose");
const uri: string = "mongodb://127.0.0.1:27017/assignment";
export interface IFeedback extends mongoose.Document {
    customer_id: mongoose.Schema.Types.ObjectId,
    rate : Number,
    user_comment : String,
    created_at : String,
}

export const feedbackSchema = new mongoose.Schema({
    customer_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user",
        require : true
    },
    rate : {
        type : Number,
        default : 0
    },
    user_comment : {
        type : String
    },
    created_at : {
        type : String,
        default : "28-sep-2020"
    }
});

const feedback = mongoose.model<IFeedback>("feedback", feedbackSchema);
export default feedback;