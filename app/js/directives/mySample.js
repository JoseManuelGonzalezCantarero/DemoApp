'use strict';

eventsApp.directive('mySample', mySample);

function mySample() {
    return {
        restrict: 'C',
        template: "<input type='text' ng-model='sampleData' />{{sampleData}}<br>",
        scope:{}
    };
}
