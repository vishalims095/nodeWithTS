import mongoose = require("mongoose");
const uri: string = "mongodb://127.0.0.1:27017/assignment";

mongoose.connect(uri, (err: any) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("Successfully Connected!");
  }
});
export interface IReport extends mongoose.Document {
    agent_id:  mongoose.Schema.Types.ObjectId,
    customer_id: mongoose.Schema.Types.ObjectId,
    start_date : String,
    end_date : String,
    call_logs : String,
    type : String,
    created_at : String
}

export const reportSchema = new mongoose.Schema({
    agent_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "agent",
        require : true
    },
    customer_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user",
        require : true
    },
    start_date : {
        type : String,
        default : "24-sep-2020"
    },
    end_date : {
        type : String,
        default : "28-sep-2020"
    },
    call_logs : {
        type : String,
        default : "0"
    },
    type : {
        type : Number,
        default : 0
    },
    created_at : {
        type : String,
        default : "28-sep-2020"
    }
});

const report = mongoose.model<IReport>("report", reportSchema);
export default report;