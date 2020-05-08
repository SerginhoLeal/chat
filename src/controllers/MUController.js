const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Grap2 = mongoose.model('Msg');

module.exports = {
    async index(req, res){
        const products = await Grap2.find();
        return res.json(products);
    },

    async login(req, res){
        const {nome, password} = req.body;

        const user = await Grap2.findOne({nome}).select('+password');
        
        if(!user)
            return res.status(400).send({error:'Nome inexistente'});
        
        if(!password)
            return res.status(400).send({error:'Senha invalida'});
    

        res.send({
            user,
        });
    },

    async store(req, res){
        const user = await Grap2.create(req.body);

        res.send({
            user,
        });

    },
};