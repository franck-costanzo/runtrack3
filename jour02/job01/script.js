document.addEventListener("DOMContentLoaded", (event) => {

    let button = document.getElementById('button');
    
    button.addEventListener('click', function citation(){
        let citation = document.getElementById('citation');
        console.log(citation.textContent)        
    })


})