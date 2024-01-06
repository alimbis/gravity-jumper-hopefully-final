def StartLevel():
    global Grounded
    Grounded = 0
    if Level == 1:
        tiles.set_current_tilemap(tilemap("""
            level1
        """))
        tiles.place_on_random_tile(mySprite, assets.tile("""
            myTile4
        """))
    if Level == 2:
        tiles.set_current_tilemap(tilemap("""
            level5
        """))
        tiles.place_on_random_tile(mySprite, assets.tile("""
            myTile4
        """))
    if Level == 3:
        tiles.set_current_tilemap(tilemap("""
            level8
        """))
        tiles.place_on_random_tile(mySprite, assets.tile("""
            myTile4
        """))
    if Level == 4:
        tiles.set_current_tilemap(tilemap("""
            level13
        """))
        tiles.place_on_random_tile(mySprite, assets.tile("""
            myTile4
        """))
    if Level == 5:
        game.over(True, effects.dissolve)
    mySprite.vy = 0

def on_overlap_tile(sprite, location):
    global Level
    Level += 1
    StartLevel()
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile6
    """),
    on_overlap_tile)

def on_a_pressed():
    global Grounded
    if Grounded == 1:
        mySprite.vy = -200
        pause(100)
        Grounded = 0
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_overlap_tile2(sprite2, location2):
    global Grounded
    Grounded = 0
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile4
    """),
    on_overlap_tile2)

def on_overlap_tile3(sprite3, location3):
    global Grounded
    Grounded = 0
    StartLevel()
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile3
    """),
    on_overlap_tile3)

def on_overlap_tile4(sprite4, location4):
    global Grounded
    Grounded = 1
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile2
    """),
    on_overlap_tile4)

def on_overlap_tile5(sprite5, location5):
    global Coins
    Coins += 1
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile5
    """),
    on_overlap_tile5)

Coins = 0
Grounded = 0
mySprite: Sprite = None
Level = 0
Level = 1
mySprite = sprites.create(img("""
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
    """),
    SpriteKind.player)
controller.move_sprite(mySprite, 100, 0)
scene.camera_follow_sprite(mySprite)
StartLevel()

def on_on_update():
    mySprite.vy += 10
game.on_update(on_on_update)
