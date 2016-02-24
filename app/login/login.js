'use strict';
angular.module('concentratorLogin', ['ui.bootstrap', 'ngCookies'])

.factory('modalService', ['$uibModal', '$cookies', function($uibModal, $cookies) {

  return {
    openMenuModal: function(templateLink, windowAnimation) {

        var modalObj = $uibModal.open({
            templateUrl: templateLink,
            backdrop: 'static',
            windowClass: windowAnimation,
            controller: function($scope,$modalInstance){
              $scope.ok = function(id){
                //Process OK Button Click
                 $modalInstance.close(); 
              },
               $scope.cancel = function(){
                $modalInstance.dismiss('cancel');
              }
            },
            size: 'md',
            keyboard: true,
            resolve: {
              someData: function () {
                return 'Return some Data';
              }
          }
        });
    }
};
}])

.controller('HomeCtrl', ['$scope','modalService', function($scope, modalService, someData) {
   $scope.dataFromService = someData;
   $scope.opentheBook = function(){
      modalService.openMenuModal('myModalContent.html', 'animated zoomIn');
    };
}]);







