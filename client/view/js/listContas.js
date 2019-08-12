
app.directive('listContas', ['serverDataProvider','$compile', '$rootScope',
    function(serverDataProvider,$compile, $rootScope){
        return {
            restrict: 'EA',
            templateUrl: './view/html/listContas.html',
            controller:'appContasController',
            link: function(scope, element, attr){
                let list = {}
                serverDataProvider.listContas(function(data){
                    list = data != "" ? data : "";
                    for(let i in list.listaControleLancamento){
                        const li = '<li>'+list.listaControleLancamento[i].codigoIdentificadorUnico+'</li>';
                        document.querySelector('#list').innerHTML += li;
                    }
                });

                
            }
        }
        
    }
]); 