'use strict';

/**
 * @ngdoc function
 * @name nuxeoApp.controller:NoteCtrl
 * @description
 * # NoteCtrl
 * Controller of the nuxeoApp
 */
angular.module('nuxeoApp')
  .controller('NoteCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
