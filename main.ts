namespace SpriteKind {
    export const Pizza = SpriteKind.create()
    export const Player1 = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (true) {
        pauseUntil(() => controller.A.isPressed())
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-0.5)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-0.5)
})
info.onLifeZero(function () {
    game.setGameOverMessage(true, "GAME OVER!")
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    projectile2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 2 2 2 . . . . . . . . . 
        . . . . 2 2 2 . . . . . . . . . 
        . . . . 2 2 2 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, sprites.create(img`
        ........................................
        ........................................
        ...............55555555555..............
        ...........55554444444444455............
        .........55444444444444444455...........
        ........554444444444444444445...........
        .......55444444444444444444445..........
        .......55422444444444222444445..........
        .......5444f244444442ff4444445..........
        .......5444f2244444225f444f445..........
        .......5444f5224442255f444f445..........
        .......5444f552244f555f44ff45...........
        .......5444f555f44fffff44ff45...........
        .......5444fffff444444444f445...........
        .......5444444444444444fff445...........
        ........544444444444fffff4445...........
        ........5444444ffffff111f4445...........
        .........544ffff1111111ff4455...........
        ..........544fff1111122f4445............
        ..........55444fff1222ff4445............
        ...........554444fffff44445.............
        .............5544444445555..............
        ..............555555555.................
        ........................................
        ........................................
        ........................................
        ........................................
        ........................................
        ........................................
        ........................................
        ........................................
        ........................................
        ........................................
        ........................................
        ........................................
        ........................................
        ........................................
        ........................................
        ........................................
        ........................................
        `, SpriteKind.Enemy), 50, 50)
    projectile = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 2 2 2 . . . . . . . . . 
        . . . . 2 2 2 . . . . . . . . . 
        . . . . 2 2 2 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    Burger.setPosition(randint(10, 160), randint(10, 120))
    mySprite.setStayInScreen(true)
    projectile2.setVelocity(82, 82)
    projectile.setVelocity(82, 82)
    projectile2.setBounceOnWall(true)
    projectile.setBounceOnWall(true)
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`transparency16`, function (sprite, location) {
	
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-0.5)
})
let projectile2: Sprite = null
let projectile: Sprite = null
let Burger: Sprite = null
let mySprite: Sprite = null
info.setLife(8)
mySprite = sprites.create(img`
    ........................................
    ........................................
    ...............eeeeeeee.................
    .............eeeeeeeeeee................
    ...........eeeeeeeeeeeeee...............
    ...........eeeeeeeeeeeeee...............
    ...........eee555555555ee...............
    ...........eee555555555ee...............
    ...........eee555555555ee...............
    ...........eee55e555e55ee...............
    ............ee555555555e................
    ..............55eeeee55.................
    ..............55efffe55.................
    ...............5eeeee5..................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    `, SpriteKind.Player)
let myEnemy = sprites.create(img`
    ........................................
    ........................................
    ...............55555555555..............
    ...........55554444444444455............
    .........55444444444444444455...........
    ........554444444444444444445...........
    .......55444444444444444444445..........
    .......55422444444444222444445..........
    .......5444f244444442ff4444445..........
    .......5444f2244444225f444f445..........
    .......5444f5224442255f444f445..........
    .......5444f552244f555f44ff45...........
    .......5444f555f44fffff44ff45...........
    .......5444fffff444444444f445...........
    .......5444444444444444fff445...........
    ........544444444444fffff4445...........
    ........5444444ffffff111f4445...........
    .........544ffff1111111ff4455...........
    ..........544fff1111122f4445............
    ..........55444fff1222ff4445............
    ...........554444fffff44445.............
    .............5544444445555..............
    ..............555555555.................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    `, SpriteKind.Enemy)
Burger = sprites.create(img`
    ...........ccccc66666...........
    ........ccc4444444444666........
    ......cc444444444bb4444466......
    .....cb4444bb4444b5b444444b.....
    ....eb4444b5b44444b44444444b....
    ...ebb44444b4444444444b444446...
    ..eb6bb444444444bb444b5b444446..
    ..e6bb5b44444444b5b444b44bb44e..
    .e66b4b4444444444b4444444b5b44e.
    .e6bb444444444444444444444bb44e.
    eb66b44444bb444444444444444444be
    eb66bb444b5b44444444bb44444444be
    fb666b444bb444444444b5b4444444bf
    fcb666b44444444444444bb444444bcf
    .fbb6666b44444444444444444444bf.
    .efbb66666bb4444444444444444bfe.
    .86fcbb66666bbb44444444444bcc688
    8772effcbbbbbbbbbbbbbbbbcfc22778
    87722222cccccccccccccccc22226678
    f866622222222222222222222276686f
    fef866677766667777776667777fffef
    fbff877768f86777777666776fffffbf
    fbeffeefffeff7766688effeeeefeb6f
    f6bfffeffeeeeeeeeeeeeefeeeeebb6e
    f66ddfffffeeeffeffeeeeeffeedb46e
    .c66ddd4effffffeeeeeffff4ddb46e.
    .fc6b4dddddddddddddddddddb444ee.
    ..ff6bb444444444444444444444ee..
    ....ffbbbb4444444444444444ee....
    ......ffebbbbbb44444444eee......
    .........fffffffcccccee.........
    ................................
    `, SpriteKind.Food)
projectile = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 2 2 2 . . . . . . . . . 
    . . . . 2 2 2 . . . . . . . . . 
    . . . . 2 2 2 . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
projectile2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 2 2 2 . . . . . . . . . 
    . . . . 2 2 2 . . . . . . . . . 
    . . . . 2 2 2 . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Projectile)
scene.setBackgroundColor(7)
controller.moveSprite(mySprite)
mySprite.setPosition(33, 66)
game.setGameOverEffect(true, effects.confetti)
Burger.setPosition(111, 82)
