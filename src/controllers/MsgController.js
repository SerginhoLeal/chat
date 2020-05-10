const mongoose = require('mongoose');

const Grap = mongoose.model('User');
const Grap2 = mongoose.model('Msg');

module.exports = {
    async index(req, res){
        const products = await Grap2.find();
        return res.json(products);
    },
    async store(req, res){
        const { user } = req.headers;//pega a mensagem do usuario.
        const { idDel } = req.params;//pegando a sala escolhida.

        const UsuarioLogado = await Grap.findById(user);//não preciso mexer em nada aqui.
        const UsuarioReceptor = await Grap2.findById(idDel);//não preciso mexer em nada aqui.

        try{

            UsuarioReceptor.msg.push(UsuarioLogado.nome,UsuarioLogado.msg);//Adicionando o nome do usuario logado no usuário receptor.

            await UsuarioReceptor.save();//salva dentro do array.

        }catch{
            return res.status(400).send({error:'fail'});
        }

        return res.json(UsuarioReceptor);//retorna para o usuário logado.
    }
};