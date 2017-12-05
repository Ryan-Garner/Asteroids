MyGame.components.bullets = function(){
    var that = {
        get Bullets(){return that.bullets}
    };
    that.bullets = [];
    that.bulletIndex = 0;
    that.maxbullets = 7;
    for(i = 0; i < that.maxbullets; i++){
        that.bullets[i] = 0;
    }

    that.createbullet = function(spec){
        if(that.bulletIndex<that.maxbullets){
            var bullet = MyGame.components.bullet({
                width: 24,
                height: 75,
                vX: spec.vX,
                vY: spec.vY,
                rotation: spec.rotation, 
                image: "Assets/ship-bullet.png",
                x: spec.x ,
                y: spec.y  
            });
            for(i = 0; i < that.maxbullets; i++){
                if(that.bullets[i] === 0){
                    that.bullets[i] = bullet;
                    break;
                }
            }
        }
    }
    that.update = function(elapsedtime){
        for(i=0;i<that.bullets.length;i++){
            if(that.bullets[i] != 0){
                that.bullets[i].update(elapsedtime);
            }
            if(that.bullets[i].dead){
                that.bullets[i] = 0;
            }
        }
    }
    return that;
}