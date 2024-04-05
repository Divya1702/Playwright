
function numberType(number) {
    if (number>0) {
        return 'positive';
    }
    else if (number<0) {
        return 'negative';
    }
    else {
        return 'neutral';
    }
}
console.log("Result is",numberType(12));
console.log("Result is",numberType(0));
console.log("Result is",numberType(-56));