'use strict';

eventsApp.controller('EventListController', EventListController);

function EventListController($scope, $location, eventData) {
    $scope.events = eventData.getAllEvents();
};
