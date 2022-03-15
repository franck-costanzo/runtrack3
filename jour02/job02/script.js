document.addEventListener("DOMContentLoaded", (event) => {

    let button = document.getElementById('button');

    button.addEventListener('click', function showhide(){

        if (document.getElementById('citation') == null)
        {
            let textContent = document.createTextNode("L'important n'est pas la chute, mais l'atterrissage.");
            let newArticle = document.createElement('article');
            
            newArticle.appendChild(textContent);
            newArticle.id = 'citation';

            let button = document.getElementById('button');
            document.body.insertBefore(newArticle, button);
        }
        else
        {
            let citation = document.getElementById('citation');
            citation.remove();
        }
        

    })


})