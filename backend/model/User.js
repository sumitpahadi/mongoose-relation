const mongoose = require("mongoose");
const userschema =  new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
});

const user = mongoose.model("user", userschema);
module.exports = user;

// const mongoose = require("mongoose");
// const userschema =  new mongoose.Schema({
//   name: {
//     required: true,
//     type: String,
//   },
//   email: {
//     required: true,
//     type: String,
//   },
//   rightsid:{
//     type:mongoose.Schema.Types.ObjectId,
   
//     ref:"rights"
//   }
// });

// const user = mongoose.model("user", userschema);
// module.exports = user;
