const crypto = require('crypto'); 
const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
        
        return response.json(ongs);
    },

    async create(request, response){
        const {name, email, whatsapp, city, uf} = request.body;

        const id = crypto.randomBytes(4).toString('HEX'); //atraves de um metodo consegue gerar uma string random que vai servir de id pra ong
        
        // quando o node chegar nesse codigo ele vai aguardar para poder send resposta
        await connection('ongs').insert({ 
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })

        return response.json({ id });
    }
}