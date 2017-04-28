'use strict';

/**
 * @ngdoc function
 * @name archivosApp.controller:NotificacionesCtrl
 * @description
 * # NotificacionesCtrl
 * Controller of the archivosApp
 */
angular.module('archivosApp')
  .controller('NotificacionesCtrl', function($scope, notificacion) {
    $scope.imagePath = 'images/yeoman.png';
    $scope.notificacion = notificacion;
  });
