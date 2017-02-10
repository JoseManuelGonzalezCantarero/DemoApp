'use strict';

eventsApp.directive('greeting', greeting);
eventsApp.directive('finnish', finnish);
eventsApp.directive('hindi', hindi);

function greeting()
{
    return {
        restrict: 'E',
        replace: true,
        priority: -1,
        template: "<button class='btn' ng-click='sayHello()'>Say Hello</button>",
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
        priority: -1,
        terminal:true,
        require: 'greeting',
        link: function (scope, element, attrs, controller) {
            controller.addGreeting('hei');
        }
    }
}

function hindi()
{
    return{
        restrict: 'A',
        priority: -2,
        require: 'greeting',
        link: function (scope, element, attrs, controller) {
            controller.addGreeting('namasté');
        }
    }
}