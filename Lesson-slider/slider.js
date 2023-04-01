'use strict'

const slider = document.querySelector('.slider')
const left = document.querySelector('.left')
const right = document.querySelector('.right')
const sliderCount = document.querySelectorAll('.slide').lenght

let activeSlideIndex = 0
const width = slider.clientWidth
// console.log(width);

right.addEventListener("click", moveSlideRight)
left.addEventListener("click", moveSlideLeft)

// листать с клавиатуры
document.addEventListener("keydown",
    event => {
        event.preventDefault()
        if (event.key === "ArrowLeft") {
            moveSliderLeft()
        }

    })

const slideTransform = () => slider.style.transform = `translateX(-${activeSlideIndex * width}px)`

function moveSlideRight() {
    activeSlideIndex++
    if (activeSlideIndex === sliderCount) {
        activeSlideIndex = 0
    }
    slideTransform()
}

function moveSlideLeft() {
    activeSlideIndex--
    if (activeSlideIndex < 0) {
        activeSlideIndex = sliderCount - 1
    }
    slider.style.transform
}