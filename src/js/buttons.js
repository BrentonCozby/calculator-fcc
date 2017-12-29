(function buttons() {
    const screen = $('#calcScreen')

    const list = {
        zero: {
            element: $('#zero'),
            onclick() {
                return 0
            },
            keyCode: 48,
        },
        one: {
            element: $('#one'),
            onclick() {
                return 1
            },
            keyCode: 49,
        },
        two: {
            element: $('#two'),
            onclick() {
                return 2
            },
            keyCode: 50,
        },
        three: {
            element: $('#three'),
            onclick() {
                return 3
            },
            keyCode: 51,
        },
        four: {
            element: $('#four'),
            onclick() {
                return 4
            },
            keyCode: 52,
        },
        five: {
            element: $('#five'),
            onclick() {
                return 5
            },
            keyCode: 53,
        },
        six: {
            element: $('#six'),
            onclick() {
                return 6
            },
            keyCode: 54,
        },
        seven: {
            element: $('#seven'),
            onclick() {
                return 7
            },
            keyCode: 55,
        },
        eight: {
            element: $('#eight'),
            onclick() {
                return 8
            },
            keyCode: 56,
        },
        nine: {
            element: $('#nine'),
            onclick() {
                return 9
            },
            keyCode: 57,
        },
        plus: {
            element: $('#plus'),
            onclick() {
                const input = screen.html().split('')
                if (input[input.length - 1] === '+') return ''
                if (input.length === 0) return ''
                return '+'
            },
            keyCode: 43,
        },
        minus: {
            element: $('#minus'),
            onclick() {
                const input = screen.html().split('')
                if (input[input.length - 1] === '−') return ''
                if (input.length === 0) return ''
                return '−'
            },
            keyCode: 45,
        },
        multiply: {
            element: $('#multiply'),
            onclick() {
                const input = screen.html().split('')
                if (input[input.length - 1] === '×') return ''
                if (input.length === 0) return ''
                return '×'
            },
            keyCode: 42,
        },
        divide: {
            element: $('#divide'),
            onclick() {
                const input = screen.html().split('')
                if (input[input.length - 1] === '/') return ''
                if (input.length === 0) return ''
                return '/'
            },
            keyCode: 47,
        },
        neg: {
            element: $('#neg'),
            onclick() {
                const input = screen.html().split('')
                if (input[input.length - 1] === '-') return ''
                return '-'
            },
            keyCode: 110,
        },
        pow: {
            element: $('#pow'),
            onclick() {
                const input = screen.html().split('')
                if (input[input.length - 1] === '^') return ''
                if (input.length === 0) return ''
                return '^'
            },
            keyCode: 94,
        },
        decimal: {
            element: $('#decimal'),
            onclick() {
                const input = screen.html().split('')
                if (input[input.length - 1] === '.') return ''
                return '.'
            },
            keyCode: 46,
        },
        equals: {
            element: $('#equals'),
            onclick() {
                const input = screen.html().split('')
                if (input.length === 0) return ''

                const values = []

                input.push('')
                input.reduce((prev, curr, index) => {
                    if (curr === '^') {
                        values.push(prev, curr)
                        return ''
                    }
                    if (curr === '×') {
                        values.push(prev, curr)
                        return ''
                    }
                    if (curr === '/') {
                        values.push(prev, curr)
                        return ''
                    }
                    if (curr === '+') {
                        values.push(prev, curr)
                        return ''
                    }
                    if (curr === '−') {
                        values.push(prev, curr)
                        return ''
                    }
                    if (index === input.length - 1) values.push(prev)
                    return prev + curr
                })

                // example values: ['40', 'x', '3', '/', '2', '−', '-10', '+', '10.5']
                let result = values.reduce((prev, curr) => {
                    if (prev[0] === '^') return parseFloat(prev.slice(1)) ** parseFloat(curr)
                    if (prev[0] === '×') return parseFloat(prev.slice(1)) * parseFloat(curr)
                    if (prev[0] === '/') return parseFloat(prev.slice(1)) / parseFloat(curr)
                    if (prev[0] === '+') return parseFloat(prev.slice(1)) + parseFloat(curr)
                    if (prev[0] === '−') return parseFloat(prev.slice(1)) - parseFloat(curr)
                    return curr + prev
                })

                if (String(result).length > 14) {
                    result = Number(result).toExponential(8)
                }

                return result
            },
            keyCode: 13,
        },
    }

    module.exports = list
}())
