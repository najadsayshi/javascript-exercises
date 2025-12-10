const repeatString = function(string,num) {
    if (num<0){
        return "Error";
    }
    let ans="";
    for (let i = 0;i<num;i++){
        ans += string;
    }
    console.log(ans)
    return ans;

};

// Do not edit below this line
module.exports = repeatString;
