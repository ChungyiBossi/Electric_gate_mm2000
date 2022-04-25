let isCarComing = false
let isTouchGround = true
basic.forever(function on_forever() {
    let ultraValue = Matrix.ultrasonic(0)
    let isCarComing = ultraValue < 5 && ultraValue > 0
    let isTouchGround = Matrix.readADC(1) < 500
    if (isCarComing) {
        Matrix.showLED(0, 255, 0, 0)
        Matrix.motor(0, 100)
        basic.pause(1500)
    } else if (isTouchGround) {
        Matrix.showLED(0, 0, 255, 0)
        Matrix.motor(0, 0)
    } else {
        Matrix.showLED(0, 0, 0, 255)
        Matrix.motor(0, -50)
    }
    
    return
})
