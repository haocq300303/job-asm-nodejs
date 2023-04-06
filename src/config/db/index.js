const mongoose = require('mongoose');
require('dotenv').config();

const connect = async () => {
   try {
      await mongoose.connect(process.env.MONGODB_URL, {
         useNewUrlParser: true,
         useUnifiedTopology: true
      });
      console.log('connecting successful');
   } catch (error) {
      console.log(error);
   }
}

module.exports = { connect };