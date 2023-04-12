"use strict"


{

    const body = document.body

    const style = document.createElement("style")
    document.head.append(style)
    style.innerHTML = `
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  max-width: 1280px;
  height: 880px;
  padding: 100px 240px 240px 240px;
 }
 .titleContainer {
  disply: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
 }
 h1{
  font-family: 'Arvo';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 48px;
  color: #212121;
  text-align: center;
 }
span{
  font-family: 'OpenSans';
  font-size: 14px;
  line-height: 26px;
  color: #9FA3A7;
  width: 220px;
  text-align: center;
}
.blockContainer {
  height: 480px;
  display: flex;
  border: 1px solid #E8E9ED;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;

}
.block {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 400px;
  padding-top: 40px;
  padding-bottom: 50px;
  
}
p{
  font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 15px;
text-align: center;
letter-spacing: 2.4px;
color: #9FA3A7;

} 
.blockBut {
  width: 155px;
  height: 57px;
  border-radius: 35px;
  border: 4px solid #FFC80A;  
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
   font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 15px;
letter-spacing: 2.4px;
color: #212121;

}
.nameCl{
  color: #FFC80A;
}

.titleSize{
  width: 200px;
}
.titleCl{
color:  #FFFFFF;

}
.descCl {
  color:  #FFFFFF;
}
.blockCl {
  background: #8F75BE;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  
}
.blockButCl {
  color: #FFFFFF;
}

`

    const container = document.createElement('div')
    container.classList.add('container')
    body.prepend(container)

    const titleContainer = document.createElement('div')
    titleContainer.classList.add('titleContainer')
    container.append(titleContainer)

    const title = document.createElement('h1')
    title.classList.add('title')
    title.innerHTML = "Choose Your Option"

    const subTitle = document.createElement('span')
    subTitle.classList.add('subTitle')
    subTitle.innerHTML = "But I must explain to you how all this mistaken idea of denouncing"

    titleContainer.append(title, subTitle)

    const blocks = [
        {
            name: "FRELANCER",
            title: "Initially designed to ",
            description: "But I must explain to you how all this mistaken idea of denouncing ",
            button: "START HERE"
        },
        {
            name: "STUDIO",
            title: "Initially designed to ",
            description: "But I must explain to you how all this mistaken idea of denouncing ",
            button: "START HERE"
        }, {
            name: "FRELANCER",
            title: "Initially designed to ",
            description: "But I must explain to you how all this mistaken idea of denouncing ",
            button: "START HERE"
        },
        {
            name: "STUDIO",
            title: "Initially designed to ",
            description: "But I must explain to you how all this mistaken idea of denouncing ",
            button: "START HERE"
        }
    ]

    const blockContainer = document.createElement('div')
    blockContainer.classList.add('blockContainer')
    container.append(blockContainer)

    blocks.forEach(element => {
        const block = document.createElement('div')
        block.setAttribute('class', 'block')
        blockContainer.append(block)

        const blockName = document.createElement('p')
        blockName.innerHTML = element.name
        blockName.setAttribute('class', 'name')
        block.append(blockName)

        const blockTitle = document.createElement('h1')
        blockTitle.innerHTML = element.title
        blockTitle.setAttribute('class', 'titleSize')
        block.append(blockTitle)

        const blockDesc = document.createElement('span')
        blockDesc.innerHTML = element.description
        blockDesc.setAttribute('class', 'desc')
        block.append(blockDesc)

        const blockButton = document.createElement('div')
        blockButton.innerHTML = element.button
        blockButton.setAttribute('class', 'blockBut')
        block.append(blockButton)

    })

    const nameColor = document.getElementsByClassName('name')
    nameColor[1].setAttribute('class', 'nameCl')
    nameColor[2].setAttribute('class', 'nameCl')


    const titleSz = document.getElementsByClassName('titleSize')
    titleSz[1].setAttribute('class', 'titleSize titleCl')
    titleSz[3].setAttribute('class', 'titleSize titleCl')

    const descCl = document.getElementsByClassName('desc')
    descCl[1].setAttribute('class', 'descCl')
    descCl[2].setAttribute('class', 'descCl')

    const blockCont = document.getElementsByClassName('block')
    blockCont[1].setAttribute('class', ' block blockCl')
    blockCont[3].setAttribute('class', ' block blockCl')

    const blockButt = document.getElementsByClassName('blockBut')
    blockButt[1].setAttribute('class', ' blockBut blockButCl')
  blockButt[3].setAttribute('class', ' blockBut blockButCl')  
}