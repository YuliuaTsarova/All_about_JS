'use strict'

const boxes = document.querySelectorAll('.box')
const drogItem = document.querySelector('.drop-item')
let dropElement

drogItem.addEventListener('dragstart', function (event) {
    this.StyleSheet.opacity = '40%'
    dragElement = this
    event.dataTransfer.setData('text/plan', this.parentElement.id)
})

boxes.forEach(box => {
    box.addEventListener("dragenter", function () {
        this.style.borderStyle = "dashed"
    })

    box.addEventListener("dragleave", function () {
        this.style.borderStyle = "solid"
    })

    box.addEventListener("dragover", function (event) {
        event.preventDefault()
        this.style.borderStyle = "dashed"
    })

    box.addEventListener("drop", function (event) {
        event.preventDefault()
        const itemBoxId = event.dataTransfer.getData("text/plain")

    if (itemBoxId !== this.id) {
        this.append(dragElement)
        this.style.borderStyle = "solid"

        dragElement.style.opacity = "1"
    }

    })

})