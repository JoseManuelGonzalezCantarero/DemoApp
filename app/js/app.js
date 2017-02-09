'use strict';

var eventsApp = angular.module('eventsApp', ['ngResource', 'ngCookies', 'ngRoute'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider.when('/newEvent',
            {
                templateUrl: 'templates/NewEvent.html',
                controller: 'EditEventController'
            }
        );
        $routeProvider.when('/events',
            {
                templateUrl: 'templates/EventList.html',
                controller: 'EventListController',
                resolve: {
                    events: function ($route, eventData) {
                        return eventData.getAllEvents();
                    }
                }
            }
        );
        $routeProvider.when('/event/:eventId',
            {
                templateUrl: 'templates/EventDetails.html',
                controller: 'EventController',
                resolve: {
                    event: function ($route, eventData) {
                        return eventData.getEvent($route.current.pathParams.eventId).$promise;
                    }
                }
            }
        );
        $routeProvider.when('/editProfile',
            {
                templateUrl: 'templates/EditProfile.html',
                controller: 'EditProfileController'
            }
        );
        $routeProvider.when('/about',
            {
                template: '<h1>This is the about page</h1>'
            }
        );
        $routeProvider.otherwise({redirectTo: '/events'});

        $locationProvider.html5Mode(true);
    });
