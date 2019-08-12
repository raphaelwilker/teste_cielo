var api = require('../api');

module.exports  = function(app) {

    app.route('/contas')
        .get(api.getContas);
    // app.route('/negociacoes/retrasada')
    //     .post(api.listaRetrasada); 
};