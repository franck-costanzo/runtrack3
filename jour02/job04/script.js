document.addEventListener("DOMContentLoaded", (event) => {

    let textArea = document.getElementById('keylogger');

    document.addEventListener('keypress', function addKey(event){
        textArea.value += event.key;
        if ( document.activeElement === textArea)
        {
            textArea.textContent+=event.key;
        }

    })

})