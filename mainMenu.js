
class sceneB extends Phaser.Scene{
    constructor(){
        super({key:'MainMenu'})
    }
 preload(){
    this.load.image('bg_5','./assets/ww2.png');
    this.load.image('wave2','./assets/ww4.png');
this.load.image('wave1','./assets/ww3.png');
this.load.image('bg_2','./assets/bg2.png');
this.load.image('bg_1','./assets/bg1.png');
this.load.image('bg_3','./assets/bg3.png');
this.load.image('bg_4','./assets/bg4.png');
this.load.image('Sdirt1','./assets/8.png');
this.load.image('tree','./assets/tree.png');
this.load.image('house','./assets/house.png');
this.load.image('Sdirt2','./assets/10.png');
this.load.image('dirt1','./assets/3_5.png');
this.load.image('dirt2','./assets/20.png');
this.load.image('platform','./assets/5.png');
this.load.image('logo','./assets/idk.png');
this.load.image('button','./assets/button.png');

 }
 create(){
    this.bg_1=this.add.tileSprite(-350,0,game.config.width,160,'bg_1').setOrigin(0);
    this.bg_1.setScale(3,3.75);
    this.bg_1.setScrollFactor(0);
    this.bg_2=this.add.tileSprite(-350,0,game.config.width,160,'bg_2').setOrigin(0);
    this.bg_2.setScale(3,3.75);
    this.bg_2.setScrollFactor(0);
    this.bg_2.setDepth(0.5);
    this.bg_4=this.add.tileSprite(-350,-170,game.config.width,160,'bg_4').setOrigin(0);
    this.bg_4.setScale(3,3.75);
    this.bg_4.setScrollFactor(0);
    this.bg_3=this.add.tileSprite(-350,0,game.config.width,160,'bg_3').setOrigin(0);
    this.bg_3.setScale(3,4.5);
    this.bg_3.setScrollFactor(0);
    this.bg_3.setDepth(0.8);
  /*  this.bg_0=this.add.tileSprite(0,450,game.config.width,160,'bg_5').setOrigin(0);
    this.bg_0.setScrollFactor(0,0.25);
    this.bg_0.setDepth(0.85);
    this.bg_0.setScale(6,3);
    this.bg_0.setAlpha(0.5);
    this.bg_7=this.add.tileSprite(0,350,game.config.width,160,'bg_5').setOrigin(0);
    this.bg_7.setScrollFactor(0,0);
    this.bg_7.setDepth(0.4);
    this.bg_7.setScale(10,1);
    this.bg_7.setAlpha(0.5);
    this.bg_6=this.add.tileSprite(0,400,game.config.width,160,'bg_5').setOrigin(0);
    this.bg_6.setScrollFactor(0,0.25);
    this.bg_6.setDepth(0.75);
    this.bg_6.setScale(8,3);
    this.bg_6.setAlpha(0.5);
    this.bg_5=this.add.tileSprite(0,600,game.config.width,160,'bg_5').setOrigin(0);
    this.bg_5.setScrollFactor(0,1);
    this.bg_5.setDepth(1.5);
    this.bg_5.setScale(3,3);
    this.bg_5.setAlpha(0.5);*/
   //let sky= this.add.image(-350,-100,'sky').setOrigin(0);
   //sky.setScale(1.5,2);
  let wave1= this.physics.add.image(-1400,400,'wave1').setOrigin(0);
  wave1.setScale(1,1);
  wave1.body.setAllowGravity(false);
  wave1.setDepth(1.5);
  wave1.setAlpha(0.75);
  let wave2= this.physics.add.image(-1500,-350,'wave2').setOrigin(0);
  wave2.setScale(3,3);
  wave2.body.setAllowGravity(false);
  wave2.setDepth(1.5);
  wave2.setAlpha(0.75);
  for(let i=0;i<10;i++)
{
  
 let platform1=this.physics.add.image(200+96*i,300+150,'platform').setDisplaySize(96,32);
 platform1.setOrigin(0);
platform1.setImmovable(true);
//platform1.setVelocity(-speed,0);
platform1.body.setAllowGravity(false);
platform1.body.setFriction(0,0);
platform1.setDepth(1);
}
let platform2;
for(let j=1;j<20;j++){
    if(Math.random()<0.5)
    {
        platform2=this.physics.add.image(200,297+32*j+150,'Sdirt1').setDisplaySize(32,32);
    }
    else{
     platform2=this.physics.add.image(200,297+32*j+150,'Sdirt2').setDisplaySize(32,32);}
               platform2.body.setAllowGravity(false);
              // platform2.setVelocity(-speed,0);
               platform2.setOrigin(0);
               platform2.setDepth(1);
              
}
for(let i=1;i<29;i++){
for(let j=1;j<20;j++){
    
    if(Math.random()<0.05)
    {
        platform2=this.physics.add.image(200+32*i,297+32*j+150,'dirt1').setDisplaySize(32,32);
    }
    else{
     platform2=this.physics.add.image(200+32*i,297+32*j+150,'dirt2').setDisplaySize(32,32);}
               platform2.body.setAllowGravity(false);
            //   platform2.setVelocity(-speed,0);
               platform2.setOrigin(0);
               platform2.setDepth(1);
               
    }
}
for(let j=1;j<20;j++){
    if(Math.random()<0.5)
    {
        platform2=this.physics.add.image(200+29*32+32,297+32*j,'Sdirt1');
    }
    else{
     platform2=this.physics.add.image(200+29*32+32,297+32*j,'Sdirt2');}
               platform2.setScale(-2,2)
               platform2.body.setAllowGravity(false);
              // platform2.setVelocity(-speed,0);
               platform2.flipX;
               platform2.setOrigin(0);
               platform2.setDepth(1);
        
}
let logo = this.add.image(200,50,'logo').setOrigin(0);
logo.setScale(2,2);
logo.setDepth(1.5)
 let button=this.add.image(400,400,'button').setOrigin(0);
 button.setDepth(1.5);
 button.setInteractive();
 button.on('pointerup',()=>{
     this.scene.start('GAME');
     button.setAlpha(0.5);
 })
 button.on('pointerover',()=>{
     button.setAlpha(0.75);
 })
 button.on('pointerout',()=>{
    button.setAlpha(1);
})
 }
 update()
 {
  
  
 }
}