function toWeirdCase(string){
    let newString = ''
    let i = 0
    for (key in string){
        console.log(i)
        if (string[key] === ' '){
            newString += string[key]
            i = 0
        }else if(i % 2 === 0){
            newString += string[key].toUpperCase()
            i++
        }else if(i % 2 !== 0){
            newString += string[key]
            i = 0
        }
    }
    return newString
}