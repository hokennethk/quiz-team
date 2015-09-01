angular.module('meatloaf.game.over', [])

.controller('gameOverCtrl', ['$scope', '$rootScope', '$state', 
            function ($scope, $rootScope, $state) {

  var socket = $rootScope.socket;
  $scope.results;

  socket.emit('enteredGameOver');

  socket.on('gameStats', function(gameData) {
    $scope.results = gameData.stats;
  });

  socket.on('restartGame', function() {
    //TODO Handle restart game signal from server.
    $state.go('gameStart');
  })

  $scope.QuitGame = function() {
    //TODO handle quit game button press here
    socket.emit('quitGame');
    $state.go('selection');
  };

  $scope.PlayAgain = function() {
    //TODO handle new game button press here
    socket.emit('playAgain');
  };
}]);