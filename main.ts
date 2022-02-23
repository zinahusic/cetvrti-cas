input.onButtonPressed(Button.A, function () {
    servos.P0.setAngle(0)
    basic.pause(2000)
    servos.P0.setAngle(90)
})
input.onButtonPressed(Button.B, function () {
    servos.P0.setAngle(180)
    basic.pause(2000)
    servos.P0.setAngle(90)
})
input.onPinPressed(TouchPin.P1, function () {
    servos.P0.run(50)
})
servos.P0.setAngle(90)
