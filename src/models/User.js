const { Schema, model} = require('mongoose');
// const bcrypt = require('bcryptjs');

const UseSchema = new Schema({
    nome:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    msg:{
        type:String,
        required:false,
    },
},{
    timestamps: true,
});

// UseSchema.pre('save', async function(next){
//     const hash = await bcrypt.hash(this.password, 10);
//     this.password = hash;
//     next();
// })

module.exports = model('User', UseSchema);