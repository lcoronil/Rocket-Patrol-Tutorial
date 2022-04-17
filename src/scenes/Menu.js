class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        // load audio
        this.load.audio('sfx_select', './assets/blip_select12.wav');
        this.load.audio('sparkle', './assets/sparkle.wav');
        this.load.audio('sfx_rocket', './assets/rocket_shot.wav');

        //load menu images
        this.load.image('sky', './assets/sky.png');

    }

    create() {

        // place sky bg
        this.sky = this.add.tileSprite(0, 0, 640, 480, 'sky').setOrigin(0, 0);

        // menu text config
        let menuConfig = {
            fontFamily: 'Ice Cream Grande',
            fontSize: '25px',
            color: '#AB73ED',
            stroke: '#895EDA',
            strokeThickness: 5,
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        //show menu text
        this.add.text(game.config.width/2, game.config.height - 150, 'Use ← → arrows to move & (SPACE) to fire', menuConfig).setOrigin(0.5);
        menuConfig.color = '#E26ECD';
        this.add.text(game.config.width/2, game.config.height - 100, 'Press ← for Easy or → for Hard', menuConfig).setOrigin(0.5);

        //define keys 
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }


    update() {


        // sky bg moving
        this.sky.tilePositionX -= 1;  

        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
          // easy mode
          game.settings = {
            spaceshipSpeed: 3,
            gameTimer: 60000    
          }
          this.sound.play('sfx_select');
          this.scene.start('playScene');    
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
          // hard mode
          game.settings = {
            spaceshipSpeed: 4,
            gameTimer: 4500    
          }
          this.sound.play('sfx_select');
          this.scene.start('playScene');    
        }
      }
}
