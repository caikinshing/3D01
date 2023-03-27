basic.showLeds(`
    # . # # #
    # . # . .
    # # # # #
    . . # . #
    # # # . #
    `)
basic.forever(function () {
    mbit_小车类.CarCtrl(mbit_小车类.CarState.Car_Run)
})
basic.forever(function () {
    while (mbit_小车类.Avoid_Sensor(mbit_小车类.enAvoidState.OBSTACLE)) {
        mbit_小车类.CarCtrlSpeed(mbit_小车类.CarState.Car_Stop, 0)
        mbit_小车类.CarCtrlSpeed(mbit_小车类.CarState.Car_SpinLeft, 180)
    }
})
