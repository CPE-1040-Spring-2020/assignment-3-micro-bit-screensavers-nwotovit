//core is the alseep/awake. True is Screensavers. False is "off"
let core: boolean = true
let changescreen: Gesture = Gesture.Shake
//button pressed functions
input.onButtonPressed(Button.A, function () {
    core = true
})
input.onButtonPressed(Button.B, function () {
    core = false
})
//Gesture functions
input.onGesture(Gesture.TiltLeft, function () {
    changescreen = Gesture.TiltLeft
})
input.onGesture(Gesture.TiltRight, function () {
    changescreen = Gesture.TiltRight
})
input.onGesture(Gesture.LogoDown, function () {
    changescreen = Gesture.LogoDown
})
input.onGesture(Gesture.LogoUp, function () {
    changescreen = Gesture.LogoUp
})
input.onGesture(Gesture.Shake, function () {
    changescreen = Gesture.Shake
})
let list = [spiral, dice, wave, snake, turtle] //screensaver switching controls
let changeSS = [Gesture.TiltLeft, Gesture.TiltRight, Gesture.LogoDown, Gesture.LogoUp,
Gesture.Shake]
basic.forever(function () {
    if (core) {
        list[changeSS.indexOf(changescreen)]()
    } else {
        basic.showString("PRESS A BUTTON!")
    }
})
//Spiral Screensaver: Plotting
function spiral() {
    led.plot(0, 0); basic.pause(70); led.plot(1, 0); basic.pause(70); led.plot(2, 0); basic.pause(70)
    led.plot(3, 0); basic.pause(70); led.plot(4, 0); basic.pause(70)
    led.plot(4, 1); basic.pause(70); led.plot(4, 2); basic.pause(70); led.plot(4, 3); basic.pause(70)
    led.plot(4, 4); basic.pause(70);
    led.plot(3, 4); basic.pause(70); led.plot(2, 4); basic.pause(70); led.plot(1, 4); basic.pause(70)
    led.plot(0, 4); basic.pause(70);
    led.plot(0, 3); basic.pause(70); led.plot(0, 2); basic.pause(70); led.plot(0, 1); basic.pause(70)
    led.plot(1, 1); basic.pause(70); led.plot(2, 1); basic.pause(70); led.plot(3, 1); basic.pause(70)
    led.plot(3, 2); basic.pause(70); led.plot(3, 3); basic.pause(70)
    led.plot(2, 3); basic.pause(70); led.plot(1, 3); basic.pause(70)
    led.plot(1, 2); basic.pause(70); led.plot(2, 2); basic.pause(500)
    //Unplotting Spiral
    led.unplot(2, 2); basic.pause(70); led.unplot(3, 2); basic.pause(70); led.unplot(3, 1); basic.pause(70)
    led.unplot(2, 1); basic.pause(70); led.unplot(1, 1); basic.pause(70); led.unplot(1, 2); basic.pause(70)
    led.unplot(1, 3); basic.pause(70); led.unplot(2, 3); basic.pause(70); led.unplot(3, 3); basic.pause(70)
    led.unplot(4, 3); basic.pause(70); led.unplot(4, 2); basic.pause(70); led.unplot(4, 1); basic.pause(70)
    led.unplot(4, 0); basic.pause(70); led.unplot(3, 0); basic.pause(70); led.unplot(2, 0); basic.pause(70)
    led.unplot(1, 0); basic.pause(70); led.unplot(0, 0); basic.pause(70); led.unplot(0, 1); basic.pause(70)
    led.unplot(0, 2); basic.pause(70); led.unplot(0, 3); basic.pause(70); led.unplot(0, 4); basic.pause(70)
    led.unplot(1, 4); basic.pause(70); led.unplot(2, 4); basic.pause(70); led.unplot(3, 4); basic.pause(70)
    led.unplot(4, 4)
}
let zigzag = [    //this screensaver animates the "5" side of a dice
    [0, 4], [1, 3], [2, 2], [3, 1], [4, 0],
    [4, 1], [4, 2], [4, 3], [4, 4],
    [3, 3], [1, 1], [0, 0],
    [0, 1], [0, 2], [0, 3],
    [1, 4], [2, 4], [3, 4], [3, 1],
    [1, 0], [2, 0], [3, 0]
]
function dice() {
    for (let d = 0; d < 22; d++) {
        led.plot(zigzag[d][0], zigzag[d][1])
        basic.pause(100)
    }
    for (let d = 0; d < 22; d++) {
        led.unplot(zigzag[d][0], zigzag[d][1])
        basic.pause(100)
    }
}
let wavey = [
    [0, 4],            //used basic spiral code on gist
    [0, 3], [1, 4],      //customized array to create "wave" pattern
    [1, 3], [2, 4], [0, 2],
    [1, 2], [2, 3], [0, 1], [3, 4],
    [2, 2], [3, 3], [1, 1], [4, 4], [0, 0],
    [2, 1], [3, 2], [1, 0], [4, 3],
    [3, 1], [4, 2], [2, 0],
    [3, 0], [4, 1],
    [4, 0]
]
function wave() {
    for (let w = 0; w < 25; w++) {
        led.plot(wavey[w][0], wavey[w][1])
        basic.pause(50)       //changed timing to flow better
    }
    for (let w = 0; w < 25; w++) {
        led.unplot(wavey[w][0], wavey[w][1])
        basic.pause(50)
    }
}
function turtle() { //used firework code from makecode.com
    //added element to create animation
    basic.plotLeds(`       
        # . # . #
        . # # # .
        . # # # .
        . # # # .
        # . . . #
        `)
    basic.pause(400) //the firework loop creates the illusion of moving turtle eggs
    basic.plotLeds(`
        . . . . .
        . . # . .
        . # . # .
        . . # . .
        . . . . .
    `)
    basic.pause(400) //which then grow into the center turtle seen at the end of the animation
    for (let f = 0; f <= 4; f++) {
        led.plot(f, 0)
        led.plot(4 - f, 4)
        led.plot(0, 4 - f)
        led.plot(4, f)
        basic.pause(175)     //slowed timing
        led.unplot(f, 0)
        led.unplot(0, 4 - f)
        led.unplot(4 - f, 4)
        led.unplot(4, f)
        basic.pause(175)
    }
}
function snake() { //snake animation that plots "food". The snake eats it and grows before leaving
    led.plotBrightness(0, 1, 110)
    led.plotBrightness(1, 4, 155)
    led.plotBrightness(2, 0, 210)
    led.plotBrightness(4, 4, 255)
    led.plotBrightness(0, 4, 50), basic.pause(250), led.unplot(0, 4), led.plotBrightness(0, 3, 50), basic.pause(250),
        led.unplot(0, 3), led.plotBrightness(0, 2, 50), basic.pause(250), led.unplot(0, 2), basic.pause(250),
        led.plotBrightness(0, 0, 110), basic.pause(250), led.plotBrightness(1, 0, 110), led.unplot(0, 1),
        basic.pause(250), led.plotBrightness(1, 1, 110), led.unplot(0, 0), basic.pause(250),
        led.plotBrightness(1, 2, 110), led.unplot(1, 0), basic.pause(250), led.plotBrightness(1, 3, 110),
        led.unplot(1, 1), basic.pause(250), led.unplot(1, 2), basic.pause(250), led.plotBrightness(2, 4, 155),
        led.unplot(1, 3), basic.pause(250), led.plotBrightness(2, 3, 155), basic.pause(250), led.plotBrightness(2, 2, 155),
        led.unplot(1, 4), basic.pause(250), led.plotBrightness(2, 1, 155), led.unplot(2, 4), basic.pause(250),
        led.plotBrightness(3, 0, 210), led.unplot(2, 3), basic.pause(250), led.plotBrightness(3, 1, 210),
        led.unplot(2, 2), basic.pause(250), led.plotBrightness(3, 2, 210), led.unplot(2, 1), basic.pause(250),
        led.plotBrightness(3, 3, 255), led.unplot(2, 0), basic.pause(250), led.plotBrightness(3, 4, 210),
        led.unplot(3, 0), basic.pause(250), led.plotBrightness(4, 3, 255), led.unplot(3, 1), basic.pause(250),
        led.plotBrightness(4, 2, 255), led.unplot(3, 2), basic.pause(250), led.plotBrightness(4, 1, 255),
        led.unplot(3, 3), basic.pause(250), led.plotBrightness(4, 0, 255), led.unplot(3, 4), basic.pause(250),
        led.unplot(4, 4), basic.pause(250), led.unplot(4, 3), basic.pause(250), led.unplot(4, 2), basic.pause(250),
        led.unplot(4, 1), basic.pause(250), led.unplot(4, 0), basic.pause(400)
}
