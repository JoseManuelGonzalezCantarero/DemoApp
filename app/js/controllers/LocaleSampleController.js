'use strict';

eventsApp.controller('LocaleSampleController', LocaleSampleController);

function LocaleSampleController($scope, $locale)
{
    console.log($locale);
    $scope.myDate = Date.now();
    $scope.myFormat = $locale.DATETIME_FORMATS.fullDate;
}