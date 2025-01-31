// Opens the barrier
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
})
// Closes the Barrier
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
})
radio.setGroup(1)
