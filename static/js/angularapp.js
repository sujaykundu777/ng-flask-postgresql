var app = angular.module('flaskApp', ['ui.router']);

app.controller('myCtrl', ['$scope', function($scope) {
    $scope.message = "Howdy !!";
}]);

app.config(['$interpolateProvider', function($interpolateProvider) {
  $interpolateProvider.startSymbol('{a');
  $interpolateProvider.endSymbol('a}');
 
}]);

app.config(function($stateProvider,$urlRouterProvider){
  $urlRouterProvider.otherwise('/home');
  
  $stateProvider
     .state('home',{
      url: '/home',
      template: '<h3>Hello world!</h3>'
    })
});