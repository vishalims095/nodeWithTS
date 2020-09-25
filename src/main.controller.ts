import { Application } from 'express';
import { PokeService } from './services/pokemon.service';

export class Controller {
  private pokeService: PokeService;

  constructor(private app: Application) {
    this.pokeService = new PokeService();
    this.routes();
  }

  public routes() {
    this.app.route('/test').get(this.pokeService.welcomeMessage);
    this.app.route('/testNew').get(this.pokeService.welcomeMessageNew);
  }
}