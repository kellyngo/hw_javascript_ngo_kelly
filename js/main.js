function howdy() {
    console.log("Kelly Ngo says howdy!")
}

howdy();

var numba = function( string ) {
    if (string.length < 7) {
        console.log("What a short little word!")
    }
    else if (string.length > 7) {
        console.log("I'm sorry, but that's too many words to count")
    }
    else if (string.length == 7) {
        console.log("Seven, what a great choice!")
    }
}

numba( "7" );

numba("seventy");

numba("university");


function inception (callback, value) {
    callback(value);
}

function functionToCall( messageToLog ) {
    console.log( messageToLog );
}

inception( functionToCall, "Inception is a fantastic movie!" );