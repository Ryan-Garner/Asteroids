MyGame = {
    screens : {},
    renderer : {},
    components : {},
    input : {}
};

MyGame.game = (function(screens, renderer) {
    function showScreen(id){
        var screen = 0,
            active = null;
        
        active = document.getElementsByClassName('active');
        for(screen = 0; screen < active.length; screen++){
            active[screen].classList.remove('active');
        }
        
        screens[id].run();

        document.getElementById(id).classList.add('active');
    }

    function initialize(){
        var screen = null;

        for(screen in screens){
            if(screens.hasOwnProperty(screen)){
                screens[screen].initialize();
            }
        }
        console.log(MyGame);
        renderer.core.initialize();

        showScreen('main-menu');
    }
    return{
        showScreen : showScreen,
        initialize : initialize
    };
}(MyGame.screens, MyGame.renderer));