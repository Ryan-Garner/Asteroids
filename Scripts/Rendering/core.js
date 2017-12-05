MyGame.renderer.core = (function(){
    var canvas = null,
        context = null;

    function initialize(){
        canvas = document.getElementById("myCanvas");
        context = canvas.getContext('2d');
    }

    function clearCanvas() {
		context.clearRect(0, 0, canvas.width, canvas.height);
	}

    function saveContext() {
		context.save();
	}

    function restoreContext() {
		context.restore();
	}

    function strokeContext() {
        context.strokeStyle = 'rgb(244, 66, 170)';
        context.stroke();
    }

    function drawBorders(spec){
        context.beginPath();
	    context.moveTo(0, 0);
	    context.lineTo(900, 0);
	    context.lineTo(900, 900);
	    context.lineTo(0, 900);
	    context.closePath();
    }

    function drawImage(spec){
        if(spec.image.isReady){
            // console.log(spec.image);
            // console.log(spec.spriteLocationX);
            // console.log(spec.spriteLocationY);
            // console.log(spec.pixelWidth);
            // console.log(spec.pixelHeight);
            // console.log(spec.x);
            // console.log(spec.y);
            // console.log(spec.width);
            // console.log(spec.height);
            context.drawImage(
                spec.image,
                spec.spriteLocationX,
                spec.spriteLocationY,
                spec.pixelWidth,
                spec.pixelHeight,
                spec.x,
                spec.y,
                spec.width,
                spec.height
            )
        }
    }
    function drawLine(spec){
        context.strokeStyle = 'rgb(244, 66, 170)';
        context.beginPath();
        context.moveTo(spec.x, spec.y);
        context.lineTo(spec.px, spec.py);
        context.closePath();
        context.stroke();
    }
    function rotate(spec){
        context.translate(spec.x, spec.y);
        context.rotate(spec.angle*Math.PI/180);
        context.translate(-spec.x, -spec.y);
    }

    return{
        initialize : initialize,
        clearCanvas : clearCanvas,
        drawBorders : drawBorders,
        strokeContext : strokeContext,
        drawImage : drawImage,
        saveContext : saveContext,
        restoreContext : restoreContext,
        rotate : rotate,
        drawLine : drawLine
    };
}());