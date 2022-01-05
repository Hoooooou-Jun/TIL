function padLeft(value, padding) {
    if (typeof padding === 'number') {
        return Array(padding + 1).join(' ') + value;
    }
    if (typeof padding === 'string') {
        return padding + value;
    }
    else {
        return padding; // typeof 'never'
    }
}
console.log(padLeft('Hello world', 4));
