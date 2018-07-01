'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SystemCollection = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.Promise = global.Promise;
_mongoose2.default.connect(_config2.default.MONGODB_PATH);

var systemSchema = new _mongoose2.default.Schema({
  topic: String,
  payload: String,
  qos: Number,
  retain: Boolean
}, { collection: 'System' });

var SystemCollection = exports.SystemCollection = _mongoose2.default.model('System', systemSchema);