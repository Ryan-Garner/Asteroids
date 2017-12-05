MyGame.renderer.asteroidField = (function(){
    var that = {}

    that.renderField = function(spec){

        var asteroid = null;
        var temp = null;
        for(i = 0; i<spec.length; i++){
            if(spec[i] != 0){
                asteroid = spec[i];
                temp = asteroid.Sprite;
                MyGame.renderer.core.saveContext();
                MyGame.renderer.core.rotate({
                    x: temp.x,
                    y: temp.y,
                    angle: asteroid.rotation
                })

                
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
                })
                MyGame.renderer.core.restoreContext();
            }
        }
    }

    return that;
}());