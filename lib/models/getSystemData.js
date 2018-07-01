'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _schema = require('./schema');

var getSystemData = function getSystemData(id) {

  return new Promise(function (resolve, reject) {
    if (id == 'all') {
      _schema.SystemCollection.find().sort({ field: 'asc', _id: -1 }).exec(function (err, data) {
        if (err) {
          reject('getSystemData() err ' + err);
        } else if (data === null) {
          resolve([]);
        } else {
          console.log(data);
          resolve(data || []);
        }
      });
    } else if (id == -1) {
      _schema.SystemCollection.findOne().sort({ field: 'asc', _id: -1 }).exec(function (err, data) {
        if (err) {
          reject('getSystemData() err ' + err);
        } else if (data === null) {
          resolve([]);
        } else {
          console.log(data);
          resolve(data || []);
        }
      });
    } else {
      _schema.SystemCollection.findOne().skip(id || 0).limit(1).sort({ field: 'asc', _id: -1 }).exec(function (err, data) {
        if (err) {
          reject('getSystemData() err ' + err);
        } else if (data === null) {
          resolve([]);
        } else {
          console.log(data);
          resolve(data || []);
        }
      });
    }
  });
};

exports.default = getSystemData;