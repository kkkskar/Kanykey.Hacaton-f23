let starwarsWrapper = document.querySelector('.starwars__wrapper')

let popupMenu = document.createElement('div')
        starwarsWrapper.appendChild(popupMenu)
        popupMenu.className = 'starwars__popup'
     
        let heroName = document.createElement('p')
        popupMenu.appendChild(heroName)
        heroName.className = 'starwars__popup-txt'

        let heroHigh = document.createElement('p')
        popupMenu.appendChild(heroHigh)
        heroHigh.className = 'starwars__popup-txt'

        let heroMass = document.createElement('p')
        popupMenu.appendChild(heroMass)
        heroMass.className = 'starwars__popup-txt'

        let hairColor = document.createElement('p')
        popupMenu.appendChild(hairColor)
        hairColor.className = 'starwars__popup-txt'
        
        let skinColor = document.createElement('p')
        popupMenu.appendChild(skinColor)
        skinColor.className = 'starwars__popup-txt'

        let ayeColor = document.createElement('p')
        popupMenu.appendChild(ayeColor)
        ayeColor.className = 'starwars__popup-txt'

        let birthYear = document.createElement('p')
        popupMenu.appendChild(birthYear)
        birthYear.className = 'starwars__popup-txt'

        let heroGender = document.createElement('p')
        popupMenu.appendChild(heroGender)
        heroGender.className = 'starwars__popup-txt'

        let homeWorld = document.createElement('p')
        popupMenu.appendChild(homeWorld)
        homeWorld.className = 'starwars__popup-txt'

        let modalBtn = document.createElement('button')
        popupMenu.appendChild(modalBtn)
        modalBtn.className = 'starwars__btn-modal'
        modalBtn.innerText = 'close'


const getApi = async() =>{
   let res = await fetch('https://swapi.dev/api/people/')
   let data = await res.json()
//    console.log(data.results);
    data.results.forEach(element => {
   let card = document.createElement('div')
   starwarsWrapper.appendChild(card)
   card.className = 'starwars__card animate__animated animate__zoomIn wow'

   let cardImg = document.createElement('div')
   card.appendChild(cardImg)
   cardImg.className = 'starwars__img'
   
   let img = document.createElement('img')
   cardImg.appendChild(img)
   img.src = './IMG/starwars__bgc-img.jpg'
   
   let titleDiv = document.createElement('div')
   card.appendChild(titleDiv)
   titleDiv.className = 'starwars__title-div'

   let cardName = document.createElement('h3')
   titleDiv.appendChild(cardName)
   cardName.className = 'starwars__title-card'
   cardName.innerText = element.name 

  
    card.addEventListener('click',()=>{
    popupMenu.style.display = 'block'

    heroName.innerText = `Имя:${element.name}`

    heroHigh.innerText = `Рост:${element.height}`

    heroMass.innerText = `Вес:${element.mass}`

    hairColor.innerText =`Цвет волос:${element.hair_color}`

    skinColor.innerText = `Цвет кожи : ${element.skin_color}`

    ayeColor.innerText = `Цвет глаз : ${element.eye_color}`

    birthYear.innerText = `Год рождения : ${element.birth_year}`

    heroGender.innerText = `Пол персонажа : ${element.gender}`
    
    homeWorld.innerText = `Родная планета персонажа : ${element.homeworld}`
   })
   
   modalBtn.addEventListener('click',()=>{
      popupMenu.style.display = 'none'
   })
   
});
}
getApi()





