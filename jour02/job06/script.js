document.addEventListener("DOMContentLoaded", (event) => {

    let body = document.querySelector('body');
    let konamiCode = [  'ArrowUp', 'ArrowUp',
                        'ArrowDown', 'ArrowDown',
                        'ArrowLeft', 'ArrowRight',
                        'ArrowLeft', 'ArrowRight',
                        'b','a' ];
    let tempArray = [];
    

    document.addEventListener('keydown', function (event){

        tempArray.push(event.key);
        if (tempArray.length === konamiCode.length)
        {
            let count = 0;
            for(let i=0;i<konamiCode.length;i++)
            {
                if(konamiCode[i] != tempArray[i])
                {
                    break;
                }
                count++;
            }

            if(count === konamiCode.length)
            {
                body.setAttribute('style','background: #336699;');
                let newImg = document.createElement('img');
                newImg.src = "panda.gif";
                body.appendChild(newImg);
                let laplateforme =  document.createElement('img');
                laplateforme.src ="laplateforme.svg";
                body.appendChild(laplateforme);
            }            

        }
        else if (tempArray.length > konamiCode.length)
        {
            location.reload();
        }
        else
        {            
            
            console.table(tempArray);
        
        }

    })

})