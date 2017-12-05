MyGame.renderer.sprite = (function(){
    var that = {};

    that.renderSprite = function(spec){
        MyGame.renderer.core.drawImage(spec);
    }

    return that;
}());