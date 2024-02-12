const header = document.querySelector("#header")
const image = document.querySelector("#image")
const credit = document.querySelector("#credit")

document.querySelector("#chanterelle-button").addEventListener("click", function() {
    header.innerHTML = "Chanterelle"
    image.src = "chanterelle.jpg"
    credit.innerHTML = "© Neil Leclerc"
})

document.querySelector("#oyster-button").addEventListener("click", function() {
    header.innerHTML = "Oyster mushroom"
    image.src = "oyster.jpg"
    credit.innerHTML = "© Robbie Sproule"
})

document.querySelector("#fly-agaric-button").addEventListener("click", function() {
    header.innerHTML = "Fly Agaric"
    image.src = "fly-agaric.jpg"
    credit.innerHTML = "© Victoria Vasilieva"
})