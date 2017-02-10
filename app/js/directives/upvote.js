'use strict';

eventsApp.directive('upvote', eventThumbnail);

function eventThumbnail() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: '/templates/directives/upvote.html',
        scope: {
            upvote: "&",
            dowvote: "&",
            count:"="
        }
    }
}
