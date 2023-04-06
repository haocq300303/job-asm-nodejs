module.exports = {
   multipleMongooseToObject: (datas) => {
      return datas.map(data => data.toObject());
   },
   MongooseToObject: (data) => {
      return data ? data.toObject() : data;
   }
}