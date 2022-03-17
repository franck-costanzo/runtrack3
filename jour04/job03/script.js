document.addEventListener("DOMContentLoaded", (event) => {
    
    //create select const to append options
    const select = document.querySelector('select');
    const button = document.querySelector("input[value=filtrer]");
    const id = document.querySelector('input[name=id]');
    const nom = document.querySelector('input[name=nom]');
    const body = document.querySelector('body');

    //create set so as to avoid having double values
    let typeSet = new Set()

    async function getData () 
    {        

        await fetch('pokemon.json')
        .then((response) => response.json())
        
        
        .then((response) => {
            
            //getting the size of the response object fields
            for(let i = 0; i<Object.keys(response).length ;i++)
            {   
                //setting a variable containing the field type of each 'object' in the Json file
                let temp = response[i].type;

                //iterate over the variable because it is an array that can contain multiple values
                for( let y = 0; y <temp.length;y++)
                {
                    //add value to set, avoiding duplicate values
                    typeSet.add(temp[y]);
                    
                }                
                
            }          
            
        })
        .then(() => {
            //convert set to array
            let typeArr = Array.from(typeSet);           

            //iterate over type array to add option to select
            for(let i=0; i <typeArr.length;i++)
            {
                let option = document.createElement('option')
                option.value = typeArr[i];
                option.text = typeArr[i];
                select.appendChild(option);
            }
        });
    }
    
    function getPokemonsById(id)
    {
        fetch('pokemon.json')
        .then((response) => response.json())
        .then((response) => {
            //getting the size of the response object fields
            for(let i = 0; i<Object.keys(response).length ;i++)
            {   
                
                if (response[i].id == id)
                {
                    var data = (response[i]);
                    Object.keys(data).forEach(function(key) {
                        let pre = document.createElement('pre');
                        pre.innerHTML = key + ' : ' + JSON.stringify(data[key]);
                        body.appendChild(pre);
                        console.log('Key : ' + key + ', Value : ' + JSON.stringify(data[key]))
                    })
                    
                }
            }
        })
    }
   
    getData();

    button.addEventListener('click', () => {
        let textId = id.value;
        let textNom = nom.value;
        let textSelect = select.value;
        // console.log(textId);

        if (textId.length) 
        {
            console.log('YOUPI KO')
            let tempId = getPokemonsById(textId);
        }
        else if (textNom.length) 
        {
            console.log('youpi nom')
        }

        if (textSelect.length) 
        {
            console.log('youpi select')
        }
        
    })

})