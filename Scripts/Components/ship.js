MyGame.components.ship = function(spec){
    var width = spec.width;
    var height = spec.height;
    var angle = 0;
    var moveRate = .1;
    var rotateRate = 3;
    var isThrusting = false;
    var velX = 0;
    var velY = 0;
    var shipImage = new Image();
    shipImage.isReady = false;
    shipImage.onload = function(){
        shipImage.isReady = true;
    }
    shipImage.onerror = function(){
        console.log("Failed to Load Image");
        shipImage.isReady = false;
    }
    shipImage.src = spec.image;
    var that = {
        get Sprite(){return sprite},
        get Angle(){return angle},
        get X(){return sprite.x},
        get Y(){return sprite.y}
    };
    sprite = MyGame.components.shipSprite({
        image: shipImage,
        width: width,
        height: height,
        pixelWidth: spec.pixelWidth,
        pixelHeight: spec.pixelHeight
    })
    
    that.startThrust = function(){
        isThrusting = true;
        sprite.changeIndex(1);
    }

    that.endThrust = function(){
        isThrusting = false;
        sprite.changeIndex(0);
    }

    that.rotateRight = function(){
        angle += rotateRate;
    }

    that.rotateLeft = function(){
        angle -= rotateRate;
    }

    that.update = function(){
        //Get the direction the ship is facing
        var radians = angle*Math.PI/180;


        if(isThrusting){
            //apply a normalized vector to change direction and get distanced moved
            velX += Math.cos(radians) * moveRate;
            velY += Math.sin(radians) * moveRate;
        }
        
        //Bounds Check
        if(sprite.x < width/2){
            sprite.changeX(900);
        }
        if(sprite.x > 900){
            sprite.changeX(width/2);
        }
        if(sprite.y < height/2){
            sprite.changeY(900);
        }
        if(sprite.y > 900){
            sprite.changeY(height/2);
        }
        

        //Apply friction
         velX *= .995;
         velY *= .995;
         
        sprite.changeX(sprite.x + velY);
        sprite.changeY(sprite.y - velX);
    }
    return that;

}