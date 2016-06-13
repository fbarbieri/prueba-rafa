'use strict';

/**
 * @ngdoc function
 * @name proyectoFedeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the proyectoFedeApp
 */
angular.module('app')
  .controller('AreasListCtrl', function ($scope,$rootScope,$uibModal) {
	  
	  $rootScope.entity="AREA";
	  
	  $scope.gridOptions = {
			    modifierKeysToMultiSelectCells: true,
			    showGridFooter: true
			  };
			  $scope.gridOptions.columnDefs = [
			    { name: 'id',width:'640', label:"Identificador",allowCellFocus : false },
			    { name: 'name',width:'640', label:"Propiedad",allowCellFocus : false },
			    { name: 'edit', width:'100', cellTemplate:'<a href=""><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span></a>'},
			    { name: 'remove', width:'100',cellTemplate:'<a href=""><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></a>'},
			  ];
			 
			  $scope.gridOptions.data = [{id:"hola",name:"mundo"}];
			 
			    $scope.info = {};
			 
			    $scope.currentFocused = "";
			 
			    $scope.getCurrentFocus = function(){
			      var rowCol = $scope.gridApi.cellNav.getFocusedCell();
			      if(rowCol !== null) {
			          $scope.currentFocused = 'Row Id:' + rowCol.row.entity.id + ' col:' + rowCol.col.colDef.name;
			      }
			    };
			 
			    $scope.getCurrentSelection = function() {
			      var values = [];
			      var currentSelection = $scope.gridApi.cellNav.getCurrentSelection();
			      for (var i = 0; i < currentSelection.length; i++) {
			        values.push(currentSelection[i].row.entity[currentSelection[i].col.name])
			      }
			      $scope.printSelection = values.toString();
			    };
			 
			    $scope.scrollTo = function( rowIndex, colIndex ) {
			      $scope.gridApi.core.scrollTo( $scope.gridOptions.data[rowIndex], $scope.gridOptions.columnDefs[colIndex]);
			    };
			 
			    $scope.scrollToFocus = function( rowIndex, colIndex ) {
			      $scope.gridApi.cellNav.scrollToFocus( $scope.gridOptions.data[rowIndex], $scope.gridOptions.columnDefs[colIndex]);
			    };
			 
			    $scope.gridOptions.onRegisterApi = function(gridApi){
			       $scope.gridApi = gridApi;
			       gridApi.cellNav.on.navigate($scope,function(newRowCol, oldRowCol){

			    	   if(newRowCol.col.field=="remove"){
			    		   newRowCol.row.entity;
			    	   }else if(newRowCol.col.field=="edit"){
			    		   newRowCol.row.entity;
			    	   }
			    	   
			            });
			    };
  });
