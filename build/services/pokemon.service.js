"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokeService = void 0;
var reportModel_1 = require("../models/reportModel");
var PokeService = /** @class */ (function () {
    function PokeService() {
    }
    // Report
    PokeService.prototype.getReport = function (req, res) {
        var reqType = req.query.reqType;
        console.log("getReport calling");
        reportModel_1.default.aggregate([
            { $match: {
                    type: Number(reqType)
                } },
            {
                $lookup: {
                    from: 'user',
                    localField: 'customer_id',
                    foreignField: '_id',
                    as: 'Customer'
                },
            },
            {
                $lookup: {
                    from: 'agent',
                    localField: 'agent_id',
                    foreignField: '_id',
                    as: 'Agent'
                }
            },
            { $unwind: "$Customer" },
            { $unwind: "$Agent" },
            {
                $project: {
                    _id: 1,
                    "customer_name": "$Customer.name",
                    "agent_name": "$Agent.name",
                    "start_date": 1,
                    "end_date": 1,
                    "type": 1,
                    "call_logs": 1
                }
            }
        ]).then(function (reportData) {
            if (!reportData) {
                console.log("Unable to save");
            }
            else {
                return res.status(200).send({
                    message: "Report Data",
                    response: reportData
                });
            }
        });
    };
    // Feedback 
    PokeService.prototype.getFeedBack = function (req, res) {
        reportModel_1.default.aggregate([
            {
                $lookup: {
                    from: 'user',
                    localField: 'customer_id',
                    foreignField: '_id',
                    as: 'Customer'
                },
            },
            {
                $lookup: {
                    from: 'feedback',
                    localField: 'customer_id',
                    foreignField: 'customer_id',
                    as: 'customer_feedback'
                }
            },
            { $unwind: "$Customer" },
            { $unwind: "$customer_feedback" },
            {
                $project: {
                    _id: 1,
                    "customer_name": "$Customer.name",
                    "user_comment": "$customer_feedback.user_comment",
                    "rating": "$customer_feedback.rate",
                    "start_date": 1
                }
            }
        ]).then(function (feedBAckData) {
            if (!feedBAckData) {
                console.log("Unable to save");
            }
            else {
                return res.status(200).send({
                    message: "Feedback Data",
                    response: feedBAckData
                });
            }
        });
    };
    return PokeService;
}());
exports.PokeService = PokeService;
//# sourceMappingURL=pokemon.service.js.map