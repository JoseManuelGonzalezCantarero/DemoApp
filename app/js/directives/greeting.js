'use strict';

eventsApp.directive('greeting', greeting);
eventsApp.directive('finnish', finnish);
eventsApp.directive('hindi', hindi);

function greeting()
{
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        template: "<div><button class='btn' ng-click='sayHello()'>Say Hello</button><div ng-transclude></div></div>",
        controller: function ($scope) {
            var greetings = ['hello'];
            $scope.sayHello = function () {
                alert(greetings.join());
            };
            this.addGreeting = function (greeting) {
                greetings.push(greeting);
            }
        }
    };
}

function finnish()
{
    return{
        restrict: 'A',
        require: '^greeting',
        link: function (scope, element, attrs, controller) {
            controller.addGreeting('hei');
        }
    }
}

function hindi()
{
    return{
        restrict: 'A',
        require: '^greeting',
        link: function (scope, element, attrs, controller) {
            controller.addGreeting('namasté');
        }
    }
}