const jokeDisplay = document.getElementById('joke')
const btn = document.querySelector('button.btn-primary')
const loader = document.getElementById('loading')

function displayLoading() {
    jokeDisplay.textContent=''
    loader.classList.add('display')  
}

function hideLoading() {
    loader.classList.remove('display')  
}

btn.addEventListener("click", function () {
    displayLoading()    
    
    // fetch joke api
    fetch("https://icanhazdadjoke.com/", {
        headers: {
            "Accept": "application/json"
        }
    })
    //obtain joke from api
        .then(function (response) {
            return response.json()
        })
        //inject joke into variable 
        .then(function (data) {
            hideLoading()
            jokeDisplay.textContent = data.joke
        })
});