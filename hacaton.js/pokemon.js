let wrapper = document.querySelector('.pokemon__wrapper')
// console.log(wrapper);
let newData = []


let pokeSection = document.querySelector('.pokemon')

let modalPokemon = document.createElement('div')
pokeSection.appendChild(modalPokemon)
modalPokemon.className = 'pokemon__modal'

let modalWrapper = document.createElement('div')
modalPokemon.appendChild(modalWrapper)
modalWrapper.className = 'pokemon__modal-wrapper'

// первая картинка 
let firstPic = document.createElement('div')
modalWrapper.appendChild(firstPic)
firstPic.className = 'pokemon__modal-img'

let modalImg = document.createElement('img')
firstPic.appendChild(modalImg)
// modalImg.src = `${el.sprites.front_default}`

 // вторая картинка 
let secondPic = document.createElement('div')
modalWrapper.appendChild(secondPic)
secondPic.className = 'pokemon__modal-img'

let modalImg1 = document.createElement('img')
secondPic.appendChild(modalImg1)
// modalImg1.src = `${el.sprites.back_default}`

  // третья картинка 
let thirdPic = document.createElement('div')
modalWrapper.appendChild(thirdPic)
thirdPic.className = 'pokemon__modal-img'

let modalImg2 = document.createElement('img')
thirdPic.appendChild(modalImg2)
// modalImg2.src = `${el.sprites.front_shiny}`
 
 // четвертая картинка 
let fourthPic = document.createElement('div')
modalWrapper.appendChild(fourthPic)
fourthPic.className = 'pokemon__modal-img'

let modalImg3 = document.createElement('img')
fourthPic.appendChild(modalImg3)
// modalImg3.src = `${el.sprites.front_shiny}`

let modalTitle = document.createElement('h2')
modalPokemon.appendChild(modalTitle)
modalTitle.className = 'pokemon__modal-title'


let modalBtn = document.createElement('button')
modalPokemon.appendChild(modalBtn)
modalBtn.className = 'pokemon__modal-btn'
modalBtn.innerText = 'close'

const getPok = async () => {
    let resPoke = await fetch("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20")
    let dataPoke = await resPoke.json()
    // console.log(dataPoke.results);
    dataPoke.results.forEach(element => {
        // console.log(element.name);
        const getName = async () => {
            let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${element.name}`)
            let dataName = await res.json()
            console.log(dataName);
            const dataRec = () => {
                newData = [...newData, dataName]
                if (newData.length < 20) {
                    return newData
                }
                return newData.forEach((el) => {
                    let card = document.createElement('div')
                    wrapper.appendChild(card)
                    card.className = 'pokemon__card animate__animated animate__zoomIn wow'

                    let cardImg = document.createElement('div')
                    card.appendChild(cardImg)
                    cardImg.className = 'pokemon__img'

                    let img = document.createElement('img')
                    cardImg.appendChild(img)

                    img.src = el.sprites.other.home.front_default
                    img.alt = 'img'

                    let titleDiv = document.createElement('div')
                    card.appendChild(titleDiv)
                    titleDiv.className = 'pokemon__title-div'

                    let pokTitle = document.createElement('h2')
                    titleDiv.appendChild(pokTitle)
                    pokTitle.className = 'pokemon__card-title'
                    pokTitle.innerText = el.name
                    
                    card.addEventListener('click', () => {
                        modalImg.src = el.sprites.front_default
                        modalImg1.src = el.sprites.back_default
                        modalImg2.src = el.sprites.front_shiny
                        modalImg3.src = el.sprites.front_shiny

                        modalTitle.innerText = el.name

                    })

                    card.addEventListener('click', () => {
                        modalPokemon.style.display = 'block'
                        
                    })
                    modalBtn.addEventListener('click',()=>{
                        modalPokemon.style.display = 'none'
                    })
                })
            }
            dataRec()
        }
        getName()
    });
}
getPok()
