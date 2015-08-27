(function() {
  var app = angular.module("eventApp", ["ui.router", "yle_event"]);
  app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
      
      $stateProvider
              .state("home", {
                "url": "/",
                "templateUrl": "view/home.html",
                "controller": "homeCtrl"
              })
              .state("event", {
                "url": "/event",
                "templateUrl": "view/event_list.html",
                "controller": "eventListCtrl"
              })
              .state("event_submit", {
                "url": "/event/submit",
                "templateUrl": "view/event_form.html",
                "controller": "eventSubmitCtrl"
              })
              .state("event.item", {
                "url": "event/:id",
                "templateUrl": "event.html",
                "controller": "eventCtrl"
              })
              .state("rules", {
                "url": "/rules",
                "templateUrl": "view/rules.html",
                "controller": "rulesCtrl"
              });

      $urlRouterProvider.otherwise("/");
    }]);

})();