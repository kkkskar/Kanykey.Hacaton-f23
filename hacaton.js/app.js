// MOVIE 
let movieWrapper = document.querySelector('.movie__wrapper')
let movieSection = document.querySelector('.movie')


let modal = document.createElement('div')
    movieSection.appendChild(modal)
    modal.className = 'movie__modal animate__animated animate__zoomIn'

let backdropPath = document.createElement('div')
modal.appendChild(backdropPath)
backdropPath.className = 'movie__modal-img'

let imgModal = document.createElement('img')
backdropPath.appendChild(imgModal)

let modalInfo = document.createElement('div')
modal.appendChild(modalInfo)

let modalTitle = document.createElement('h3')
modalInfo.appendChild(modalTitle)
modalTitle.className = 'movie__modal-title'

let modalDesc = document.createElement('p')
modalInfo.appendChild(modalDesc)
modalDesc.className = 'movie__modal-desc'

let modalBtn = document.createElement('button')
modal.appendChild(modalBtn)
modalBtn.innerText = 'ЗАКРЫТЬ'
modalBtn.className = 'movie__modal-btn'

const getApi = async () => {
    let res = await fetch('https://api.themoviedb.org/3/discover/movie?language=ru-RUS&api_key=baacee587b52679e93f67d12424c4cb3')
    let data = await res.json()
    // console.log(data.results);
    data.results.forEach((el) => {
        let movCard = document.createElement('div')
        movieWrapper.appendChild(movCard)
        movCard.className = 'movie__card animate__animated animate__zoomIn wow'

        let movImg = document.createElement('div')
        movCard.appendChild(movImg)
        movImg.className = 'movie__img'

        let img = document.createElement('img')
        movImg.appendChild(img)
        img.src = `https://image.tmdb.org/t/p/w500/${el.poster_path}`
        img.alt = 'poster'
        
        let titleDiv = document.createElement('div')
        movCard.appendChild(titleDiv)
        titleDiv.className = 'movie__div-title'

        let movTitle = document.createElement('h1')
        titleDiv.appendChild(movTitle)
        movTitle.className = 'movie__card-title'
        movTitle.innerText = el.title

        let movRait = document.createElement('div')
        movCard.appendChild(movRait)
        movRait.className = 'movie__raiting'
        movRait.innerText = el.vote_average     
        
        movCard.addEventListener('click',()=>{
            modal.style.display = 'block'
            modalTitle.innerText = el.title
            modalDesc.innerText = el.overview
            imgModal.src =  `https://image.tmdb.org/t/p/w500/${el.backdrop_path}`
            
        })
        modalBtn.addEventListener('click',()=>{
            modal.style.display = 'none'
        })

    })

   
}
getApi()
