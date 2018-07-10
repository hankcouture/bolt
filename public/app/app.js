var app = angular.module('mvp', [
  'mvp.helpers',
  'mvp.neighborhoods',
  'ui.router'
])

app.config(function($stateProvider, $urlRouterProvider) {

  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/home");

  // Routing States
  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "app/views/home.html",
      controller: "NeighborhoodController"
    })
    .state('faqs', {
      url: "/faqs",
      templateUrl: "app/views/faqs.html",
      controller: "NeighborhoodController"
    })
    .state('why-bolt', {
      url: "/why-bolt",
      templateUrl: "app/views/why-bolt.html",
      controller: "NeighborhoodController"
    })
    .state('our-story', {
      url: "/our-story",
      templateUrl: "app/views/our-story.html",
      controller: "NeighborhoodController"
    })
    .state('terms-conditions', {
      url: "/terms-conditions",
      templateUrl: "app/views/terms-conditions.html",
      controller: "NeighborhoodController"
    })
});