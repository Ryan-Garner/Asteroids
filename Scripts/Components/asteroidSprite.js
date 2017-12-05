MyGame.components.asteroidSprite = function(spec){
     var that = {
        get X(){return that.x},
        get Y(){return that.y},
        width: spec.width,
        height: spec.height,
        pixelWidth: spec.pixelWidth,
        pixelHeight : spec.pixelHeight,
        image : spec.image,
        frameIndex : spec.frameIndex || 0,
        frameHIndex : spec.frameHIndex || 0,
        numFrames : spec.numFrames || 0,
        numHFrames : spec.numHFrames || 0,
        x : spec.x || 500,
        y : spec.y || 500
    };

    that.changeX = function(xLoc){
        that.x = xLoc;
    }
    that.changeY = function(yLoc){
        that.y = yLoc;
    }
    
    that.changeFrame = function(nFrame){
        that.frameIndex = nFrame;
    }

    that.changeHFrame = function(nFrame){
        that.frameHIndex = nFrame;
        
    }
    
    return that;
}