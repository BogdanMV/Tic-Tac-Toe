let squares = document.querySelectorAll('.square')
squares = Array.from(squares)

let xScore = document.getElementById('xscore')
let oScore = document.getElementById('oscore')

let xWins = 0
let oWins = 0

let player = 'X'

squares.forEach(function (square) {
    square.addEventListener('click', function () {
        if (square.innerText != '') return
        square.innerText = player
        win()
        draw()
        player = player == 'X' ? 'O' : 'X'
    })
})

let winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

function win() {
    winCombos.forEach(function (element) {
        let index1 = element[0]
        let index2 = element[1]
        let index3 = element[2]
        if (squares[index1].innerText == squares[index2].innerText
            && squares[index1].innerText == squares[index3].innerText
            && squares[index1].innerText !== '') {
            if (squares[index1].innerText == 'X') {
                xWins++
                xScore.innerText = 'Times X has won: '+ xWins
            }
            if (squares[index1].innerText == 'O') {
                oWins++
                oScore.innerText = 'Times O has won: '+ oWins
            }
            setTimeout(() => { alert(squares[index1].innerText + ' has won'); gameReset() }, 150)
        }
    });
}

function draw() {
    let i = 0;
    squares.forEach(function (square) {
        if (square.innerText !== '')
            i++;
    }
    )
    if (i == 9) {
        setTimeout(() => { alert('It is a draw'); gameReset() }, 150)
    }

}

function gameReset() {
    squares.forEach(function (square) {
        square.innerText = ''
    }
    )
}

