
// function callback(){
//     console.log('This is sentence 2');
// }



// function returnsANamedFunction(){/     let breakfast = null
//     if (breakfast === callback) {
//         breakfast = 'protein bar'
//     } else {breakfast = 'cereal'
// }

// receivesAFunction()

// return function() {
//     console.log('is this anon?');
// }
// }



// The first test requires that you should have a function named receivesAFunction that accepts a function as parameter then you have to invoke that function inside receivesAFunction

function receivesAFunction(callback) {
    console.log('This is setence 1 with a callback function');
    callback();
}

// The second test expects that you have a function called returnsANamedFunction that returns a named function as its return value.

function returnsANamedFunction() {
    return receivesAFunction;
}

// The third test expects that you have a function called returnsAnAnonymousFunction that returns an anonymous function as its return value.

function returnsAnAnonymousFunction() {
    return () => {
        console.log("Is this right?");
    }
}