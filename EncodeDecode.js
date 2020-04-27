function encodeString(str){
    let count = 1;
    let encode = "";
    for(let i = 0; i<str.length-1; i++){
        if(str[i] == str[i+1]) count++;
        else {
            encode += str[i] + count;
            count = 1;
        }
    }
    console.log(encode);
}

encodeString("aaabbcca");

function decodeString(str){
    let decode = "";
    for(let i = 0; i<str.length-1; i+=2){
        decode += str[i].repeat(str[i+1]);
    }
    console.log(decode);
}

decodeString("a3b2c2");