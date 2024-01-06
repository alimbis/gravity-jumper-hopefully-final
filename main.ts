namespace SpriteKind {
    export const coin = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    Gravity = 1
})
function StartLevel () {
    Gravity = 1
    Grounded = 0
    if (Level == 1) {
        tiles.setCurrentTilemap(tilemap`level1`)
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile4`)
    }
    if (Level == 2) {
        tiles.setCurrentTilemap(tilemap`level5`)
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile4`)
    }
    if (Level == 3) {
        tiles.setCurrentTilemap(tilemap`level8`)
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile4`)
    }
    if (Level == 4) {
        tiles.setCurrentTilemap(tilemap`level13`)
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile4`)
    }
    if (Level == 5) {
        tiles.setCurrentTilemap(tilemap`level15`)
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile4`)
        mySprite.setImage(img`
            f f f f f f f f 
            f 2 2 2 4 4 4 f 
            f 2 2 2 4 4 4 f 
            f 2 2 2 4 4 4 f 
            f 2 2 2 4 4 4 f 
            f 2 2 2 4 4 4 f 
            f 2 2 2 4 4 4 f 
            f f f f f f f f 
            `)
    }
    if (Level == 6) {
        mySprite.setImage(img`
            f f f f f f f f f f f f f f f f 
            f 2 2 2 2 2 2 2 4 4 4 4 4 4 4 f 
            f 2 2 2 2 2 2 2 4 4 4 4 4 4 4 f 
            f 2 2 2 2 2 2 2 4 4 4 4 4 4 4 f 
            f 2 2 2 2 2 2 2 4 4 4 4 4 4 4 f 
            f 2 2 2 2 2 2 2 4 4 4 4 4 4 4 f 
            f 2 2 2 2 2 2 2 4 4 4 4 4 4 4 f 
            f 2 2 2 2 2 2 2 4 4 4 4 4 4 4 f 
            f 2 2 2 2 2 2 2 4 4 4 4 4 4 4 f 
            f 2 2 2 2 2 2 2 4 4 4 4 4 4 4 f 
            f 2 2 2 2 2 2 2 4 4 4 4 4 4 4 f 
            f 2 2 2 2 2 2 2 4 4 4 4 4 4 4 f 
            f 2 2 2 2 2 2 2 4 4 4 4 4 4 4 f 
            f 2 2 2 2 2 2 2 4 4 4 4 4 4 4 f 
            f 2 2 2 2 2 2 2 4 4 4 4 4 4 4 f 
            f f f f f f f f f f f f f f f f 
            `)
        tiles.setCurrentTilemap(tilemap`level17`)
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile4`)
    }
    if (Level == 7) {
        tiles.setCurrentTilemap(tilemap`level20`)
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile4`)
    }
    if (Level == 8) {
        tiles.setCurrentTilemap(tilemap`level21`)
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile4`)
    }
    if (Level == 9) {
        tiles.setCurrentTilemap(tilemap`level22`)
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile4`)
    }
    if (Level == 10) {
        tiles.setCurrentTilemap(tilemap`level25`)
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile4`)
    }
    if (Level == 11) {
        tiles.setCurrentTilemap(tilemap`level27`)
        egg = 1
    }
    mySprite.vy = 0
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    Level += 1
    StartLevel()
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Grounded == 1) {
        mySprite.vy = -200
        pause(100)
        Grounded = 0
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile13`, function (sprite, location) {
    Grounded = 0
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Grounded == 1) {
        mySprite.vy = -200
        pause(100)
        Grounded = 0
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    Grounded = 0
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    Grounded = 0
    StartLevel()
})
controller.combos.attachCombo("r", function () {
    if (Level != 11) {
        egg = 0
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    Grounded = 1
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    Gravity = 0.002
    mySprite.vy = 0
})
controller.combos.attachCombo("l", function () {
    if (Level != 11) {
        egg = 0
    }
})
let Grounded = 0
let Gravity = 0
let mySprite: Sprite = null
let Level = 0
let egg = 0
egg = 69
Level = 1
mySprite = sprites.create(img`
    f f f f f f f f f f f f f f f f 
    f 2 2 2 2 2 2 2 4 4 4 4 4 4 4 f 
    f 2 2 2 2 2 2 2 4 4 4 4 4 4 4 f 
    f 2 2 2 2 2 2 2 4 4 4 4 4 4 4 f 
    f 2 2 2 2 2 2 2 4 4 4 4 4 4 4 f 
    f 2 2 2 2 2 2 2 4 4 4 4 4 4 4 f 
    f 2 2 2 2 2 2 2 4 4 4 4 4 4 4 f 
    f 2 2 2 2 2 2 2 4 4 4 4 4 4 4 f 
    f 2 2 2 2 2 2 2 4 4 4 4 4 4 4 f 
    f 2 2 2 2 2 2 2 4 4 4 4 4 4 4 f 
    f 2 2 2 2 2 2 2 4 4 4 4 4 4 4 f 
    f 2 2 2 2 2 2 2 4 4 4 4 4 4 4 f 
    f 2 2 2 2 2 2 2 4 4 4 4 4 4 4 f 
    f 2 2 2 2 2 2 2 4 4 4 4 4 4 4 f 
    f 2 2 2 2 2 2 2 4 4 4 4 4 4 4 f 
    f f f f f f f f f f f f f f f f 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
scene.cameraFollowSprite(mySprite)
StartLevel()
game.onUpdate(function () {
    mySprite.vy += Gravity * 10
})
game.onUpdateInterval(100, function () {
    if (egg == 0) {
        info.changeScoreBy(1)
    }
})
