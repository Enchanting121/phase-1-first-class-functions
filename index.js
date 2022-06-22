function receivesAFunction(callback) { callback(); }

receivesAFunction();

function returnsANamedFunction() {
    const name = function() {};
    return name;
}

function returnsAnAnonymousFunction() {
    return (function() {});
}