let mongoose = require ("mongoose");

let userSchema =  new mongoose.Schema({
    name:{
        type:String,
        required : true // champ obligatoire
    },
    age:{
        type : Number,
        required : true // champ obligatoire
    },
    favoriteFoods:{
        type : [String],
        default:[],
        required : true ,// champ obligatoire
        }
    }
)


module.exports = mongoose.model ("User", userSchema)