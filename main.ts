sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    otherSprite.destroy(effects.fire, 100)
    info.changeLifeBy(1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    dart = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . 5 5 5 . . . . . . . . . . . 
. . . . 5 5 . . . . . 5 . . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . . . 5 5 . . . . . 5 . . . . 
. . 5 5 . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, spacePlane, 200, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
let bogey: Sprite = null
let dart: Sprite = null
let spacePlane: Sprite = null
spacePlane = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. 1 . . . . . . . . . . . . . . 
. 1 . . . . . . . . . . . . . . 
. 1 1 1 1 . . . . . . . . . . . 
. 1 . . . 1 1 1 1 . . . . . . . 
. 7 7 7 7 7 7 7 7 7 7 7 7 2 . . 
. 7 9 9 9 9 9 9 9 9 9 9 7 2 2 . 
. 7 9 9 9 9 9 9 9 9 9 9 7 2 2 . 
. 7 7 7 7 7 7 7 7 7 7 7 7 2 . . 
. 1 . . . 1 1 1 1 . . . . . . . 
. 1 1 1 1 . . . . . . . . . . . 
. 1 . . . . . . . . . . . . . . 
. 1 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
spacePlane.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(3)
controller.moveSprite(spacePlane, 200, 200)
game.onUpdateInterval(500, function () {
    bogey = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . 7 7 . . . 7 7 . . . 7 7 . . 
. . . 7 7 . . 7 7 . . 7 . . . . 
. . . . 7 7 7 7 7 7 7 7 . . . . 
. . . . . 7 . . . . 7 . . . . . 
. . . . . 7 . . . . 7 . . . . . 
. . . . 7 7 7 7 7 7 7 7 . . . . 
. . . . 7 . . . . . . 7 . . . . 
. . . . 7 . . . . . . 7 . . . . 
. . . . 7 . . . . . . 7 . . . . 
. . 7 7 7 7 . . . . 7 7 7 7 . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    bogey.setVelocity(-100, 0)
    bogey.setPosition(180, Math.randomRange(8, 112))
})
