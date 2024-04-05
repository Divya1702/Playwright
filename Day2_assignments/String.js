function palindrome(str) {
    let rev = " ";
    for (let i = str.length - 1; i >= 0; i--) {
        rev = rev + str[i];
        console.log(rev);
    }
    if (str.trim() === rev.trim()) {
        console.log("rev string is palindrome", rev);
    }
    else { console.log("rev string is not palindrome", rev); }
}
palindrome('madam');
palindrome('hello');