// Rocket prefab
class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);  //add to existing, displayList, updateList
        this.isFiring = false;     // track rocket's firing status
        this.moveSpeed = 4;        // pixels per frame
        this.sfxRocket = scene.sound.add('sparkle') // add rocket sfx
        this.height /= 10;
    }

    update() {
        // left/right movement 
        if(!this.isFiring) {
            if(keyLEFT.isDown && this.x >= 0) {
                this.x -= this.moveSpeed;
            } else if (keyRIGHT.isDown && this.x <= game.config.width- this.width)
                this.x += this.moveSpeed;
        }
        
    // fire button 
    if(Phaser.Input.Keyboard.JustDown(Spacebar) && !this.isFiring) {
        this.isFiring = true;
        this.sfxRocket.play(); //play sfx
    }

    // if fired, move up
    if(this.isFiring && this.y <= game.config.height) {
        this.y -= this.moveSpeed + 1;
    }

    // reset on miss
    if(this.y <= -this.height) {
        this.reset();
    }
  }

  // reset rocket to "ground"
  reset() {
      this.isFiring = false;
      this.y = game.config.height  - this.width;
  }

}