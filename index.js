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
    let sum = Number(limit.value)


    const pastedRows = randomName.value.split(/[,\n]+/)
    pastedRows.forEach(row => {
        const name = cleanName(row.trim());
        if (name === "") return
        let isBanned = false;

        bannedNames.forEach(bannedName => {
            if (name.toLowerCase() === bannedName.toLowerCase()) {
                isBanned = true
            }
        })
        if (isBanned) {
            results.innerHTML = `Please remove ${name}`
            const index = names.findIndex(n => n.toLowerCase() === name.toLowerCase())
            if (index !== -1) {
                names.splice(index, 1)
            }
        }
        else if (names.length < sum) {
            names.push(name)

        }
    })

    results.innerHTML = names.join("<br> ")
    randomName.value = ""
    console.log(names)
})