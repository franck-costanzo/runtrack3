document.addEventListener("DOMContentLoaded", (event) => {

    let button = document.querySelector("button[value=filtrer]");
    console.log(button);

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

            //create select const to append options
            const select = document.querySelector('select');

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
    
   
    getData();

    button.addEventListener('click', () => {

        
    })

})