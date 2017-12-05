MyGame.components.explosion = function(spec){
    var that = {
        get Sprite(){return that.Esprite}
    };

    that.explosionImage = new Image();
    that.explosionImage.isReady = false;
    that.explosionImage.onload = function(){
        that.explosionImage.isReady = true;
    }
    that.explosionImage.onerror = function(){
        console.log("Failed to Load Image");
        that.explosionImage.isReady = false;
    }
    that.explosionImage.src = spec.image;
    that.width = spec.width;
    that.height = spec.height;
    that.pixelWidth = spec.pixelWidth;
    that.pixelHeight = spec.pixelHeight;
    that.numFrames = spec.numFrames;
    that.numHFrames = spec.numHFrames;
    that.maxFrames = spec.maxFrames;
    that.dead = false;
    that.frameTime = 0;
    that.frameSIndex = 0;
        

    that.Esprite = MyGame.components.asteroidSprite({
        width: that.width,
        height: that.height,
        image: that.explosionImage,
        pixelWidth: that.pixelWidth,
        pixelHeight: that.pixelHeight,
        frameIndex: 0,
        frameHIndex: 0,
        numFrames: that.numFrames,
        numHFrames: that.numHFrames,
        x: spec.x,
        y: spec.y
    })

    that.update = function(elapsedtime){
        that.frameTime += elapsedtime;
        if(that.frameTime > 40){
            that.frameTime = 0;
            if(that.frameSIndex < that.maxFrames){
                
                that.frameSIndex++;
                
                if(that.Esprite.frameIndex < 4 && that.Esprite.frameHIndex <= 3){
                    
                    that.Esprite.changeFrame(that.Esprite.frameIndex + 1);
                    
                }else if(that.Esprite.frameIndex >= 4 && that.Esprite.frameHIndex <= 3){
                    
                    that.Esprite.changeFrame(0);
                    that.Esprite.changeHFrame(that.Esprite.frameHIndex + 1);
                    
                }
            }else{
                that.dead = true;
            }

        }
    }
    return that;
}