'use strict';

var juli = angular.module('juli', [
  'ngRoute',
  'ngResource',
  'ngSanitize',
  'researchOverview',
  'researchInterests',
  'currentResearches',
  'teaching',
  'publications',
  'contact',
  'recentStudentsProjects',
  'olderResearchProjects',
  'postPhdStudents',
]);

juli.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider){
  $locationProvider.html5Mode({
    enabled:true,
    requireBase: false
  })

  $routeProvider.
    when("/", {
      template: "<research-overview></research-overview>"
    }).
    when("/research-interests", {
      template: "<research-interests></research-interests>"
    }).
    when("/current-research-project", {
      template: "<current-researches></current-researches>"
    }).
    when("/teaching", {
      template: "<teaching></teaching>"
    }).
    when("/publications", {
      template: "<publications></publications>"
    }).
    when("/contact", {
      template: "<contact></contact>"
    }).
    when("/recent-students-projects", {
      template: "<recent-students-projects></recent-students-projects>"
    }).
    when("/older-research-projects", {
      template: "<older-research-projects></older-research-projects>"
    }).
    when("/post-phd-students", {
      template: "<post-phd-students></post-phd-students>"
    }).
    otherwise({
      redirectTo: "/"
    })
}]);

juli.controller('juliController',['$scope', function($scope){
  $scope.user = {
    name: "Dr Juliana Küster Filipe Bowles"
  }

  $scope.interests = {
    "Research Overview": "",
    "Research Interests": "research-interests",
    "Current Research Project": "current-research-project",
    "Teaching": "teaching",
    "Publications": "publications",
    "Contact": "contact"
  }

  $scope.otherInterests = {
    "Older Research Project":"older-research-projects",
    "Postdocs and PhD students":"post-phd-students",
    "Recent Student Projects":"recent-students-projects"
  }

}]);
