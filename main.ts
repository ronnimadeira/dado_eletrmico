input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Happy)
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.showNumber(randint(0, 6))
})
