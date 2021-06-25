
import * as express from 'express';

//importing our controller
import { Controller } from './main.controller';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';

class App {
  public app : any = express();

  //declaring our controller
  public pokeController: Controller;

  constructor() {
    this.app = express();
    this.setConfig();

    //Creating and assigning a new instance of our controller
    this.pokeController = new Controller(this.app);
  }

  private setConfig() {
    this.app.use(bodyParser.json({ limit: '50mb' }));
    this.app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
    this.app.use(cors());
  }
}

export default new App().app;