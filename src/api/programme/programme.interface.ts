import * as mongoose from "mongoose";

export interface IProgramme extends mongoose.Document {
  _id: mongoose.Schema.Types.ObjectId;
  name: string;
}
