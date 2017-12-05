MyGame.renderer.bullet = (function(){
    var that = {}

    that.renderBullets = function(bullets){
            var mp = bullets.Bullets
            var xp = null;
            var temp = null;
            if(mp.length !== 0){
                for(i = 0; i<mp.length;i ++){
                    if(mp[i] != 0){
                        xp = mp[i]
                        temp = xp.Sprite
                        MyGame.renderer.core.saveContext();
                        MyGame.renderer.core.rotate({
                            x: temp.x,
                            y: temp.y,
                            angle: xp.rotation
                        })
                        MyGame.renderer.sprite.renderSprite({
                            image: temp.image,
                            spriteLocationX: (temp.frameIndex * (27))+4,
                            spriteLocationY: (0),
                            pixelWidth: temp.pixelWidth/temp.numFrames,
                            pixelHeight: temp.pixelHeight,
                            x: temp.x - temp.width/2,
                            y: temp.y - temp.height/2,
                            width: temp.width,
                            height: temp.height
                        })
                        MyGame.renderer.core.restoreContext();
                    }
                }
            }
        
    }

    return that;
}())