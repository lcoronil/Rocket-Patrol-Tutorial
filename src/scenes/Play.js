class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload() {
        //load images/tile sprites
        this.load.image('cone', './assets/cone.png');
        this.load.image('spaceship', './assets/spaceship.png');
        this.load.image('starfield', './assets/starfield.png');
        this.load.image('icecream1', './assets/icecream1.png');
        this.load.image('icecream2', './assets/icecream2.png');
        this.load.image('icecream3', './assets/icecream3.png');
        this.load.image('chocolate', './assets/chocolate.png');



        //load background art
        this.load.image('sky', './assets/sky.png');
        this.load.image('mountains', './assets/mountains.png');
        this.load.image('floor', './assets/floor.png');

        // load spritesheet
        this.load.spritesheet('confetti', './assets/confetti.png', {frameWidth: 75, frameHeight: 70, startFrame: 0, endFrame: 8});
    }

    create() {

        //place tile sprite
        this.sky = this.add.tileSprite(0, 0, 640, 480, 'sky').setOrigin(0, 0);
        this.mountains = this.add.tileSprite(0, 0, 640, 480, 'mountains').setOrigin(0, 0);
        this.floor = this.add.tileSprite(0, 0, 640, 480, 'floor').setOrigin(0, 0);
    
        // white borders
        //this.add.rectangle(0, 0, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0, 0);
        //this.add.rectangle(0, game.config.height - borderUISize, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0, 0);
        //this.add.rectangle(0, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0, 0);
        //this.add.rectangle(game.config.width - borderUISize, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0, 0);

        //add rocket (p1)
        this.p1Rocket = new Rocket(this, game.config.width/2, game.config.height - 69,
        'cone').setOrigin(0, 0);      

        // add spaceships (x3)
        this.ship01 = new Spaceship(this, game.config.width + borderUISize*6, borderUISize*4, 'icecream3', 0, 30, game.settings.spaceshipSpeed+ 0.5).setOrigin(0, 0);
        this.ship02 = new Spaceship(this, game.config.width + borderUISize*3, borderUISize*5 + borderPadding*2, 'icecream2', 0, 20,game.settings.spaceshipSpeed+0.25).setOrigin(0, 0);
        this.ship03 = new Spaceship(this, game.config.width, borderUISize*6 + borderPadding*4, 'icecream1', 0, 10,game.settings.spaceshipSpeed).setOrigin(0, 0);   
        this.ship04 = new Spaceship(this, game.config.width + borderUISize * 9, borderUISize * 2.5, 'chocolate', 0, 100,game.settings.spaceshipSpeed + 2).setOrigin(0, 0);   

        //scale ship 04
        this.ship04.setScale(.8)


         // define keys
         Spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
         keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
         keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
         keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);  

         //animation config
         this.anims.create({
             key: 'confetti',
             frames: this.anims.generateFrameNumbers('confetti', { start: 0, end: 8, first: 0}),
             frameRate: 30
         });

         //initialize score
         this.p1Score = 0;

         //display score
         let scoreConfig = {
             fontFamily: 'Ice Cream Grande',
             fontSize: '28px',
             color: '#AB73ED',
             stroke: '#895EDA',
             strokeThickness: 6,
             align: 'left'
         }
        
         this.scoreLeft = this.add.text(borderUISize + borderPadding, borderUISize + borderPadding*2, this.p1Score, scoreConfig);
         //score text
         this.add.text(borderPadding, borderPadding, 'Score', scoreConfig);
    
         // GAME OVER flag
         this.gameOver = false; 

         // 60-second play clock

         scoreConfig.fixedWidth = 0;

         this.timerText = this.add.text(game.config.width/2, game.config.height/2, "").setColor("#AB73ED");
         //timer text
         this.add.text(game.config.width - borderPadding*12, borderPadding, 'Timer', scoreConfig);

         this.clock = this.time.delayedCall(game.settings.gameTimer, () => {             
             this.add.text(game.config.width/2, game.config.height/2, 'GAME OVER', scoreConfig).setOrigin(0.5);
             this.add.text(game.config.width/2, game.config.height/2 + 64, 'Press (R) to Restart',
             scoreConfig).setOrigin(0.5);
             this.gameOver = true;
         }, null, this);

         //this.timerText.setText(game.settings.gameTimer);

         //initialize timer
         this.p1Timer = Math.ceil(this.clock.getRemainingSeconds());

         //display timer
         this.timerRight = this.add.text(game.config.width - borderPadding*10, borderUISize + borderPadding*2, this.p1Timer, scoreConfig);
         
    }


    update() {

        this.p1Timer = Math.ceil(this.clock.getRemainingSeconds());
        //this.p1Timer = this.p1Timer - (this.time.now / 1000);
        //console.log(this.p1Timer);
        this.timerRight.text = this.p1Timer;


        // check key input for restart / menu
        if(this.gameOver && Phaser.Input.Keyboard.JustDown(keyR)) {
            this.scene.restart();
        }

<<<<<<< HEAD
<<<<<<< HEAD
        if(this.gameOver && Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            this.scene.start("menuScene");
        }

        this.sky.tilePositionX -= 1;
        this.mountains.tilePositionX -= 2;
        this.floor.tilePositionX -= 4;  // update the tile sprite
=======
=======
>>>>>>> parent of f75df79 (finalizing changes to move speed, changing things for easy and hard mode)
        this.starfield.tilePositionX -= 4;  // update the tile sprite
>>>>>>> parent of f75df79 (finalizing changes to move speed, changing things for easy and hard mode)
        
        if(!this.gameOver) {
            this.p1Rocket.update();             // update p1      
            this.ship01.update();               // update spaceship(x3)
            this.ship02.update();
            this.ship03.update();
            this.ship04.update();
        }


        // check collisions
        if(this.checkCollision(this.p1Rocket, this.ship04)) {
            this.p1Rocket.reset();
            this.shipExplode(this.ship04);
        }
        if(this.checkCollision(this.p1Rocket, this.ship03)) {
            this.p1Rocket.reset();
            this.shipExplode(this.ship03);
        }
        if (this.checkCollision(this.p1Rocket, this.ship02)) {
            this.p1Rocket.reset();
            this.shipExplode(this.ship02);
        }
        if (this.checkCollision(this.p1Rocket, this.ship01)) {
            this.p1Rocket.reset();
            this.shipExplode(this.ship01);
        }

    }


checkCollision(rocket, ship) {
    // simple AABB checking
    if (rocket.x < ship.x + ship.width &&
        rocket.x + rocket.width > ship.x &&
        rocket.y < ship.y + ship.height &&
        rocket.height + rocket.y > ship.y) {
            return true; // collsion happened
    } else {
            return false;// collision did not happen
    }
}

shipExplode(ship) {
    // temporarily hide ship
    //ship.alpha = 0;                         
    // create explosion sprite at ship's position
    let boom = this.add.sprite(ship.x, ship.y, 'explosion').setOrigin(0, 0);    
    ship.reset();

    boom.anims.play('confetti');             // play explode animation
    boom.on('animationcomplete', () => {    // callback after anim completes
        //ship.reset();                         // reset ship position
        //ship.alpha = 1;                       // make ship visible again
        boom.destroy();                       // remove explosion sprite
    });
    // score add and repaint
    this.p1Score += ship.points;
    this.scoreLeft.text = this.p1Score; 

    if(ship.texture.key=='chocolate'){
        this.sound.play('Kids_Cheering'); 
    } 
    else{
        this.sound.play('explosion');
    }
  }
}