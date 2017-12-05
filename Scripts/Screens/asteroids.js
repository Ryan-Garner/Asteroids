MyGame.screens['asteroids'] = (function(game) {
    'use strict';
    var cancelNextRequest = false;
    var ship = null;
    var asteroidField = null;
    var bullets = null;
    var explosions = null;
    var keyBoard = null;
    
    function initialize(){
        document.getElementById('asteroids-back').addEventListener(
            'click',
            function(){cancelNextRequest = true; game.showScreen('main-menu');});
    }
    function goback(){
        cancelNextRequest = true; game.showScreen('main-menu');
    }
    function update(elapsedtime){
        keyBoard.processInput(ship, bullets);
        bullets.update(elapsedtime);
        explosions.update(elapsedtime);
        asteroidField.update(elapsedtime,ship,bullets,explosions);
        ship.update();
    }

    function render(elapsedtime){
        MyGame.renderer.core.clearCanvas();
        MyGame.renderer.ship.render(ship);
        MyGame.renderer.bullet.renderBullets(bullets);
        MyGame.renderer.explosion.render(explosions.Explosions);
        MyGame.renderer.asteroidField.renderField(asteroidField.AsteroidField);
        MyGame.renderer.core.drawBorders({

        });
        MyGame.renderer.core.strokeContext();
    }

    var prevTime = 0
    function gameloop(){
        update(performance.now() - prevTime);
        render(performance.now() - prevTime);
        prevTime = performance.now()
        if(!cancelNextRequest){
            requestAnimationFrame(gameloop);
        }
    }

    function run(){
        //creates a ship
        ship = MyGame.components.ship({
            width: 62.5,
            height: 98,
            image: "Assets/fighters_sprites.png",
            pixelWidth: 500,
            pixelHeight: 98
        })
        /*C:/Users/itcl/Desktop/Asteroids/Asteroids/Assets/fighters_sprites.png*/ 
        //creates a keyboard object
        keyBoard = MyGame.input.keyboard();
        //creates an asteroid field
        asteroidField = MyGame.components.asteroidField();
        asteroidField.createField(6);
        bullets = MyGame.components.bullets();
        explosions = MyGame.components.explosions();
        
        
        prevTime = performance.now();
        cancelNextRequest = false;
        requestAnimationFrame(gameloop);
    }


    return{
        initialize : initialize,
        goback : goback,
        run : run
    };
}(MyGame.game));