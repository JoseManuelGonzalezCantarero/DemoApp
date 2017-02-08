'use strict';

eventsApp.controller('EventController', EventController);

function EventController($scope, eventData, $cookieStore, $routeParams, $route)
{
    $scope.sortorder = 'name';
    eventData.getEvent($routeParams.eventId)
        .$promise
        .then(function(event) {$scope.event = event;})
        .catch(function (response) { console.log(response);});

    $scope.reload = function () {
        $route.reload();
    };
    
    $scope.upVoteSession = function (session) {
        if($cookieStore.get('upVote' + session.id) === undefined)
        {
            $cookieStore.put('upVote' + session.id, session);
            session.upVoteCount++;
        }
    };

    $scope.downVoteSession = function (session) {
        if($cookieStore.get('downVote' + session.id) === undefined)
        {
            $cookieStore.put('downVote' + session.id, session);
            session.upVoteCount--;
        }

    };
}