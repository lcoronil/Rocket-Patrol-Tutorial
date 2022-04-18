let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}

let game = new Phaser.Game(config);

//set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// reserve keyboard vars
let Spacebar, keyR, keyLEFT, keyRIGHT;

// Lee Coronilia, Rocket Patrol Modds, 4/18, took me roughly 10 hours
// points breakdown: 
// Redesign the game's artwork, UI, and sound to change its theme/aesthetic (to something other than sci-fi) (60)
// Create a new spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (20)
// Implement parallax scrolling (10)
// Create a new title screen (e.g., new artwork, typography, layout) (10)
// Display the time remaining (in seconds) on the screen (10)

// SFX Credit: 
// Kids cheering Sound Effect by instrumentalfx
// Sparkle sfx by mixkit
// Programming help by Eduardo Alcaraz (specifically the timer countdown and the 4th spaceship)

