function coffeeType (coffee){
    return 'I like' + ' ' + coffee + ' :)'
}
    let coffee = 0

    console.log (coffeeType("iced" + " latte"))
    console.log (coffeeType("cappuccino"))


    
    

    
    function findGoodBooks (books) {
        if (books.author === "Colleen Hoover" && books.pages >= 340) { 
            return "This book is really good"
        } else if (books.pages < 340 && books.published < 2015) {
            return "This book maybe not really good"
        } else if (books.published > 2015) {
            return "Actually this can be good"
        } else {
            return "Sorry, it will be bad"
        }
    
    }
    
    let WitoutMerit = { author: "Colleen Hoover", pages: 380, published: 2017}
    let Verity = { author: "Colleen Hoover", pages: 340, published: 2021}
    let Play = { author: "Kylie Scott", pages: 305, published: 2014}
    let RoyalFamily = { author: "Erin Watt", pages: 330, published: 2017}
    let CityOfBones = {author: "Cassandra Clare", pages: 360, published: 2007}
    
    console.log (findGoodBooks(WitoutMerit))
    console.log (findGoodBooks(Verity))
    console.log (findGoodBooks(Play))
    console.log (findGoodBooks(RoyalFamily))
    console.log (findGoodBooks(CityOfBones))