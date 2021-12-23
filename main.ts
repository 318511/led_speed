/**
 * 我有註解!!!
 * 
 * 需要點開
 */
// 這裡共有4串程式，都長得差不多
function 燈 (YY: number, 速度: number) {
    // 一定要!這樣才會重複判斷
    while (true) {
        while (方向 % 4 == 0) {
            // 讓燈跑
            for (let X = 0; X <= 4; X++) {
                // 把陣列轉到顯示
                if (list[YY][X] == 1) {
                    led.plot(X, YY)
                } else {
                    led.unplot(X, YY)
                }
            }
            // 往右
            list[YY].unshift(list[YY].pop())
            // 控制速度
            basic.pause(速度)
        }
        while (方向 % 4 == 1) {
            for (let X = 0; X <= 4; X++) {
                if (list[YY][X] == 1) {
                    led.plot(YY, X)
                } else {
                    led.unplot(YY, X)
                }
            }
            // 往下
            list[YY].unshift(list[YY].pop())
            basic.pause(速度)
        }
        while (方向 % 4 == 2) {
            for (let X = 0; X <= 4; X++) {
                if (list[YY][X] == 1) {
                    led.plot(X, YY)
                } else {
                    led.unplot(X, YY)
                }
            }
            // 往左
            list[YY].push(list[YY].shift())
            basic.pause(速度)
        }
        while (方向 % 4 == 3) {
            for (let X = 0; X <= 4; X++) {
                if (list[YY][X] == 1) {
                    led.plot(YY, X)
                } else {
                    led.unplot(YY, X)
                }
            }
            // 往上
            list[YY].push(list[YY].shift())
            basic.pause(速度)
        }
    }
}
// 用變數「方向」來控制燈跑的......方向
input.onButtonPressed(Button.B, function () {
    方向 += 1
})
let 方向 = 0
let list: number[][] = []
// 阿....就陣列
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
// 歸0
方向 = 0
// 每一個速度移動的燈的數據
control.inBackground(function () {
    燈(0, 500)
})
// 每一個速度移動的燈的數據
control.inBackground(function () {
    燈(1, 400)
})
// 每一個速度移動的燈的數據
control.inBackground(function () {
    燈(2, 300)
})
// 每一個速度移動的燈的數據
control.inBackground(function () {
    燈(3, 200)
})
// 每一個速度移動的燈的數據
control.inBackground(function () {
    燈(4, 100)
})
