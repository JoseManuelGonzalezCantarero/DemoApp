'use strict';

eventsApp.controller('TimeoutSampleController', TimeoutSampleController);

function TimeoutSampleController($scope, $timeout)
{
    var promise = $timeout(function ()
    {
        $scope.name = "John Doe";
    }, 3000);

    $scope.cancel = function ()
    {
        $timeout.cancel(promise);
    };

}