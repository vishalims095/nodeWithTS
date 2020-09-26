import { Request, Response } from "express";
import { connect } from "../module/connection";
import Book from "../models/book";
import report from '../models/reportModel';
import feedback from '../models/feedbackModel';
export class PokeService {
  // Report
  public getReport(req: Request, res: Response) {
    let {reqType} = req.query
    report.aggregate(
      [
        {$match : {
          type : Number(reqType)
        }},
        {
        $lookup : {
            from : 'user',
            localField : 'customer_id',
            foreignField : '_id',
            as : 'Customer'
        }, 
    }, 
    {
         $lookup : {
            from : 'agent',
            localField : 'agent_id',
            foreignField : '_id',
            as : 'Agent'
        }
    },
    { $unwind: "$Customer"},
    { $unwind: "$Agent"},
    {
        $project : {
            _id : 1,
            "customer_name" : "$Customer.name",
            "agent_name" : "$Agent.name",
            "start_date" : 1,
            "end_date" : 1,
            "type" : 1,
            "call_logs" : 1
        }
    }]).then(reportData => {
      if(!reportData) {
        console.log("Unable to save")
      } else {
        return res.status(200).send({
          message : "Report Data",
          response : reportData
        });
      }
    })
  }

  // Feedback 
  public getFeedBack(req: Request, res: Response) {
    report.aggregate([
        {
        $lookup : {
            from : 'user',
            localField : 'customer_id',
            foreignField : '_id',
            as : 'Customer'
        }, 
    }, 
    {
         $lookup : {
            from : 'feedback',
            localField : 'customer_id',
            foreignField : 'customer_id',
            as : 'customer_feedback'
        }
    },
    { $unwind: "$Customer"},
    { $unwind: "$customer_feedback"},
    {
        $project : {
            _id : 1,
            "customer_name" : "$Customer.name",
            "user_comment" : "$customer_feedback.user_comment",
            "rating" : "$customer_feedback.rate",
            "start_date" : 1
        }
    }]).then(feedBAckData => {
      if(!feedBAckData) {
        console.log("Unable to save")
      } else {
        return res.status(200).send({
          message : "Feedback Data",
          response : feedBAckData
        });
      }
    })
  }
}