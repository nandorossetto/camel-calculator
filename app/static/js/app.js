var katrina = angular.module('katrina', [
    'ngRoute',
    'ui-rangeSlider',
    'Controller'
]);

//routes
katrina.config(['$routeProvider', function($routeProvider) {
    $routeProvider

    .when('/', {
        templateUrl : 'views/home.html',
        controller  : 'Controller'
    })
    .otherwise({
        redirectTo: '/404',
        templateUrl : 'views/404.html'
    });
}]);
