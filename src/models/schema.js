import mongoose from 'mongoose';
import config from '../config';

mongoose.Promise = global.Promise;
mongoose.connect(config.MONGODB_PATH);

const systemSchema = new mongoose.Schema({
  topic: String,
  payload: String,
  qos: Number,
  retain: Boolean
}, { collection: 'System' });


export const SystemCollection = mongoose.model('System', systemSchema);