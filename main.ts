namespace SpriteKind {
    export const cloths = SpriteKind.create()
    export const sparpsrts = SpriteKind.create()
    export const oxen = SpriteKind.create()
    export const monny = SpriteKind.create()
    export const hi = SpriteKind.create()
    export const tile = SpriteKind.create()
    export const win = SpriteKind.create()
    export const s = SpriteKind.create()
    export const brown = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    if (Math.percentChance(60)) {
        game.splash("you survived")
        pause(1000)
    } else {
        game.splash("you died by drowning")
        game.over(false)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    if (Math.percentChance(80)) {
        game.splash("you survived the hike")
        pause(10000)
    } else {
        game.splash("you died by falling")
        game.over(false)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    game.over(true)
})
function menu () {
    game.splash(Shop_items)
    Want = game.askForString("What do you want from the menu?")
    for (let index = 0; index < Shop_items.length; index++) {
        if (Want == Shop_items[counter]) {
            return 0
        }
        counter += 1
    }
    menu()
    return 0
}
info.onCountdownEnd(function () {
    info.changeScoreBy(1)
})
function Shop_buying () {
    Shop_items = [
    "food",
    "cloths",
    "oxen",
    "bullets",
    "spareparts"
    ]
    menu()
    for (let index = 0; index < Shop_items.length; index++) {
        if (Want == Shop_items[counter]) {
            text_list[text_list.length] = "" + Shop_items[counter] + " " + convertToText(game.askForNumber("How much", 4))
            if (game.ask("Anything else?")) {
                Shop_buying()
            } else {
                game.splash("thanks")
            }
        }
        counter += 1
    }
}
let Want = ""
let Shop_items: string[] = []
let text_list: string[] = []
let counter = 0
let length = 100
let tile_map = sprites.create(img`
    f 
    `, SpriteKind.tile)
tiles.setCurrentTilemap(tilemap`level2`)
counter = 0
let how_much_monny = sprites.create(img`
    . 
    `, SpriteKind.hi)
let htrhy4rthyn = sprites.create(img`
    . 
    `, SpriteKind.monny)
let tebethbgre = sprites.create(img`
    . 
    `, SpriteKind.Food)
let grbetybet = sprites.create(img`
    . 
    `, SpriteKind.Projectile)
let gbegbebre = sprites.create(img`
    . 
    `, SpriteKind.cloths)
let trbrthnf = sprites.create(img`
    . 
    `, SpriteKind.sparpsrts)
let mySprite2 = sprites.create(img`
    . 
    `, SpriteKind.oxen)
text_list = []
blockSettings.writeNumber("password", 111111)
if (game.askForNumber("What is the password") == blockSettings.readNumber("password")) {
    game.splash("Right password")
} else {
    game.splash("wrong password")
}
let mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f e e f f f . . . . 
    . . . f f f e e e e f f f . . . 
    . . f f f 4 4 4 4 4 4 f f f . . 
    . . f f 4 e e e e e e 4 f f . . 
    . . f 4 e f f f f f f e 4 f . . 
    . . f f f f 4 4 4 4 f f f f . . 
    . f f 4 f b f 4 4 f b f 4 f f . 
    . f 4 4 4 1 f d d f 1 4 4 4 f . 
    . . f 4 4 d d d d d d 4 4 f . . 
    . . . f 4 4 4 4 4 4 4 4 f . . . 
    . . 4 4 f e e e e e e f 4 4 . . 
    . . 4 d f e e e e e e f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.s)
mySprite.sayText("what do u need for you jouney")
let my_spright_2 = sprites.create(img`
    . . . . f f f f . . . . . 
    . . f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f f f c c f f f c . 
    f f f c f f f f f f f c . 
    c c c f f f e e f f c c . 
    f f f f f e e f f c c f . 
    f f f b f e e f b f f f . 
    . f 4 1 f 4 4 f 1 4 f . . 
    . f e 4 4 4 4 4 4 e f . . 
    . f f f 4 4 4 4 f f f . . 
    4 4 f e e e e e e f 4 4 . 
    4 1 f e e e e e e f 1 4 . 
    4 4 f 5 5 5 5 5 5 f 4 4 . 
    . . . e e e e e e . . . . 
    . . . e e . . e e . . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(my_spright_2)
my_spright_2.setPosition(1600, 90)
let amounut_spent = 1800
my_spright_2.sayText(amounut_spent)
my_spright_2.follow(tile_map, 10)
game.setDialogFrame(img`
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    `)
mySprite.destroy()
Shop_buying()
my_spright_2.sayText(text_list.indexOf("food" + " " + game.askForNumber("how much food did you buy", 4)))
my_spright_2.sayText(text_list.indexOf("cloths" + " " + game.askForNumber("how much cloths did you buy", 3)))
my_spright_2.sayText(text_list.indexOf("oxen" + " " + game.askForNumber("how much oxen did you buy", 2)))
my_spright_2.sayText(text_list.indexOf("bullets" + " " + game.askForNumber("how much bullets did you buy", 2)))
my_spright_2.sayText(text_list.indexOf("spareparts" + " " + game.askForNumber("how much spareparts did you buy", 1)))
my_spright_2.sayText(text_list)
let win = sprites.create(img`
    8 
    `, SpriteKind.win)
let mountain = sprites.create(img`
    e 
    `, SpriteKind.brown)
