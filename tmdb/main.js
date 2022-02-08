let API_KEY = 'b971c2f0de8767f08d2bb84160ba24b7'
let tokenUpcoming = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&page=`
let tokenTop = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&page=`
let tokenPop = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=`
let topFilms = document.querySelectorAll(".btns")[0]
let popularFilms = document.querySelectorAll(".btns")[1]
let upcomingFilms = document.querySelectorAll(".btns")[2]
let btn = document.querySelector('.btn')

async function films()  {
    append.innerHTML = null
    let num = 1
    let response = await fetch(tokenTop+num)
    let result = await response.json()
    let filtered = []

    next.addEventListener('click', async () => {
        num++
        title.textContent = num
        response = await fetch(tokenTop + num)
        result = await response.json()
        render(result.results)
    })
    
    prev.addEventListener('click', async () => {
        if(num > 1) {
            num -= 1
    	}
    	else {
    	    num -= 0
    	}
        title.textContent = num
        response = await fetch(tokenTop + num)
        result = await response.json()
        render(result.results)
    })

    btn.onclick = () => {
        append.innerHTML = null
        append.innerHTML = null

        let search_value = search.value || ''
        let min_value = min.value || 1000
        let max_value = max.value || 2021
        let score_value = score.value || 0.1
        filtered = result.results.filter((el) => {
            let arr = el.release_date.split('-')
            let date = arr[0]
            return date <= max_value && date >= min_value && el.original_title.toLowerCase().includes(search_value) && score_value <= el.vote_average
        })

        render(filtered)
    }
    render(result.results)
}

films()


topFilms.addEventListener('click', async () => {
    search.value = null
    min.value = null
    max.value = null
    score.value = null

    append.innerHTML = null
    let num = 1
    title.textContent = num
    let response = await fetch(tokenTop+`${num}`)
    let result = await response.json()
    let filtered = []

    next.addEventListener('click', async () => {
        num++
        title.textContent = num
        response = await fetch(tokenTop + num)
        result = await response.json()
        render(result.results)
    })
    
    prev.addEventListener('click', async () => {
        if(num > 1) {
            num -= 1
    	}
    	else {
    	    num -= 0
    	}
        title.textContent = num
        response = await fetch(tokenTop + num)
        result = await response.json()
        render(result.results)
    })

    btn.onclick = () => {
        append.innerHTML = null
        append.innerHTML = null
        let search_value = search.value || ''
        let min_value = min.value || 1000
        let max_value = max.value || 2021
        let score_value = score.value || 0.1
        filtered = result.results.filter((el) => {
            let arr = el.release_date.split('-')
            let date = arr[0]
            return date <= max_value && date >= min_value && el.original_title.toLowerCase().includes(search_value) && score_value <= el.vote_average
        })

        render(filtered)
    }
    render(result.results)
})  

popularFilms.addEventListener('click', async () => {
    search.value = null
    min.value = null
    max.value = null
    score.value = null

    title.textContent = 1
    append.innerHTML = null
    let num = 1
    title.textContent = num
    let response = await fetch(tokenPop + num)
    let result = await response.json()

    next.addEventListener('click', async () => {
        num++
        title.textContent = num
        response = await fetch(tokenPop + num)
        result = await response.json()
        render(result.results)
    })
    
    prev.addEventListener('click', async () => {
        if(num > 1) {
            num -= 1
    	}
    	else {
    	    num -= 0
    	}
        title.textContent = num
        response = await fetch(tokenPop + num)
        result = await response.json()
        render(result.results)
    })

    btn.onclick = () => {
        append.innerHTML = null
        append.innerHTML = null
        let search_value = search.value || ''
        let min_value = min.value || 1000
        let max_value = max.value || 2021
        let score_value = score.value || 0.1
        filtered = result.results.filter((el) => {
            let arr = el.release_date.split('-')
            let date = arr[0]
            return date <= max_value && date >= min_value && el.original_title.toLowerCase().includes(search_value) && score_value <= el.vote_average
        })

        render(filtered)
    }
    render(result.results)
})  

upcomingFilms.addEventListener('click', async () => {
    search.value = null
    min.value = null
    max.value = null
    score.value = null

    title.textContent = 1
    append.innerHTML = null
    let num = 1
    title.textContent = num
    let response = await fetch(tokenUpcoming+num)
    let result = await response.json()
    next.addEventListener('click', async () => {
        num++
        title.textContent = num
        response = await fetch(tokenUpcoming + num)
        result = await response.json()
        render(result.results)
    })
    
    prev.addEventListener('click', async () => {
    	if(num > 1) {
            num -= 1
    	}
    	else {
    	    num -= 0
    	}
        title.textContent = num
        response = await fetch(tokenUpcoming + num)
        result = await response.json()
        render(result.results)
    })
    btn.onclick = () => {
        append.innerHTML = null
        let search_value = search.value || ''
        let min_value = min.value || 1000
        let max_value = max.value || 2021
        let score_value = score.value || 0.1
        filtered = result.results.filter((el) => {
            let arr = el.release_date.split('-')
            let date = arr[0]
            return date <= max_value && date >= min_value && el.original_title.toLowerCase().includes(search_value) && score_value <= el.vote_average
        })

        render(filtered)
    }
    render(result.results)
})  


function render(arg) {
    append.innerHTML = null
    for(let i of arg) {
        let div = document.createElement('div')
        div.classList.add('movie')
        div.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500${i.poster_path}" alt="Fast &amp; Furious Presents: Hobbs &amp; Shaw">
   
        <div class="movie-info">
            <h3>${i.original_title}</h3>
            <span class="orange">${i.vote_average}</span>
         </div>
         <span class="date">${i.release_date}</span>`

         append.append(div)
    }
}
