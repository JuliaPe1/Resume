const board = document.querySelector('#board')
const colors = ['#f97d72', '#f9e75d', '#9dfb78', '#78faeb', '#78b2fa', '#aa88f9', '#f689fa']
const SQUARES_NUMBER = 600
 
for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => 
    setColor(square))

    square.addEventListener('mouseleave', () => 
    removeColor(square))

    board.append(square)
    }

    function setColor(element) {
        const color = getRandomColor()
        element.style.backgroundColor = color
        element.style.boxShaddow = `0 0 2px ${color}, 0 0 10px ${color}`
    }

    function removeColor(element) {
        element.style.backgroundColor = '#ebdede'
        element.style.boxShaddow = `0 0 2px #000`
    }

    function getRandomColor() {
        return colors[Math.floor(Math.random() * colors.length)]
    }