'use strict';

eventsApp.controller('EventController', EventController);

function EventController($scope, $cookieStore, $route)
{
    $scope.sortorder = 'name';
    $scope.event = $route.current.locals.event;
    
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