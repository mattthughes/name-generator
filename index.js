const names = [];

const randomName = document.getElementById("name-generator")
const randomBtn = document.getElementById("random-btn")
const limit = document.getElementById("slots")
const bannedNames = ["Matt Hughes", "Darcey Padwick"]
const results = document.getElementById("results")

function cleanName(name) {
    return name.split("(")[0].trim();
}

randomBtn.addEventListener("click", function () {
    const name = randomName.value.trim();
    let sum = Number(limit.value)
    if (bannedNames.includes(name) || bannedNames.includes(name)) {
        results.innerHTML = `Please remove ${name}`
    }
    else if (names.length < sum) {
        names.push(name)
        results.innerHTML = names
        randomName.value = ""
    }
    
    console.log(names)

    console.log(sum)
})
