'use strict';

/**
 * @ngdoc function
 * @name nuxeoApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the nuxeoApp
 */
angular.module('nuxeoApp')
  .controller('DashboardCtrl', function ($rootScope) {
    $rootScope.navTitle = 'Dashboard';
  });
