"use strict"

{
    const body = document.body

    const style = document.createElement("style")
    document.head.append(style)
    style.innerHTML = `
         .container {
         display: flex;
         flex-direction: column;
         margin: 0 auto;
         max-width: 1280px;
         height: 880px;
         border: 1px solid red;
         padding: 157px 159px 0px 159px;
         }
         .titleContainer {
         display: flex;
         flex-direction: column;
         align-items: center;
         
         }
         .cardsContainer {
         display: flex;
         }
         .card {
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
         max-width: 254px;
         }
    `
    const container = document.createElement('div')
    container.classList.add('container')
    body.prepend(container)

    const titleContainer = document.createElement('div')
    titleContainer.classList.add('titleContainer')
    container.append(titleContainer)
    
    const titleText = document.createElement('span')
    titleText.innerHTML = "AWESOME FEATURE"

    const title = document.createElement('h2')
    title.innerHTML = 'Beautiful and Fully Isolated'
    
    titleContainer.append(titleText, title)
    
    const cardsContainer = document.createElement('div')
    cardsContainer.classList.add('cardsContainer')
    titleContainer.append(cardsContainer)
    
    const cards = [{
        title: 'A4 PAPER',
        text:'Computer manufacturer Lenovo is in hot water this week after pre-installing software that tracks your Internet activity to show you personalized ads. While that sounds a little shady on its own, it gets even worse.',
        src: '../images/paper-hand.svg'
    },{
        title: 'EYEDROPER',
        text:'It seems like hundreds of new iPhone apps pop up every week',
        src: '../images/eyedropper.png',
        marker: "POPULAR",
        markerSrc: '../images/shape.svg'
    }, {
        title: 'CROWN',
        text:'It seems like hundreds of new iPhone apps pop up every week',
        src: '../images/crown.svg'
    }
    ]
    
    cards.forEach(element => {
        
        const card = document.createElement('div')
        card.className = "card"
        cardsContainer.append(card)
        
        const image = document.createElement('img')
        image.className = "image"
        image.setAttribute('src', element.src)

        const title = document.createElement('h5')
        title.innerHTML = element.title

        const text = document.createElement('span')
        text.innerHTML = element.text
        
        const marker = document.createElement('div')
        
        if(element.marker) {
            const flag = document.createElement('img')
            flag.setAttribute('src', element.markerSrc)
            
            const markerText = document.createElement('span')
            markerText.innerHTML = element.marker
            marker.prepend(flag, markerText)
            
        }
        
        
        
        card.append(image, marker, title, text)
        
        
    })
    
    



}