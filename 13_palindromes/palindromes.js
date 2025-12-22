const palindromes = function (string) {
    string = string.toLowerCase  ();
    string.replace(/[^a-z0-9]/g,'')
    let l = 0
    let r = string.length-1;
    while (l<r){
        if (string[l]!=string[r]){
            return false
        }
        l++;
        r--;
    }
    return true;

};

// Do not edit below this line
module.exports = palindromes;
