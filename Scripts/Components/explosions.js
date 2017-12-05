MyGame.components.explosions = function(){
    var that = {
        get Explosions(){return that.explosions}
    };

    that.explosions = [];
    that.maxExplosions = 10;
    
        for(i = 0; i < that.maxExplosions; i++){
            console.log("explosion")
            that.explosions[i] = 0;
        }
    

    that.createExplosion = function(spec){
        
        var explosion = MyGame.components.explosion({
                width: spec.width,
                height: spec.width,
                pixelWidth: spec.pixelWidth,
                pixelHeight: spec.pixelHeight,
                numFrames: spec.numFrames,
                numHFrames: spec.numHFrames,
                maxFrames: spec.maxFrames,
                image: spec.image,
                x: spec.x ,
                y: spec.y  
            });
         for(i = 0; i < that.maxExplosions; i++){
             
                if(that.explosions[i] === 0){
                    that.explosions[i] = explosion;
                    break;
                }
        }
    }

    that.update = function(elapsedtime){
        for(i = 0; i < that.maxExplosions; i++){
                if(that.explosions[i] != 0){
                    
                    that.explosions[i].update(elapsedtime);
                    
                }
                if(that.explosions[i].dead){
                    that.explosions[i] = 0;
                    
                }
        }
    }

    return that;
}