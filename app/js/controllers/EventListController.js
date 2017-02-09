'use strict';

eventsApp.controller('EventListController', EventListController);

function EventListController($scope, $route) {
    $scope.events = $route.current.locals.events;
}
