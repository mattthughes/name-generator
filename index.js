const names = [];

const randomName = document.getElementById("name-generator")
const randomBtn = document.getElementById("random-btn")
const limit = document.getElementById("slots")
const bannedNames = ["Matt Hughes", "Darcey Padwick"]
const results = document.getElementById("results")

function cleanName(name) {
    return name.split("(")[0].trim();
}

const isNameBanned = (name) => {
    // Setting is banned to false so that when you loop through the name array it can check if banned names are there otherwise it will set every single name to a banned name
    let isBanned = false;
    bannedNames.forEach(bannedName => {
        // if the name is a perfect match
        if (name.toLowerCase() === bannedName.toLowerCase()) {
            // only set to true if the banned name is found
            isBanned = true
        }
    })
    return isBanned;
}
// looping through the pasted names
const pastedNames = (str, sum) => {
    randomName.value = ""
    const pastedRows = str.split(/[,\n]+/)
    pastedRows.forEach(row => {
        const name = cleanName(row.trim());
        if (name === "") return


        if (isNameBanned(name)) {
            // finding the index, if the user and name match 
            const index = names.findIndex(user => user.toLowerCase() === name.toLowerCase())
            // if the index is -1 then remove that element from the array
            if (index !== -1) {
                names.splice(index, 1)
            }
        }
        // if names is less than sum then add the names to the array
        else if (name !== "") {
            names.push(name)

        }
    })

}

const winnersList = (array, numberOfWinners) => {
    const nameCopy = [...array]
    const winners = []

    if (numberOfWinners > nameCopy.length) {
        results.innerHTML = "Not enough names in the list, please add more"
        return []
    }

    for (let i = 0; i < numberOfWinners; i++) {
        if (nameCopy.length === 0) break
        const randomNames = Math.floor(Math.random() * nameCopy.length)
        const chosenNames = nameCopy.splice(randomNames, 1).pop()
        winners.push(chosenNames)
    }

    return winners
}

randomBtn.addEventListener("click", function () {

    // set the sum variable but change it to a number as by default this is a string
    let sum = Number(limit.value)

    // set the string variable to the randomName input field and it's value, use the sum variable to set the limit
    pastedNames(randomName.value)
    // using join to add all elements of the string together and seperate with a break tag, to make sure each element is on it's own line

    // set the input field to empty once the name has been added
    randomName.value = ""

    const finalWinners = winnersList(names, sum)


    if (finalWinners.length === 0) {
        results.innerHTML = `Please add some names`
    } else  {


        results.innerHTML = finalWinners
        console.log(finalWinners)
    }


})