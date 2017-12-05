MyGame.screens['main-menu'] = (function(game) {
    'use strict';

     function initialize(){
        document.getElementById('new-game').addEventListener(
			'click',
			function() {game.showScreen('asteroids'); });
		
		document.getElementById('control-b').addEventListener(
			'click',
			function() {game.showScreen('controls'); });
		
		document.getElementById('high-scores-b').addEventListener(
			'click',
			function() {game.showScreen('high-scores'); });
        document.getElementById('credits-b').addEventListener(
            'click', 
            function(){game.showScreen('credits')});
    }
    function run(){

    }
    return{
        initialize : initialize,
        run : run
    };
}(MyGame.game));