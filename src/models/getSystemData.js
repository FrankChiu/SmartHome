import { SystemCollection } from './schema';

const getSystemData = (id) => {

  return new Promise((resolve, reject) => {
    if (id == 'all'){
      SystemCollection.find().sort({ field: 'asc', _id: -1}).exec((err, data) => {
        if (err) {
          reject('getSystemData() err ' + err);
        } else if (data === null) {
          resolve([]);
        } else {
          console.log(data);
          resolve(data || []);        
        }
      });  
    }else if (id == -1){
      SystemCollection.findOne().sort({ field: 'asc', _id: -1}).exec((err, data) => {
        if (err) {
          reject('getSystemData() err ' + err);
        } else if (data === null) {
          resolve([]);
        } else {
          console.log(data);
          resolve(data || []);        
        }
      });       
    }else if (id == 'getfinal2718'){
      SystemCollection.findOne({payload: /2718/}).limit(1).sort({ field: 'asc', _id: -1}).exec((err, data) => {
        if (err) {
          reject('getSystemData() err ' + err);
        } else if (data === null) {
          resolve([]);
        } else {
          console.log(data);
          resolve(data || []);        
        }
      });       
    }else{
      SystemCollection.findOne().skip(id || 0).limit(1).sort({ field: 'asc', _id: -1}).exec((err, data) => {
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

export default getSystemData;
