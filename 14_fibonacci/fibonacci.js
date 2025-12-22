const fibonacci = function(num) {
    let first = 1;
    let second = 2;
    if (num==1){
        return first;
    }
    else if (num==2){
        return second;
    }

    for (let i =0;i<num;i++){
        output = first + second;
        first = second;
        second = output;
        return output;
    }
}
    
// Do not edit below this line
module.exports = fibonacci;
