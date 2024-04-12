const outputEl = document.getElementById('output')
const fullTimeEl = document.getElementById('full')
const dateTimeEl = document.getElementById('date')
const timeEl = document.getElementById('time')
const timerEl = document.getElementById('timer')
const startTimerEl = document.getElementById('timerStart')
let inputEl = ''

let mode = 'full'

renderOutput(mode)

fullTimeEl.onclick = () => {
    mode = 'full'
}

dateTimeEl.onclick = () => {
    mode = 'date'
}

timeEl.onclick = () => {
    mode = 'time'
}

timerEl.onclick = () => {
    clearInterval(interalRender)
    outputEl.innerHTML = `<input id="input" class="input" type="number" placeholder="Введите минуты">`
}

startTimerEl.onclick = function () {
    inputEl = document.getElementById('input')
    if (inputEl.value == '') {
        return outputEl.innerHTML = `<input id="input" class="input" type="number" placeholder="Введите минуты">
        <span>Введите значение в минутах</span>`
    }
    let house = Math.round(inputEl.value / 60)
    let min = Math.round(inputEl.value % 60)
    let timerTime = new Date(2000, 1, 26, house, min, 0)

    outputEl.innerHTML = timerTime.toLocaleTimeString('ru-RU')
    workTimer(timerTime)
}


function workTimer(timerTime) {
    const interalRender1 = setInterval(() => {
        let secondTime = Number(timerTime.getTime()) - 1000
        outputEl.innerHTML = new Date(secondTime).toLocaleTimeString('ru-RU')
        timerTime = new Date(secondTime)
    }, 1000)
}

function switchMode(mode) {
    let now = new Date()

    switch (mode) {
        case 'full':
            return now.toLocaleDateString() + ' ' + now.toLocaleTimeString()
        case 'date':
            return now.toLocaleDateString()
        case 'time':
            return now.toLocaleTimeString()
        default:
            return now.toLocaleTimeString()
    }
}

function renderOutput(mode) {
    outputEl.textContent = switchMode(mode)
}

const interalRender = setInterval(() => {
    renderOutput(mode)
}, 1000)