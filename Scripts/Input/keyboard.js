MyGame.input.keyboard = function(){
    var that = {};
    var keys = [];
    var up = 38;
    var right = 39;
    var left = 37;
    var space = 32;

    
    function keyDown(event){
        if(event.keyCode === space){
            keys[event.keyCode] = false;
        }else{
            keys[event.keyCode] = true;
        }
    }
    function keyRelease(event){
    
        if(event.keyCode === space){
            keys[event.keyCode] = true;
        }else{
            keys[event.keyCode] = false;
        }
    }


    that.processInput = function(spec, bullet){
        if(keys[up] === true){
            spec.startThrust();
        }else if(keys[up] === false){
            spec.endThrust();
        }
        if(keys[right] === true){
            spec.rotateRight();
        }
        if(keys[left]){
            spec.rotateLeft();
        }
        if(keys[space] === true){
            console.log("here")
            bullet.createbullet({
                vX: Math.cos(spec.Angle * Math.PI/180),
                vY: Math.cos(spec.Angle * Math.PI/180),
                rotation: spec.Angle,
                x: spec.X + 12,
                y: spec.Y + 12
            })
            keys[space] = false;
        }
    }


    window.addEventListener('keydown', keyDown);
    window.addEventListener('keyup', keyRelease);
    
    return that;
};