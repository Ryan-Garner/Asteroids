MyGame.components.asteroid = function(spec){
    var that = {
        get Sprite(){return that.Asprite}
    };

    that.asteroidImage = new Image();
    that.asteroidImage.isReady = false;
    that.asteroidImage.onload = function(){
        that.asteroidImage.isReady = true;
    }
    that.asteroidImage.onerror = function(){
        console.log("Failed to Load Image");
        that.asteroidImage.isReady = false;
    }
    that.asteroidImage.src = spec.image;
    that.width = spec.width;
    that.height = spec.height;
    that.scale = spec.scale;
    that.vX = spec.vX;
    that.vY = spec.vY;
    that.type = spec.type;
    that.frameTime = 0;
    that.rotation = 0;
    that.rotateDir = spec.rotateDir;
    that.type = spec.type;

    that.Asprite = MyGame.components.asteroidSprite({
        width: that.width,
        height: that.height,
        image: that.asteroidImage,
        pixelWidth: 390,
        pixelHeight: 936,
        frameIndex: spec.frameIndex,
        frameHIndex: spec.frameHIndex,
        numFrames: 5,
        numHFrames: 12,
        x: spec.x,
        y: spec.y
    });

    that.updateFrame = function(time){
        that.frameTime += time;
        // var nC = that.Asprite.frameIndex + 1;
        // var nR = that.Asprite.frameHIndex;
        // if(nC>4 && nR < 3){
        //     nC = 0;
        //     nR += 1;
        // }else if(nC>3 && nR >= 3){
        //     nR = 0;
        //     nC = 0;
        // }
        that.rotation += (that.rotateDir*3);
        if(that.frameTime > 100*that.scale){
            var nC = that.Asprite.frameIndex + 1;
            var nR = that.Asprite.frameHIndex;
            if(nC>4 && nR < 3){
                nC = 0;
                nR += 1;
            }else if(nC>3 && nR >= 3){
                nR = 0;
                nC = 0;
            }
            that.Asprite.changeFrame(nC);
            that.Asprite.changeHFrame(nR);
            that.frameTime = 0;
        }
        if(that.Asprite.x < that.width/2){
            that.Asprite.changeX(900);
        }
        if(that.Asprite.x > 900){
           that.Asprite.changeX(that.width/2);
        }
        if(that.Asprite.y < that.height/2){
            that.Asprite.changeY(900);
        }
        if(that.Asprite.y > 900){
            that.Asprite.changeY(that.height/2);
        }
        
        that.Asprite.changeX(that.Asprite.x + that.vX*4);
        that.Asprite.changeY(that.Asprite.y + that.vY*4);
    }

    return that;
}