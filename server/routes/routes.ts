import { Request, Response } from "express";
import { ctrl } from '../controllers/controller';

export class Routes {
  public _contrl: ctrl = new ctrl();

  public constructor(app: any){

    app.route('/routename')
      // GET endpoint
      .get(this._contrl.getAll)
      .post(this._contrl.addNew)

    app.route('/routename/:id')
      // GET endpoint
      .get(this._contrl.getByID)
      // Update endpoint
      .put(this._contrl.updateRecord)
      .patch(this._contrl.updateRecord)
      // Delete endpoint
      .delete(this._contrl.deleteRecord)
  }
}

