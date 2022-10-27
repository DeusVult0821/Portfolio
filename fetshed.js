const duck_result = document.getElementById('duck_result');
const duck_button = document.getElementById('duck_button');

duck_button.addEventListener('click', getRandomDuck)

function getRandomDuck() {
    fetch('https://dog-facts-api.herokuapp.com/api/v1/resources/dogs/all')
    .then(res => res.json())
    .then(data =>{  
        duck_result.innerHTML = `<img src="${data.file}/>`
    })
}




