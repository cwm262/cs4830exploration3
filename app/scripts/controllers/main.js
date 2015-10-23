'use strict';

/**
 * @ngdoc function
 * @name cs4830exploration3App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cs4830exploration3App
 */
angular.module('cs4830exploration3App')
  .controller('MainCtrl', function ($scope, localStorageService, $timeout, $location) {

    var storedNotes = localStorageService.get('notes');

    $scope.notes = storedNotes || [];

    $scope.animationsEnabled = true;

    $scope.saveError = false;

    if($scope.notes.length > 0){
      $scope.toggleTable = true;
      $scope.toggleTblMsg = true;
    };

    $scope.clear = function(){
      $scope.nTitle = "";
      $scope.note = "";
    };

    $scope.save = function(){
      if($scope.nTitle && $scope.note){
        $scope.notes.push({noteTitle : $scope.nTitle , noteContent : $scope.note});
        $scope.nTitle = "";
        $scope.note = "";
        $location.path('/myNotes');
      }
      else{
        $scope.saveError = true;
        $timeout(function(){
          $scope.saveError=false;
        }, 3000);
      }
    };

    $scope.$watch('notes', function(){
      localStorageService.set('notes', $scope.notes);
    }, true);

    $scope.deleteNote = function(index){
      $scope.notes.splice(index, 1);
      if($scope.notes.length == 0){
        $scope.toggleTable = false;
        $scope.toggleTblMsg = false;
      };
    };
  });
