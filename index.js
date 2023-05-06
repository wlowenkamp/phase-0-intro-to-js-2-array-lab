
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
cats.push(name)
}

function destructivelyPrependCat(name) {
    cats.unshift(name)
}
function destructivelyRemoveLastCat(name) {
    cats.pop(name)
}

function destructivelyRemoveFirstCat(name){
    cats.shift(name)
}
function appendCat(name) {
    const copyOfCats = cats.slice()
    copyOfCats.push(name)
    return copyOfCats
}
function prependCat(name){
    const copyOfCats2 = [name, ...cats]
    return copyOfCats2 
}
function removeLastCat() {
    const copyOfCats3 = cats.slice(0, cats.length -1)
    return copyOfCats3
}
function removeFirstCat() {
    const copyOfCats4 = cats.slice(1)
    return copyOfCats4
}