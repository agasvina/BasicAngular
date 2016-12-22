'use strict';

angular.module('researchOverview', [])
  .component('researchOverview', {
    templateUrl: '/templates/research-overview.html',
});

angular.module('researchInterests', [])
  .component('researchInterests', {
    templateUrl:'/templates/research-interests.html',
    controller: ['$scope', '$http', function($scope, $http) {
        $http.get('/data/research-interests.JSON')
          .then(function(res){
            $scope.interests = res.data.interests;                
        });
    }]
});

angular.module('currentResearches', [])
  .component('currentResearches', {
    templateUrl:'/templates/current-researches.html',
    controller: ['$scope', '$http', function($scope, $http) {
        $http.get('/data/current-researches.JSON')
          .then(function(res){
            $scope.researchs = res.data.currentResearches;                
        });
    }]
});

angular.module('teaching', [])
  .component('teaching', {
    templateUrl:'/templates/teaching.html',
    controller: ['$scope', '$http', function($scope, $http) {
        $http.get('/data/teaching.JSON')
          .then(function(res){
            $scope.teachings = res.data.teachings;                
        });
    }]
});

angular.module('publications', [])
  .component('publications', {
    templateUrl:'/templates/publications.html',
    controller: ['$scope', '$http', function($scope, $http) {
        $http.get('/data/publications.JSON')
          .then(function(res){
            $scope.publications = res.data.publications;                
        });
    }]
});

angular.module('contact', [])
  .component('contact', {
    templateUrl:'/templates/contact.html',
});

angular.module('recentStudentsProjects', [])
  .component('recentStudentsProjects', {
    templateUrl:'/templates/recent-students-projects.html',
    controller: ['$scope', '$http', function($scope, $http) {
        $http.get('/data/recent-students-projects.JSON')
          .then(function(res){
            $scope.projects = res.data.projects;                
        });
    }]
});

angular.module('olderResearchProjects', [])
  .component('olderResearchProjects', {
    templateUrl:'/templates/older-research-projects.html',
    controller: ['$scope', '$http', function($scope, $http) {
        $http.get('/data/older-research-projects.JSON')
          .then(function(res){
            $scope.projects = res.data.projects;                
        });
    }]
});


angular.module('postPhdStudents', [])
  .component('postPhdStudents', {
    templateUrl:'/templates/students.html',
    controller: ['$scope', '$http', function($scope, $http) {
        $http.get('/data/students.JSON')
          .then(function(res){
            $scope.students = res.data.students;                
        });
    }]
});