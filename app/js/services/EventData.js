eventsApp.factory('eventData', function ($http) {
   return {
        getEvent: function ()
        {
            return $http.get('data/event/1');
        }
   };
});