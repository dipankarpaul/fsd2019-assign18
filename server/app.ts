import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';
import * as cors from 'cors';

import { env } from './config/environment/environment';
import { Routes } from './routes/routes';


class App {

  public app: express.Application = express();
  public route: Routes;
  public mongoUrl: string = env.mongoUri;

  constructor() {
    console.log("1111111111111111111111111");
    this.config();
    this.mongoSetup();
    this.route = new Routes(this.app);
  }

  private config(): void {
    console.log("2222222222222222222222");
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(cors());
  }

  private mongoSetup(): void {
    console.log("3333333333333333333333333");
    mongoose.connect(this.mongoUrl, { useNewUrlParser: true });
  }
}

export default new App().app;
