
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];
function addExcitment(sentence, exclamation) {
    
    let buildMeUp = "";

    for (let i = 0; i < sentence.length; i++) {
        if (i != 0 && i % 3 === 0) {
            buildMeUp = `${buildMeUp}${exclamation} ${sentence[i]}`;
        } else {
            buildMeUp = `${buildMeUp} ${sentence[i]}`;
        }

    console.log(buildMeUp)
    }
}

addExcitment(sentence, "!");
