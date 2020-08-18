function madLib (strName, strSubject){
    return strName + "'s favorite subject in school is " + strSubject

}

console.log(madLib('Eric', 'math'))

function tipAmount(num, service){
    if (service === 'good'){
        return num * .2
    }
    if(service === 'fair'){
        return num * .15
    }
    if (service == 'bad'){
        return num * .1
    }
}
console.log('This is the tip amount ', tipAmount(2000, 'fair'))

function tipAmount2(num, service){
    if (service === 'good'){
        return num * 1.2
    }
    if(service === 'fair'){
        return num * 1.15
    }
    if (service == 'bad'){
        return num * 1.1
    }
}
console.log('This is the total amount ', tipAmount2(2000, 'fair'))


function printNumbers(num1, num2){
    for (let i = num1; i <=num2 ; i++){
        console.log(i)
    }
}
console.log(printNumbers(1,10))

function printSquare(num){
    let printstr = ""
    for (let j = 0; j < num; j++){
        printstr += "*"
    }
    for(let i = 0; i < num ; i++){
        console.log(i+printstr+"\n")
    }

}

printSquare(10)

function printBox(wide,high){
    tToB = ""
    mid = ""
    for (let i = 0; i < wide; i++){
        tToB += "*"
    }
    for (let j = 0; j < wide; j++){
        if (j === 0){
            mid +="*"
        }
        if (j === wide - 1){
            mid +="*"
        }
        else {
            mid +=" "
        }
    }
    console.log(tToB)
    for (let j = 0; j< high-2; j++){
        console.log(j + mid)
    }
    console.log(tToB)
}
console.log(printBox(5,5))

function printBanner (str){
    bannerStr = ""
    for (let i = 0; i < str.length+2; i++){
        bannerStr += "-"    
    }
    console.log(bannerStr)
    console.log("-"+str+"-")
    console.log(bannerStr)
}

console.log(printBanner("DigitalCrafts"))

function leetSpeak (str){
    let leetStr = ""
    for(let i = 0; i< str.length; i++)
        switch(str[i].toLowerCase()) {
            case "a": 
                leetStr += 4;
                break;
            case "e": 
                leetStr += 3;
                break;
            case "g": 
                leetStr += 6;
                break;
            case "i": 
                leetStr += 1;
                break;
            case "o": 
                leetStr += 0;
                break;
            case "s": 
                leetStr += 5;
                break;
            case "t": 
                leetStr += 7;
                break;
            default:
                leetStr += str[i]
        }
    return leetStr

}
console.log(leetSpeak("super cool leet string"))

function positiveArr(arr){
    let positiveArr =[]
    for (let i = 0; i < arr.length; i ++){
        if(arr[i] >= 0){
            positiveArr.push(arr[i])
        }
    }
    return positiveArr
}

console.log(positiveArr([-1,2,3,4,3,-2,-33,-9,3,4,5,-100]))

function caesarCipher(str){
    const alphabetArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    let charIndex;
    let returnStr = "";
    for (let i = 0; i < str.length; i++){
        charIndex = alphabetArr.indexOf(str[i])
        if (charIndex + 13 > 25){
            returnStr += alphabetArr[charIndex-13]
        }
        else{
            returnStr += alphabetArr[charIndex+13]
        }
    }
    return returnStr
}

console.log(caesarCipher('abcdefghijklmnopqrstuvwxyz'));

function caesarCipherInput(str, num){
    const alphabetArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    let charIndex;
    let charOffset = 25 - num;
    let returnStr = "";
    for (let i = 0; i < str.length; i++){
        charIndex = alphabetArr.indexOf(str[i])
        if (str[i] === " "){
            returnStr += str[i]
        }
        else if (charIndex + num > 25){
            returnStr += alphabetArr[charIndex-charOffset]
        }
        else{
            returnStr += alphabetArr[charIndex+num]
        }
    }
    return returnStr
}

console.log(caesarCipherInput('this is a zylaphone',15));
