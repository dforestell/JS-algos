// Translate the provided string to pig latin.
// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

// If a word begins with a vowel you just add "way" to the end.
// Input strings are guaranteed to be English words in all lowercase.

function translatePigLatin(str) {
    let vowels = ["a", "e", "i", "o", 'u']
    let i = 0
    let pig = ""
    if (vowels.indexOf(str[0]) === -1) {
        while (vowels.indexOf(str[i]) == -1){
            pig += str[i]
            i++
        }
    } else {
        return str + "way" 
    }
    return str.substring(i) + pig + "ay";
  }
  
console.log(translatePigLatin("consonant")); //"onsonantcay"
console.log(translatePigLatin("california")) // should return "aliforniacay".
console.log(translatePigLatin("paragraphs")) // should return "aragraphspay".
console.log(translatePigLatin("glove")) // should return "oveglay".
console.log(translatePigLatin("algorithm")) // should return "algorithmway".
console.log(translatePigLatin("eight")) // should return "eightway".