
let wave1,wave2;
let gv=0;
let me;
let refresh;
let retry,gameover,menu;
 class sceneA extends Phaser.Scene{
    constructor(){
        super({key:'GAME'})
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
this.load.spritesheet('boy','./assets/run.png',{frameWidth:32,frameHeight:64});
this.load.spritesheet('jump','./assets/jump.png',{frameWidth:32,frameHeight:64});
this.load.spritesheet('fall','./assets/fall.png',{frameWidth:31,frameHeight:48});
this.load.image('fauna','./assets/fauna.png');
this.load.image('gameover','./assets/gameover.png');
this.load.image('retry','./assets/retry.png');
this.load.image('menu','./assets/menu.png');
}
create(){
    gv=0;
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
    this.bg_0=this.add.tileSprite(0,450,game.config.width,160,'bg_5').setOrigin(0);
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
    this.bg_5.setAlpha(0.5);
   //let sky= this.add.image(-350,-100,'sky').setOrigin(0);
   //sky.setScale(1.5,2);
   wave1= this.physics.add.image(-1400,400,'wave1').setOrigin(0);
  wave1.setScale(1,1);
  wave1.body.setAllowGravity(false);
  wave1.setDepth(1.5);
  wave1.setAlpha(0.75);
   wave2= this.physics.add.image(-1500,-350,'wave2').setOrigin(0);
  wave2.setScale(3,3);
  wave2.body.setAllowGravity(false);
  wave2.setDepth(1.5);
  wave2.setAlpha(0.75);
   player=this.physics.add.sprite(100,200,'boy');
player.setVelocityX(0);
player.setBounce(0);
player.setDepth(1.2);
this.cameras.main.setSize(800, 600);
for(let i=0;i<10;i++)
{
  
 let platform1=this.physics.add.image(200+96*i,300,'platform').setDisplaySize(96,32);
 platform1.setOrigin(0);
platform1.setImmovable(true);
platform1.setVelocity(-speed,0);
platform1.body.setAllowGravity(false);
platform1.body.setFriction(0,0);
platform1.setDepth(1);
this.physics.add.collider(player,platform1);
}
let platform2;
for(let j=1;j<20;j++){
    if(Math.random()<0.5)
    {
        platform2=this.physics.add.image(200,297+32*j,'Sdirt1').setDisplaySize(32,32);
    }
    else{
     platform2=this.physics.add.image(200,297+32*j,'Sdirt2').setDisplaySize(32,32);}
               platform2.body.setAllowGravity(false);
               platform2.setVelocity(-speed,0);
               platform2.setOrigin(0);
               platform2.setDepth(1);
               //platform2.setAlpha(0.75);
               setTimeout(deleteHere,4000,platform2);
}
for(let i=1;i<29;i++){
for(let j=1;j<20;j++){
    
    if(Math.random()<0.05)
    {
        platform2=this.physics.add.image(200+32*i,297+32*j,'dirt1').setDisplaySize(32,32);
    }
    else{
     platform2=this.physics.add.image(200+32*i,297+32*j,'dirt2').setDisplaySize(32,32);}
               platform2.body.setAllowGravity(false);
               platform2.setVelocity(-speed,0);
               platform2.setOrigin(0);
               platform2.setDepth(1);
               //platform2.setAlpha(0.75);
               setTimeout(deleteHere,4000,platform2);
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
               platform2.setVelocity(-speed,0);
               platform2.flipX;
               platform2.setOrigin(0);
               platform2.setDepth(1);
               //platform2.setAlpha(0.75);
               setTimeout(deleteHere,4000,platform2);
}
 me=this;
scoreText=this.add.text(16,16,'score:0',{ fontSize: '32px', fill: 'RGB(255,255,255)'});
scoreText.setScrollFactor(0,0);
scoreText.setDepth(1.2);
refresh=setInterval(platforms,1000000/ speed)
    function platforms(){
    let ran=300+100*Math.random();
    let cliff=Math.ceil(4+4*Math.random());
    let string1;
    let count=0;
    //Math.random()>0.5?string='block1':string='block4';
         for(let i=0;i<cliff*3;i++){
            let str;
         if(!(i%3)){
            if(Math.random()>0.9&&(!i==0)){
                let house=me.physics.add.image(800+96*i/3+10,ran-70,'house');
                house.setDisplaySize(146,146);
                house.body.setAllowGravity(false);
                house.setVelocity(-speed,0);
                house.setDepth(1);
                setTimeout(deleteHere,4000,house);
            }
             if(Math.random()>0.5&&(!i==0)){
                 let tree=me.physics.add.image(800+96*i/3+10,ran-70,'tree');
                 tree.body.setAllowGravity(false);
                 tree.setVelocity(-speed,0);
                 Math.random()<0.5?tree.setDepth(1.1):tree.setDepth(1.3);
                 setTimeout(deleteHere,4000,tree);
             }
            
             let platform;
                if(Math.random()>0.03){
                   platform=me.physics.add.image(800+96*i/3,ran,'platform').setOrigin(0);
                   string1='notfauna';
                        }
                else{
                   console.log('in');
                   platform=me.physics.add.image(800+96*i/3,ran,'platform').setOrigin(0);
                   platform.setAlpha(1);//lol just opacity
                   string1='fauna';
                    let plat=me.physics.add.image(800+96*i/3,ran-28,'fauna').setOrigin(0);
                   plat.setVelocity(-speed,0);
                   plat.body.setAllowGravity(false);
                   plat.setDepth(1);
                   setTimeout(deleteHere,4000,plat);
                   }
           platform.setDisplaySize(96,32);
           platform.setImmovable(true);
           platform.setDepth(1);
           platform.setVelocity(-speed,0);
           string1=='fauna'?platform.body.setFriction(1, 1):platform.body.setFriction(0, 0);
           //platform.setScale(1+1*Math.random(),1);
           platform.body.setAllowGravity(false);
           me.physics.add.collider(player,platform);
           setTimeout(deleteHere,4000,platform);  }
         (i==0||i==cliff*3-1)?str='Sdirt':str='dirt';
         
           for(let j=1;j<20;j++){
               let num;
               Math.random()<0.05?num='1':num='2';
               let platformBackground;
               if(str=='Sdirt')
               platformBackground=me.physics.add.image(800+32*i,ran+j*32-5,str+`${Math.ceil(Math.random()*2)}`).setOrigin(0);
               else
               platformBackground=me.physics.add.image(800+32*i,ran+j*32-5,str+num).setOrigin(0);
               platformBackground.setDisplaySize(32,32);
               platformBackground.body.setAllowGravity(false);
               platformBackground.setVelocity(-speed,0);
               platformBackground.setAlpha(1);
               platformBackground.setDepth(1);
               if(i==0){
                me.physics.add.collider(player,platformBackground);
                platformBackground.setImmovable(true);
            }
               setTimeout(deleteHere,4000,platformBackground);
           }
           
    }
    score+=10;
    scoreText.setText('score:'+score);
}
function deleteHere(obj){
    obj.destroy();
}
this.cameras.main.startFollow(player);
this.anims.create({
    key:'run',
    frames:this.anims.generateFrameNumbers('boy',{start:1,end:6}),
    frameRate:10,
    repeat:-1
});
this.anims.create({
    key:'up',
    frames:this.anims.generateFrameNumbers('jump',{start:1,end:3}),
    frameRate:10,
    repeat:-1
});
this.anims.create({
    key:'down',
    frames:this.anims.generateFrameNumbers('fall',{start:1,end:3}),
    frameRate:10,
    repeat:-1
});
cursors=this.input.keyboard.createCursorKeys();

pointer=this.input.activePointer;
}
update(){
  // console.log(player.body.velocity.x);
 //  this.bg_1.setScrollFactor(0);
 this.bg_1.tilePositionX+=0.1*(600+player.x)/600 ;
  this.bg_2.tilePositionX+=0.7*(600+player.x)/600;
  this.bg_3.tilePositionX+=(600+player.x)/600 ;
  this.bg_4.tilePositionX+=2*(600+player.x)/600 ;
  this.bg_7.tilePositionX-=2 ;
  this.bg_6.tilePositionX-=1;
  this.bg_5.tilePositionX-=10 ;
  this.bg_0.tilePositionX-=6;
  if(player.body.touching.down){
      player.anims.play('run',true);
  }
  else if(player.body.velocity.y<0)
  {
      player.anims.play('up',true);
  }
  else if(player.body.velocity.y>0){
  // player.anims.play('down',true);
  }
if((cursors.up.isDown||pointer.isDown)&&player.body.touching.down){
 player.setVelocityY(-250);

}
itr++;
if(player.body.touching.down){
    itr=0;
    doubleJump=1;
}
if(itr>20&&(cursors.up.isDown||pointer.isDown)&&(!player.body.touching.down)&&(doubleJump==1)){
  player.setVelocityY(-250);
  doubleJump=0;
}
if(player.x<100){
    player.setVelocityX(30);
}
else{
    player.setVelocityX(0);
}
if(player.y>600||player.x<-600){
    player.setAlpha(0);
   this.physics.pause();
  scoreText.visible=false;
  if(gv==0){
    gameover=this.add.image(player.x,player.y-100,'gameover');
    gameover.setDepth(1.5);
    retry=this.add.image(player.x-100,player.y+100,'retry');
    retry.setDepth(1.5);
    menu=this.add.image(player.x+100,player.y+100,'menu')
    menu.setDepth(1.5);
    gv=1;
    if(gv==1){
        //
        score=0
        leaderboard(score);
        console.log("SCORE"+score);
        score=0;
        console.log("SCORE"+score);
        retry.setInteractive();
     retry.on('pointerup',()=>{
         retry.setAlpha(0.5);
         clearInterval(refresh);
         this.scene.stop('GAME');
         this.scene.start('GAME');
     })
     retry.on('pointerover',()=>{
         retry.setAlpha(0.75);
     })
     retry.on('pointerout',()=>{
        retry.setAlpha(1);
    })

    menu.setInteractive();
    menu.on('pointerup',()=>{
        menu.setAlpha(0.5);
        clearInterval(refresh);
        this.scene.stop('GAME');
        this.scene.start('MainMenu');
    })
    menu.on('pointerover',()=>{
        menu.setAlpha(0.75);
    })
    menu.on('pointerout',()=>{
       menu.setAlpha(1);
   })
}
   }
    wave1.setVelocityX(100);
    wave2.setVelocityX(100);
}
console.log(player.x);
}}
