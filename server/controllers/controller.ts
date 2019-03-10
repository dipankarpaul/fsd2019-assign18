import * as mongoose from 'mongoose';
import { Request, Response } from 'express';
import { schemaName } from '../models/models';

const mongsModl = mongoose.model('mongsModl', schemaName);

export class ctrl {

  public addNew(req: Request, res: Response) {
    const new_name = new mongsModl(req.body);

    new_name.save((err, data) => {
      if (err) {
        res.send(err);
      }
      res.json(data);
    });
  }

  public getAll(req: Request, res: Response) {
    mongsModl.find({}, (err, data) => {
      if (err) {
        res.send(err);
      }
      res.json(data);
    });
  }

  public getByID(req: Request, res: Response) {
    mongsModl.findById(req.params.id, (err, data) => {
      if (err) {
        res.send(err);
      }
      res.json(data);
    });
  }

  public updateRecord(req: Request, res: Response) {
    mongsModl.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, data) => {
      if (err) {
        res.send(err);
      }
      res.json(data);
    });
  }

  public deleteRecord(req: Request, res: Response) {
    mongsModl.findByIdAndRemove(req.params.id, (err, data) => {
      if (err) {
        res.send(err);
      }
      res.json(data);
    });
  }
}
