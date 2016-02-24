'use strict';
angular.module('concentrator.login').controller('ModalInstanceCtrl', function ($scope, $uibModalInstance) {

  $scope.ok = function () {
    $scope.loggedIn = true;
    $uibModalInstance.close();
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});