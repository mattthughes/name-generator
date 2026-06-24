const names = [];

const randomName = document.getElementById("name-generator")
const randomBtn = document.getElementById("random-btn")
const limit = document.getElementById("slots")


const results = document.getElementById("results")

randomBtn.addEventListener("click", function () {
    let sum = Number(limit.value)
    if (names.length < sum) {
        names.push(randomName.value)
        results.innerHTML = names
        randomName.value = ""
    }
    
    console.log(names)

    console.log(sum)
})
