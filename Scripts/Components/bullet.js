MyGame.components.bullet = function(spec){
    var that = {
        get Sprite(){return that.Bsprite}
    };
    that.bulletImage = new Image();
    that.bulletImage.isReady = false;
    that.bulletImage.onload = function(){
        that.bulletImage.isReady = true;
    }
    that.bulletImage.onerror = function(){
        console.log("Failed to Load Image");
        that.bulletImage.isReady = false;
    }

    that.bulletImage.src = spec.image;
    that.width = spec.width;
    that.height = spec.height;
    that.vX = Math.cos(spec.rotation*Math.PI/180);
    that.vY = Math.sin(spec.rotation*Math.PI/180);
    that.rotation = spec.rotation;
    that.lifetime = 2000;
    that.alive = 0;
    that.dead = false;
    that.frameTime = 0;
    that.frameIndex=0;

    that.Bsprite = MyGame.components.asteroidSprite({
        width: that.width,
        height: that.height,
        image: that.bulletImage,
        pixelWidth: 148,
        pixelHeight: 75,
        frameIndex: 0,
        frameHIndex: 0,
        numFrames: 5,
        numHFrames: 0,
        x: spec.x,
        y: spec.y
    })
    that.isDead = function(){
        that.dead = true;
    }
    that.update = function(elapsedtime){
        that.frameTime += elapsedtime
        if(that.frameTime > 75){
            that.frameTime = 0;
            that.frameIndex++;
            that.Bsprite.changeFrame(that.frameIndex)
            if(that.frameIndex > 3){
                that.frameIndex = 0;
            }
        }
        that.alive += elapsedtime;
        if(that.alive > that.lifetime){
            that.dead = true;
        }
        if(that.Bsprite.x < that.width/2){
            that.Bsprite.changeX(900);
        }
        if(that.Bsprite.x > 900){
           that.Bsprite.changeX(that.width/2);
        }
        if(that.Bsprite.y < that.height/2){
            that.Bsprite.changeY(900);
        }
        if(that.Bsprite.y > 900){
            that.Bsprite.changeY(that.height/2);
        }
        that.Bsprite.changeX(that.Bsprite.x + that.vY*6);
        that.Bsprite.changeY(that.Bsprite.y - that.vX*6);
    }
    return that;
}