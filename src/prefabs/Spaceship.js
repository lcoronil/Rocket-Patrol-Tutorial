//Spaceship prefab
class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue, speed) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);  // add to existing scene
        this.points = pointValue;  // store pointValue
<<<<<<< HEAD
        this.moveSpeed = speed; // pixels per frame
=======
        this.moveSpeed = 3; // pixels per frame
>>>>>>> parent of f75df79 (finalizing changes to move speed, changing things for easy and hard mode)
    }

    update() {
        // move spaceship left
        this.x -= this.moveSpeed;
        // wrap around from left edge to right edge
        if(this.x <= 0 - this.width) {
            this.x = game.config.width;
        }
    }

    // position reset 
    reset() {
        this.x = game.config.width;
    }

}