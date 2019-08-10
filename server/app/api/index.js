var api = {}

var fs = require('fs');
var loadJsonLegado = fs.readFileSync('app/api/lancamento-conta-legado.json');
var conta = JSON.parse(loadJsonLegado);


api.getContas = function(req, res) {

//    console.log(req.body);
//    req.body.data = new Date(req.body.data.replace(/-/g,'/'));
//    negociacoes.push(req.body);
   res.json(conta);
};



module.exports = api;