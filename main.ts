namespace SpriteKind {
    export const Npc = SpriteKind.create()
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . c c c . . . . . . . 
        . . . . . . c 9 b c . . . . . . 
        . . . . c c c 9 9 c c c . . . . 
        . . c c c c 9 9 9 9 c b c c . . 
        . c b b 9 b 9 9 9 9 b 9 b b c . 
        . c b 9 9 b b 9 9 b b 9 9 b c . 
        . . c 9 9 9 b b b b 9 9 9 f . . 
        . . f f 9 9 9 9 9 9 9 9 f f . . 
        . . f f f b f e e f b f f f . . 
        . . f f f 1 8 b b 8 1 f f f . . 
        . . . f f b b b b b b f f . . . 
        . . . e e f e e e e f e e . . . 
        . . e b f b 9 b b 9 b c b e . . 
        . . e e f 9 9 9 9 9 9 f e e . . 
        . . . . c b 9 9 9 9 b c . . . . 
        . . . . . f f f f f f . . . . . 
        `)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . c c c . . . . . . . 
        . . . . . . c 9 b c . . . . . . 
        . . . . c c c 9 9 c c c . . . . 
        . . c c c c 9 9 9 9 c b c c . . 
        . c b b 9 b 9 9 9 9 b 9 b b c . 
        . c b 9 9 b b 9 9 b b 9 9 b c . 
        . . c 9 9 9 b b b b 9 9 9 f . . 
        . . f f 9 9 9 9 9 9 9 9 f f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . . f f f f f f f f f f . . . 
        . . . e e f f f f f f f e . . . 
        . . e b f b 9 b b 9 b c b e . . 
        . . e e f 9 9 9 9 9 9 f e e . . 
        . . . . c b 9 9 9 9 b c . . . . 
        . . . . . f f f f f f . . . . . 
        `)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . c c . . . . . . . 
        . . . . . . . c 9 c . . . . . . 
        . . . . c c c 9 9 9 c c . . . . 
        . . c c b c 9 9 9 9 c c c c . . 
        . c b b 9 b 9 9 9 9 b 9 b b c . 
        . c b 9 9 b b 9 9 b b 9 9 b c . 
        . . f 9 9 9 b b b b 9 9 9 c . . 
        . . f f 9 9 9 9 9 9 9 9 f . . . 
        . . f f e e b f e e e f . . . . 
        . . f f 6 b 1 8 b b e f . . . . 
        . . . f f b b b b b b f . . . . 
        . . . e e f e e e e f . . . . . 
        . . . e b b e b b 9 f . . . . . 
        . . . e b b e 9 9 9 9 f . . . . 
        . . . . e e 9 9 9 9 b c . . . . 
        . . . . . f f f f f f . . . . . 
        `)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . c c . . . . . . . 
        . . . . . . c 9 c . . . . . . . 
        . . . . c c 9 9 9 c c c . . . . 
        . . c c c c 9 9 9 9 c b c c . . 
        . c b b 9 b 9 9 9 9 b 9 b b c . 
        . c b 9 9 b b 9 9 b b 9 9 b c . 
        . . c 9 9 9 b b b b 9 9 9 f . . 
        . . . f 9 9 9 9 9 9 9 9 f f . . 
        . . . . f e e e f b e e f f . . 
        . . . . f e b b 8 1 b 6 f f . . 
        . . . . f b b b b b b f f . . . 
        . . . . . f e e e e f e e . . . 
        . . . . . f 9 b b e b b e . . . 
        . . . . f 9 9 9 9 e b b e . . . 
        . . . . c b 9 9 9 9 e e . . . . 
        . . . . . f f f f f f . . . . . 
        `)
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . c c c . . . . . . . 
    . . . . . . c 9 b c . . . . . . 
    . . . . c c c 9 9 c c c . . . . 
    . . c c c c 9 9 9 9 c b c c . . 
    . c b b 9 b 9 9 9 9 b 9 b b c . 
    . c b 9 9 b b 9 9 b b 9 9 b c . 
    . . c 9 9 9 b b b b 9 9 9 f . . 
    . . f f 9 9 9 9 9 9 9 9 f f . . 
    . . f f f b f e e f b f f f . . 
    . . f f f 1 8 b b 8 1 f f f . . 
    . . . f f b b b b b b f f . . . 
    . . . e e f e e e e f e e . . . 
    . . e b f b 9 b b 9 b c b e . . 
    . . e e f 9 9 9 9 9 9 f e e . . 
    . . . . c b 9 9 9 9 b c . . . . 
    . . . . . f f f f f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setPosition(27, 48)
scene.cameraFollowSprite(mySprite)
tiles.setCurrentTilemap(tilemap`niveau1`)
