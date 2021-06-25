"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reportSchema = void 0;
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
exports.reportSchema = new mongoose.Schema({
    agent_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "agent",
        require: true
    },
    customer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        require: true
    },
    start_date: {
        type: String,
        default: "24-sep-2020"
    },
    end_date: {
        type: String,
        default: "28-sep-2020"
    },
    call_logs: {
        type: String,
        default: "0"
    },
    type: {
        type: Number,
        default: 0
    },
    created_at: {
        type: String,
        default: "28-sep-2020"
    }
});
var report = mongoose.model("report", exports.reportSchema);
exports.default = report;
//# sourceMappingURL=reportModel.js.map