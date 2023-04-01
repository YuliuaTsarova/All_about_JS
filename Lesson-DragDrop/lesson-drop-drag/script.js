"use strict"

const boxes = document.querySelectorAll('.box')
const dragItem = document.querySelector('.drop-item')
let dragElement

dragItem.addEventListener('dragstart', function (event) {
    this.style.opacity = '40%'
    dragElement = this  
    event.dataTransfer.setData('text/plain', this.parentElement.id)
})

boxes.forEach(box => {
    box.addEventListener("dragenter", function (){       
        this.style.borderStyle = "dashed"
    })
    
    box.addEventListener("dragleave", function (){
        this.style.borderStyle = "solid"
    })
    
    box.addEventListener("dragover", function (event){        
        event.preventDefault()
        this.style.borderStyle = "dashed"
    })
    
    box.addEventListener("drop", function (event){
        event.preventDefault()
        const itemBoxId = event.dataTransfer.getData("text/plain")
        
        if(itemBoxId !== this.id){
            this.append(dragElement)
            this.style.borderStyle = "solid"
            
            dragElement.style.opacity = "1"
        }     

    })
    // new FileReader
    
})
