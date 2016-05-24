'use strict';

/**
 * @ngdoc function
 * @name nuxeoApp.controller:BrowseCtrl
 * @description
 * # BrowseCtrl
 * Controller of the nuxeoApp
 */
angular.module('nuxeoApp')
  .controller('BrowseCtrl', function ($rootScope, $scope, $stateParams, $sce, nuxeoClient) {
    $scope.trustedHtml = function(html) {
      return $sce.trustAsHtml(html);
    };

    var path = $stateParams.path;
    if (angular.isUndefined(path) || path.length === 0) {
      path = '/';
    }

    if (path.indexOf('/') !== 0) {
      path = decodeURIComponent(decodeURIComponent(path));
    }

    nuxeoClient.document(path)
      .header('X-NXenrichers.document', 'breadcrumb')
      .fetch().then(function(doc) {
        $scope.document = doc;
        $scope.breadcrumb = getBreadcrumb(doc);
        console.log(doc);
        if (doc.isFolder()) {
          doc.children().then(function(data) {
            $scope.children = data.entries;
          });
        }
      });

    $scope.isRootDocument = function() {
      if (angular.isUndefined($scope.document)) {
        return true;
      }
      return $scope.document.path === '/';
    };

    function getBreadcrumb(doc) {
      var breadcrumbDocs = doc.contextParameters.breadcrumb.entries;
      if (breadcrumbDocs.length <= 4) {
        return breadcrumbDocs;
      } else {
        return breadcrumbDocs.slice(-4);
      }
    };

    $scope.getMediumPictureViewURL = function() {
      var views = $scope.document.properties['picture:views'];
      for (var i = 0; i < views.length; i++) {
        if (views[i].title === 'Medium') {
          return views[i].content.data;
        }
      }
      return "";
    };

  });
