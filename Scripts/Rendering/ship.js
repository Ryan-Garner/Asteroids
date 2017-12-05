MyGame.renderer.ship = (function(){
    var that = {};

    that.render = function(spec){
        var temp = spec.Sprite;
        MyGame.renderer.core.saveContext();
        MyGame.renderer.core.rotate({
            x: temp.x,
            y: temp.y,
            angle: spec.Angle
        });
         MyGame.renderer.sprite.renderSprite({
             image: temp.image,
             spriteLocationX: (144 + (temp.frameIndex*56)),
             spriteLocationY: 0,
             pixelWidth: 56,
             pixelHeight: 98,
             x: temp.x - temp.width/2,
             y: temp.y - temp.height/2,
             width: temp.width,
             height: temp.height

         });
         
        MyGame.renderer.core.restoreContext();
    }
    return that;
}());