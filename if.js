function logger (text){
    console.log (text)
}


function findGoodBooks (books) {
    if (author === "Colleen Hoover") {
        return "good"
    } else if (pages < 350) {
        return "not that good"
    } else {
        return "bad"
    }

}

let WitoutMerit = { author: "Colleen Hoover", pages: 380, published: 2017}
let Verity = { author: "Colleen Hoover", pages: 340, published: 2021}
let Play = { author: "Kylie Scott", pages: 305, published: 2014}
let RoyalFamily = { author: "Erin Watt", pages: 350, published: 2017}

logger (findGoodBooks(WithoutMerit))
logger (findGoodBooks(Verity))
logger (findGoodBooks(Play))
logger (findGoodBooks(RoyalFamily))
