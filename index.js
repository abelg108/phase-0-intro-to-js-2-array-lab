// Write your solution here!
const cats = ["Milo","Otis","Garfield"]

function destructivelyAppendCat(){
    cats.push("Ralph")
}   
function destructivelyPrependCat () {
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat () {
    cats.pop("Bob")
}
function destructivelyRemoveFirstCat () {
    cats.shift("Milo")
} 

function appendCat () {
    const allCats = [...cats, "Broom"]
    return allCats
}
function prependCat () {
    const moreCats = ["Arnold",...cats]
    return moreCats
}

function removeLastCat () {
    const catts = cats.slice(0,cats.length-1)
    return catts
}
function removeFirstCat () {
    const gato = cats.slice(1)
    return gato
}