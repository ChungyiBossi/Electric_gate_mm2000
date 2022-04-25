isCarComing = False
isTouchGround = True

def on_forever():
    ultraValue = Matrix.ultrasonic(0)
    isCarComing = ultraValue < 5 and ultraValue > 0
    isTouchGround = Matrix.read_adc(1) < 500
    if isCarComing:
        Matrix.show_led(0, 255, 0, 0)
        Matrix.motor(0, 100)
        basic.pause(1500)
    else:
        if isTouchGround:
            Matrix.show_led(0, 0, 255, 0)
            Matrix.motor(0, 0)
        else:
            Matrix.show_led(0, 0, 0, 255)
            Matrix.motor(0, -50)
    return
basic.forever(on_forever)
