function receivesAFunction(callback) {
    return(callback());
}
function returnsANamedFunction(callback) {
    return (function nameMe() {
        callback();
    })
}
function returnsAnAnonymousFunction(callback) {
    return (function() {
        callback();
    })
}