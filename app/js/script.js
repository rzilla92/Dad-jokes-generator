const jokeDisplay = document.getElementById('joke');

document.querySelector('button.btn-primary').addEventListener("click", function () {
    // fetch joke api
    fetch("https://icanhazdadjoke.com/", {
        headers: {
            "Accept": "application/json"
        }
    })
    //obtain joke from api
        .then(function (response) {
            return response.json();
        })
        //inject joke into variable 
        .then(function (data) {
            jokeDisplay.textContent = data.joke;
        })
});