import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const schemaName = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  phone: {
    type: String
  }
});

