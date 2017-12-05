MyGame.renderer.explosion = (function(){
    var that = {};

    that.render = function(spec){
        var explosion = null;
        var temp = null;
        for(i = 0; i<spec.length; i++){
            if(spec[i] != 0){
                explosion = spec[i];
                temp = spec[i].Sprite;
                
                MyGame.renderer.sprite.renderSprite({
                    image: temp.image,
                    spriteLocationX: (temp.frameIndex *(temp.pixelWidth/temp.numFrames)),
                    spriteLocationY: (temp.frameHIndex *(temp.pixelHeight/temp.numHFrames)),
                    pixelWidth: temp.pixelWidth/temp.numFrames,
                    pixelHeight: temp.pixelHeight/temp.numHFrames,
                    x: temp.x - temp.width/2,
                    y: temp.y - temp.height/2,
                    width: temp.width,
                    height: temp.height
                });
            }
        }
    }

    return that;
}());