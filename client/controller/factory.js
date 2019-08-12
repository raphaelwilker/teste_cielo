var messageSuccess = 'Dados gravados com sucesso!';
var messageError = 'Um erro ocorreu no servidor!';
/**
 * @ngdoc overview
 * @name  dataSeverProvider
 *
 * @description Angular module responsible to conunication between front end and back end
 *
 *
 */
angular.module('dataSeverProvider', [])
/**
 * @ngdoc controller
 * @name  dataSeverProvider.controller:serverDataProvider
 *
 * @description Controller of module angular dataSeverProvider
 *
 *
 */
/*.controller('serverDataProvider', ['$scope', '$sce', function ($scope, $sce) {
	console.log('LOL')
}]);*/
/**
 * @ngdoc service
 * @name  dataSeverProvider.factory:serverDataProvider
 * @requires  dataProvider
 * @requires  $http
 * @description Factory to control calls between front end and back end
 *
 *
 */
.factory('serverDataProvider', ['$http',  function($http) {
 	

 	var listContas = function(callback){
 	
 		console.log('serverDataProvider');
 		var url = 'http://localhost:3000/contas';
 		$http({
 			method:'GET',
 			url:url
 		})
 		.then(function(response){
 			console.log(response.status);
 			callback(response.data);
 		})
 		.catch(function(response){
 			console.log(response.status);
 			callback(response);	
 		});
 		
 	}


 	return{
 		listContas:listContas,
 	}

 }]);