MyGame.components.asteroidField = function(){
    var that = {
        get AsteroidField(){return that.asteroidField}
    }
    that.asteroidField = [];
    that.fieldIndex = 0;

    that.createSmallAsteroid = function(x,y){
        var angle = Math.floor(Math.random() * (180 - (-180))) + (-180);
        var radians = angle*Math.PI/180;
        var mX = Math.cos(radians);
        var mY = Math.sin(radians);
        var asteroid = MyGame.components.asteroid({
            width: 40,
            height: 40,
            rotateDir: [Math.floor(Math.random() * (3 - 0)) + 0],
            vX: mX,
            vY: mY,
            type: 2,
            image: "Assets/3_space_station_sheet.png",
            x: x,
            y: y,
            scale: .5
        })
        that.asteroidField[that.fieldIndex] = asteroid;
        that.fieldIndex++;
    };
    that.createMediumAsteroid = function(x,y){
        var angle = Math.floor(Math.random() * (180 - (-180))) + (-180);
        var radians = angle*Math.PI/180;
        var mX = Math.cos(radians);
        var mY = Math.sin(radians);
        var asteroid = MyGame.components.asteroid({
            width: 85,
            height: 85,
            rotateDir: [Math.floor(Math.random() * (3 - 0)) + 0],
            vX: mX,
            vY: mY,
            type: 1,
            image: "Assets/3_space_station_sheet.png",
            x: x,
            y: y,
            scale:  1
        })
        that.asteroidField[that.fieldIndex] = asteroid;
        that.fieldIndex++;
    }
    that.createLargeAsteroid = function(){
        var spot = []
        var x1 = Math.floor(Math.random() * (200 - 75)) + 75;
        var x2 = Math.floor(Math.random() * (900 - 875)) + 875;
        var angle = Math.floor(Math.random() * (180 - (-180))) + (-180);
        var radians = angle*Math.PI/180;
        var mX = Math.cos(radians);
        var mY = Math.sin(radians);
        spot[0] = x1;
        spot[1] = x2;
        
        var asteroid = MyGame.components.asteroid({
            width: 150,
            height: 150,
            rotateDir: Math.floor(Math.random()*(2 - (-1)))+(-1),
            vX: mX,
            vY: mY,
            type: 0,
            image: "Assets/3_space_station_sheet.png",
            x: spot[Math.floor(Math.random() * (2 - 0)) + 0],
            y: Math.floor(Math.random() * (900 - 75)) + 75,
            scale: 2
        })
        that.asteroidField[that.fieldIndex] = asteroid;
        that.fieldIndex++;
    }
    that.createField = function(lvl){
        that.fieldIndex = 0;
        for(i = 0; i< lvl; i++){
            that.createLargeAsteroid();
        }
        that.createSmallAsteroid();

    }
    that.checkCollisions = function(ship,bullets,explosions,asteroid,j){
            var b = bullets.Bullets;
            var bs = null;
            var dis = null;
            
            if(that.asteroid != 0){
                tAsteroid = asteroid.Sprite
                aCx = tAsteroid.X+(tAsteroid.width/2);
                aCy = tAsteroid.Y+(tAsteroid.height/2);
                x = tAsteroid.X;
                y = tAsteroid.Y;

                if(ship.X > x && ship.Y > y){
                    dis = Math.sqrt(Math.pow((ship.X - tAsteroid.X),2), Math.pow((ship.Y - tAsteroid.y),2));
                }else if(ship.X < x && ship.Y > y){
                    dis = Math.sqrt(Math.pow((tAsteroid.X - ship.X),2), Math.pow((ship.Y - tAsteroid.y),2));
                }else if(ship.X > x && ship.Y < y){
                    dis = Math.sqrt(Math.pow((ship.X - tAsteroid.X),2), Math.pow((tAsteroid.y - ship.Y),2));
                }else if(ship.X < x && ship.Y < y){
                    dis = Math.sqrt(Math.pow((tAsteroid.x - ship.X),2), Math.pow((tAsteroid.y - ship.Y),2));
                }
                console.log(ship.X);
                console.log(ship.Y);
                console.log(x)
                console.log(y)
                console.log(dis);
                
                // if(ship.X > aCx && ship.X<aCx+tAsteroid.width && ship.Y > aCy && ship.Y < aCy+tAsteroid.height){
                if(dis < 50){
                    //alert('sf')
                    console.log('hit');
                    explosions.createExplosion({
                        width: 640/5,
                        height: 512/4,
                        pixelWidth: 640,
                        pixelHeight: 512,
                        numFrames: 5,
                        numHFrames: 4,
                        maxFrames: 18,
                        image: "Assets/1_base_expl.png",
                        x: x,
                        y: y
                    });
                    console.log(asteroid.type)
                    if(asteroid.type == 0){
                        that.createMediumAsteroid(x,y);
                        that.createMediumAsteroid(x,y);
                    }
                    if(asteroid.type == 1){
                        that.createSmallAsteroid(x,y);
                        that.createSmallAsteroid(x,y);
                    }
                    
                    // alert("game over")
                    // MyGame.screens['asteroids'].goback();
                    that.removeAsteroid(j); 
                }
                
                for(w = 0; w<b.length; w++){
                    if(b[w]!=0){
                        bs = b[w].Sprite;
                            if(bs.x > aCx && bs.x<aCx+tAsteroid.width && bs.x > aCy && bs.x < aCy+tAsteroid.height){
                                explosions.createExplosion({
                                width: 640/5,
                                height: 512/4,
                                pixelWidth: 640,
                                pixelHeight: 512,
                                numFrames: 5,
                                numHFrames: 4,
                                maxFrames: 18,
                                image: "Assets/1_base_expl.png",
                                x: x,
                                y: y
                            });
                            b[w].isDead();
                            that.removeAsteroid(j); 
                            if(asteroid.type == 0){
                                that.createMediumAsteroid(x,y);
                                that.createMediumAsteroid(x,y);
                            }
                            if(asteroid.type == 1){
                                that.createSmallAsteroid(x,y);
                                that.createSmallAsteroid(x,y);
                            }
                        }
                    }   
                }
            }
        }
    
    that.removeAsteroid = function(index){
        that.asteroidField[index] = 0    
    }
    that.update = function(elapsedTime,ship,bullets,explosions){
        for(q = 0; q < that.asteroidField.length; q++){
                
            if(that.asteroidField[q] != 0){
                that.checkCollisions(ship,bullets,explosions,that.asteroidField[q],q);
                
                if(that.asteroidField[q] != 0){
                    that.asteroidField[q].updateFrame(elapsedTime);
                }
            }
        }
    }
    return that;
}