// Opens the barrier
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
// Closes the Barrier
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
})
radio.setGroup(1)
