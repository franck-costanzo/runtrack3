document.addEventListener("DOMContentLoaded", (event) => {

    let button = document.getElementById('button');

    button.addEventListener('click', function addOne(){
        let p = document.getElementById('compteur');
        p.textContent++;
    })



})