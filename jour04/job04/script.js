document.addEventListener("DOMContentLoaded", (event) => {

    //DATA
    const button = document.getElementById('update');    
    const body = document.querySelector('body');
    const table = document.querySelector('table');


    //EVENT
    button.addEventListener('click', () => {
        async function getData(){
            await fetch('user.php')
            .then( (response) => response.json() )
            .then( (response) => {
                console.table(response);
                let tbody = document.createElement('tbody');
                table.appendChild(tbody);
                for(let i = 0; i<Object.keys(response).length ;i++)
                {
                    let tRow = document.createElement('tr');
                    tbody.appendChild(tRow);
                    let data = (response[i]);
                    Object.keys(data).forEach(function(key) {
                        let tDiv = document.createElement('td');
                        tDiv.innerHTML = JSON.stringify(data[key]);
                        tRow.appendChild(tDiv);
                        console.log('Key : ' + key + ', Value : ' + JSON.stringify(data[key]))
                    })
                }
            }) 
        }
        
        getData();
    })

})