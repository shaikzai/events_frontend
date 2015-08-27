(function() {
  var event = angular.module("yle_event", ["ngResource"]);

  event.value("API_ENDPOINT", "http://localhost:8081/api");
  event.service("EVENT_API", ["$resource", "API_ENDPOINT", function($resource, API_ENDPOINT) {
      return $resource(API_ENDPOINT + "/events/:id", {id: "@id"},
      {
        query: {method: "GET", cache: true, isArray: true}
      })
    }]);
  event.controller("homeCtrl", ["$scope", function($scope) {

    }]);

  event.controller("eventListCtrl", ["$scope", "EVENT_API", function($scope, EVENT_API) {
      $scope.event = new EVENT_API();
      var startDate;
      var year;
      var month;
      var events = {};
      EVENT_API.query(function(response) {
        //$scope.eventList = response;
        //console.log($scope.eventList );


       /* response.forEach(function(event, index) {
          if (typeof event !== 'undefined' && typeof event.starts !== 'undefined') {
            startDate = String(event.starts);
            year = parseInt(startDate.substring(0, 4));
            month = parseInt(startDate.substring(5, 7));
            if (!events[year]) {
              events[year] = {};
            }
            if(!events[year][month]){
              events[year][month] = [];
            }
            events[year][month].push(event);
            
            

          }
        });
        $scope.eventList = events;
        console.log(events);*/
        $scope.eventList = response;
      });
      /*$http.get("/event.json").then(function(response) {
       $scope.eventList = response.data;
       console.log($scope.eventList);
       });*/

    }]);

  event.controller("eventCtrl", ["$scope", function($scope) {

    }]);

  event.controller("eventSubmitCtrl", ["$scope", function($scope) {

    }]);

  event.controller("rulesCtrl", ["$scope", function($scope) {

    }]);

  event.directive('eventImg', function() {
    return function(scope, element, attrs) {
      var url = attrs.eventImg;
      element.css({
        'background-image': 'url(' + url + ')',
        'background-size': 'cover',
        'background-repeat': 'no-repeat'
      });
    };
  });
})();