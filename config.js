
let Mainmenu= new sceneA();
var config={
    type:Phaser.AUTO,
    width:800,
    height:600,
    parent:'my-game',
    physics:{
        default:'arcade',
        arcade:{
            gravity:{y:500},
            debug:false
        }
    },
    scene:[sceneB,sceneA]
}
 if(window.innerWidth<400)
     config.scale=scale: {mode: Phaser.Scale.FIT};
let speed=500;
let cursors;
let player;
let scoreText;
let score=0;
let doubleJump=0;
let up;
let itr=0;
var game=new Phaser.Game(config);

let pointer;
