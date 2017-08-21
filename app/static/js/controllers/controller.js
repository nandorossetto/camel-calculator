var Controller = angular.module('Controller', []);

Controller.controller('Controller', ['$scope', '$http',
    function ($scope, $http) {
        $scope.age = {
            min: 1,
            max: 150
        };

        $scope.height = {
            min: 1,
            max: 300
        };

        $scope.camels = '';

        $scope.camelCounter = function(){
            var getAge = Number($scope.age.max) || 0;
            var getHeight = Number($scope.height.max) || 0;
            var getHaircolor = Number($scope.haircolor) || 0;
            var getEyecolor = Number($scope.eyecolor) || 0;

            var camels = getAge + getHeight + getHaircolor + getEyecolor;

            $scope.camels = 'you worth ' + camels + ' camels!';
        }

    }]
);
