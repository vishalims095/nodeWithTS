import { Request, Response } from "express";
import { connect } from "../module/connection";
import Book from "../models/book";

export class PokeService {
  public welcomeMessage(req: Request, res: Response) {
    let data = {title : "test", author : "vishal"}
    Book.create(data).then(savedata => {
      if(!savedata) {
        console.log("Unable to save")
      } else {
        console.log("saved")
      }
    })
    return res.status(200).send("Welcome to test REST by vishal^^");
  }
  public welcomeMessageNew(req: Request, res: Response) {
    return res.status(200).send("Welcome to vishal ^^");
  }
}