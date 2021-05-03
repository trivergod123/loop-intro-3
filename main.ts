let boomerang = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . 4 4 . . . . . . . 
    . . . . . . . 4 5 4 . . . . . . 
    . . . . . . . . 4 5 4 . . . . . 
    . . . . . . . . . 4 5 4 . . . . 
    . . . . . . . . . 4 5 4 . . . . 
    . . . . . . . . 4 5 5 4 . . . . 
    . . . . . . . . 4 5 4 . . . . . 
    . . . . . . . 4 5 4 . . . . . . 
    . . . . . . . . 4 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
for (let index = 0; index < 10; index++) {
    boomerang.x += 5
    pause(200)
}
for (let index = 0; index < 10; index++) {
    boomerang.image.flipX()
    boomerang.x += -5
    pause(200)
}
