MyGame.components.shipSprite = function(spec){
    var width = spec.width;
    var height = spec.height;
    var pixelWidth = spec.pixelWidth;
    var pixelHeight = spec.pixelHeight;
    var image = spec.image;
    var frameIndex = spec.frameIndex || 0;
    var frameHIndex = spec.frameHIndex || 0;
    var numFrames = spec.numFrames || 0;
    var numHFrames = spec.numHFrames || 0;
    var x = spec.x || 500;
    var y = spec.y || 500;
    var that = {
        get image(){return image},
        get width(){return width},
        get height(){return height},
        get pixelWidth(){return pixelWidth},
        get pixelHeight(){return pixelHeight},
        get image(){return image},
        get frameIndex(){return frameIndex},
        get frameHIndex(){return frameHIndex},
        get numFrames(){return numFrames},
        get numHFrames(){return numHFrames},
        get x(){return x},
        get y(){return y},
    };
    that.changeX = function(xLoc){
        x = xLoc;
    }
    that.changeY = function(yLoc){
        y = yLoc;
    }
    that.changeIndex = function(index){
        frameIndex = index;
    }
    that.changeHIndex = function(index){
        frameHIndex = index;
    }
    return that;
}