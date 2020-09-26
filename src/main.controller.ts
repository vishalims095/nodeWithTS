import { Application } from 'express';
import { PokeService } from './services/pokemon.service';

export class Controller {
  private pokeService: PokeService;

  constructor(private app: Application) {
    this.pokeService = new PokeService();
    this.routes();
  }

  public routes() {
    this.app.route('/getReport').get(this.pokeService.getReport);
    this.app.route('/getFeedBack').get(this.pokeService.getFeedBack);
  }
}