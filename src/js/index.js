import buttons from './buttons'

const screen = $('#calcScreen')

// button click listeners
Object.keys(buttons).forEach(button => {
    if (button === 'equals') {
        buttons[button].element.click(() => {
            screen.html(buttons[button].onclick())
        })
    } else {
        if (screen.html().length > 14) return false
        buttons[button].element.click(() => {
            screen.html(`${screen.html()}${buttons[button].onclick()}`)
        })
    }
})

// clear button click listener
$('#clear').click(() => {
    screen.html('')
})

$(document).on('keypress', (e) => {
    if (screen.html().length > 14 && e.keyCode !== 13) {
        return false
    }

    Object.keys(buttons).forEach(button => {
        if (button === 'equals' && e.keyCode === buttons[button].keyCode) {
            screen.html(buttons[button].onclick())
        } else if (e.keyCode === buttons[button].keyCode) {
            screen.html(`${screen.html()}${buttons[button].onclick()}`)
        }
    })

    // clear button
    if (e.keyCode === 99) {
        screen.html('')
    }
})

$(document).on('keydown', (e) => {
    if (e.keyCode === 8) {
        const input = screen.html().split('')
        screen.html(input.slice(0, -1))
    }
})

buttons.equals.element.click(buttons.equals.onclick)
