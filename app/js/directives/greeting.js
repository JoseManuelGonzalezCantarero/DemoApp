'use strict';

eventsApp.directive('greeting', greeting);

function greeting()
{
    return {
        restrict: 'E',
        replace: true,
        template: "<button class='btn' ng-click='sayHello()'>Say Hello</button>",
        controller: '@',
        name: 'ctrl'
    };
}

eventsApp.controller('GreetingController', GreetingController);

function GreetingController($scope) {
    $scope.sayHello = function () {
        alert('Hello');
    }
}