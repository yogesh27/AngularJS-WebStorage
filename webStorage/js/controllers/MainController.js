app.controller('MainController', ['$scope', '$localStorage', '$sessionStorage', 
                function($scope, $localStorage, $sessionStorage) {
    
    // local storage
    $scope.$local_storage = $localStorage.$default({
                          x: 42,
                          y: 2
                        }); 
    
    $scope.delete_local_X = function() {
          delete $scope.$local_storage.x;
        };
        
    $scope.delete_local_Y = function() {
          delete $localStorage.y;
        };


    // session storage
    $scope.$session_storage = $sessionStorage.$default({
                          x: 42,
                          y: 2
                        }); 
    
    $scope.delete_session_X = function() {
          delete $scope.$session_storage.x;
        };
        
    $scope.delete_session_Y = function() {
          delete $sessionStorage.y;
        };
}]);