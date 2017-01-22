import buttons from './buttons.js';

(function() {
    'use strict';

    const screen = $('#calcScreen');

    // button click listeners
    for(let button in buttons) {
        if(button === 'equals' && buttons.hasOwnProperty(button)) {
            buttons[button].element.click(function() {
                screen.html( buttons[button].onclick() );
            });
        }
        else if(buttons.hasOwnProperty(button)) {
            if(screen.html().length > 14) return false;
            buttons[button].element.click(function() {
                screen.html( screen.html() + '' + buttons[button].onclick() );
            });
        }
    }

    // clear button click listener
    $('#clear').click(function() {
        screen.html('');
    });

    $(document).on('keypress', function(e) {
        if(screen.html().length > 14 && e.keyCode !== 13) return false;
        for(let button in buttons) {
            if(buttons.hasOwnProperty(button)) {
                if(button === 'equals' && e.keyCode === buttons[button].keyCode) {
                    screen.html( buttons[button].onclick() );
                }
                else if(e.keyCode === buttons[button].keyCode) {
                    screen.html( screen.html() + '' + buttons[button].onclick() );
                }
            }
        }

        // clear button
        if(e.keyCode === 99) {
            screen.html('');
        }
    });

    $(document).on('keydown', function(e) {
        if(e.keyCode === 8) {
            let input = screen.html().split('');
            screen.html( input.slice(0, -1) );
        }
    });

    buttons.equals.element.click(buttons.equals.onclick);

})();
