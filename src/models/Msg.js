const { Schema, model} = require('mongoose');
// const bcrypt = require('bcryptjs');

const MsgSchema = new Schema({
    nome:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    msg:{
        type:[String],
        required:true,
    },
},{
    timestamps: true,
});

module.exports = model('Msg', MsgSchema);