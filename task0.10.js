const string1Array = string1.split("");
    const string2Array = string2.split("");
    let length=0

    if (string1Array.length > string2Array.length){
        length=string1Array.length
    }
    else{
        length=string2Array.length
    }
        
    let commonLetters="";
    for(let i = 0; i<length;i++){
        if(string1Array.includes(string2[i])){
            commonLetters += string2[i]
        }
        if(string2Array.includes(string1[i])){
            commonLetters += string1[i] 
        }

    }
    const commonLettersArray = Array.from(new Set(commonLetters)) ;

    
    return "Common letters: " + commonLettersArray.join(", ")
    
}
console.log(sameLettersCheck("house","computers"))
