const searchBarInputEl = document.getElementById('search-bar-input')
const searchBtnEl = document.getElementById('search-btn')
const apiKey = "f8f2dd17"
searchBtnEl.addEventListener('click', () => {
    const inputValue = searchBarInputEl.value.replace(' ', '+')
    // console.log(`http://www.omdbapi.com/?apikey=f8f2dd17&t=${inputValue}`)
    
    fetch(`httpS://www.omdbapi.com/?apikey=${apiKey}&t=${inputValue}`)
        .then(res => res.json())
        .then(data => console.log(data))
})