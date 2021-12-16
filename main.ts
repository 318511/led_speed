input.onButtonPressed(Button.A, function () {
    方向 = 1
})
input.onButtonPressed(Button.AB, function () {
    方向 = 3
})
function 燈 (YY: number, 速度: number, 方向: number) {
    if (方向 == 0) {
        for (let index = 0; index < 10; index++) {
            for (let X = 0; X <= 4; X++) {
                if (list[X][YY] == 1) {
                    led.plot(YY, X)
                } else {
                    led.unplot(YY, X)
                }
            }
            list[YY].unshift(list[YY].pop())
            basic.pause(速度)
        }
    } else if (方向 == 1) {
        for (let index = 0; index < 10; index++) {
            for (let X = 0; X <= 4; X++) {
                if (list[X][YY] == 1) {
                    led.plot(X, YY)
                } else {
                    led.unplot(X, YY)
                }
            }
            list[YY].unshift(list[YY].pop())
            basic.pause(速度)
        }
    } else if (方向 == 2) {
    	
    } else if (方向 == 3) {
    	
    }
}
input.onButtonPressed(Button.B, function () {
    方向 = 2
})
let 方向 = 0
let list: number[][] = []
list = [
[
1,
0,
0,
0,
0
],
[
1,
0,
0,
0,
0
],
[
1,
0,
0,
0,
0
],
[
1,
0,
0,
0,
0
],
[
1,
0,
0,
0,
0
]
]
方向 = 0
control.inBackground(function () {
    燈(0, 500, 方向)
})
control.inBackground(function () {
    燈(1, 400, 方向)
})
control.inBackground(function () {
    燈(2, 300, 方向)
})
control.inBackground(function () {
    燈(3, 200, 方向)
})
control.inBackground(function () {
    燈(4, 100, 方向)
})
