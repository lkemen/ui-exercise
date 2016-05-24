'use strict';

/**
 * @ngdoc overview
 * @name nuxeoApp
 * @description
 * # nuxeoApp
 *
 * Main module of the application.
 */
angular
  .module('nuxeoApp', [
    'ngAnimate',
    'ngCookies',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'nuxeo'
  ])
  .service('nuxeoClient', function(nuxeoClientFactory) {
    var client = nuxeoClientFactory();
    // fetch all schemas
    client.schema('*');
    // fetch version label
    client.header('X-NXfetch.document', 'versionLabel');
    return client;
  })
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home/dashboard");

    $stateProvider
      .state('home', {
        abstract: true,
        url: "/home",
        templateUrl: "views/home/home.html",
        controller: 'HomeCtrl'
      })
      .state('home.dashboard', {
        url: "/dashboard",
        templateUrl: "views/home/dashboard.html",
        controller: 'DashboardCtrl'
      })
      .state('home.tasks', {
        url: "/tasks",
        templateUrl: "views/home/tasks.html",
        controller: 'TasksCtrl'
      })
      .state('home.notifications', {
        url: "/notifications",
        templateUrl: "views/home/notifications.html",
        controller: 'NotificationsCtrl'
      })
      .state('home.activity', {
        url: "/activity",
        templateUrl: "views/home/activity.html",
        controller: 'ActivityCtrl'
      })
      .state('home.personalworkspace', {
        url: "/personalworkspace",
        templateUrl: "views/home/personalworkspace.html",
        controller: 'PersonalworkspaceCtrl'
      })
      .state('home.collections', {
        url: "/collections",
        templateUrl: "views/home/collections.html",
        controller: 'CollectionsCtrl'
      })
      .state('home.favorites', {
        url: "/favorites",
        templateUrl: "views/home/favorites.html",
        controller: 'FavoritesCtrl'
      })
      .state('home.searches', {
        url: "/searches",
        templateUrl: "views/home/searches.html",
        controller: 'SearchesCtrl'
      })

      .state('browse', {
        url: "/browse{path:.*}",
        templateUrl: "views/browse.html",
        controller: 'BrowseCtrl'
      })

      .state('search', {
        url: "/search",
        templateUrl: "views/search.html",
        controller: 'SearchCtrl'
      })

      .state('file', {
        url: "/file",
        templateUrl: "views/file.html",
        controller: 'FileCtrl'
      })
      .state('image', {
        url: "/image",
        templateUrl: "views/image.html",
        controller: 'ImageCtrl'
      })
      .state('note', {
        url: "/note",
        templateUrl: "views/note.html",
        controller: 'NoteCtrl'
      })
      .state('case', {
        url: "/case",
        templateUrl: "views/case.html",
        controller: 'CaseCtrl'
      })
      .state('invoice', {
        url: "/invoice",
        templateUrl: "views/invoice.html",
        controller: 'InvoiceCtrl'
      })
      .state('create', {
        url: "/create",
        templateUrl: "views/create.html",
        controller: 'CreateCtrl'
      })

      .state('admin', {
        url: "/admin",
        templateUrl: "views/admin/admin.html",
        controller: 'AdminCtrl'
      })
      .state('admin.nos', {
        url: "/nos",
        templateUrl: "views/admin/nos.html",
        controller: 'NosCtrl'
      })
      .state('admin.update', {
        url: "/update",
        templateUrl: "views/admin/update.html",
        controller: 'UpdateCtrl'
      })
      .state('admin.drive', {
        url: "/drive",
        templateUrl: "views/admin/drive.html",
        controller: 'DriveCtrl'
      })
      .state('admin.notifications', {
        url: "/notifications",
        templateUrl: "views/admin/notifications.html",
        controller: 'AdminCtrl'
      })
      .state('admin.authapps', {
        url: "/authapps",
        templateUrl: "views/admin/authapps.html",
        controller: 'AdminCtrl'
      })
      .state('admin.oauthtokens', {
        url: "/oauthtokens",
        templateUrl: "views/admin/oauthtokens.html",
        controller: 'AdminCtrl'
      })


      .state('settings', {
        url: "/settings",
        templateUrl: "views/settings/settings.html",
        controller: 'SettingsCtrl'
      })
      .state('settings.profile', {
        url: "/profile",
        templateUrl: "views/settings/profile.html",
        controller: 'SettingsCtrl'
      })
      .state('settings.drive', {
        url: "/drive",
        templateUrl: "views/settings/drive.html",
        controller: 'SettingsCtrl'
      })
      .state('settings.notifications', {
        url: "/notifications",
        templateUrl: "views/settings/notifications.html",
        controller: 'SettingsCtrl'
      })
      .state('settings.cloudservices', {
        url: "/cloudservices",
        templateUrl: "views/settings/cloudservices.html",
        controller: 'SettingsCtrl'
      })
  });
