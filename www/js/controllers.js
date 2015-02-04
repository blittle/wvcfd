angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('NavController', function($scope) {
  $scope.navItems = [
    { title: 'Fire Safety Materials', id: 1, icon: 'ion-flame', url: '#/app/materials'},
    { title: 'Preparing for Disasters', id: 2, icon: 'ion-nuclear', url: '#/app/disasters' },
    { title: 'Additional Information', id: 3, icon: 'ion-information-circled', url: '#/app/information' },
		{ title: 'Connect with us', id: 4, icon: 'ion-person-stalker', url: '#/app/connect' },
  ];
})

.controller('InformationController', function($scope, $stateParams) {
})

.controller('DisastersController', function($scope, $stateParams) {
})

.controller('MaterialsController', function($scope, $stateParams) {
})

.controller('ConnectController', function($scope) {
});
