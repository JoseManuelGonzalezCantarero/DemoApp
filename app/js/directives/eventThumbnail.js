'use strict';

eventsApp.directive('eventThumbnail', eventThumbnail);

function eventThumbnail() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: '/templates/directives/eventThumbnail.html'
    }
}
