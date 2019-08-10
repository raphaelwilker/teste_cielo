var api = require('../api');

module.exports  = function(app) {

    app.route('/conta')
        .get(api.getContas);
    // app.route('/negociacoes/retrasada')
    //     .post(api.listaRetrasada); 
};