const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  firstName:  {type : String, required:true},
  lastName : String,
  email : {
    type:  String, 
    unique : true, 
    validate: {
        validator: function(v) {
            const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
            return regex.test(v)
        },
        message : (props) => `${props.value} is not valid email`
    },
    required: true,
  },
  password : {type : String, minLength : 6, required: true},
  token: String
});

exports.User = mongoose.model("User", productSchema);
