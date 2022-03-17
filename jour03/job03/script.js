$(document).ready(function(){

    //FUNCTIONS    
    
        //shuffle function
        function shuffle(array) 
        {
            let currentIndex = array.length,  randomIndex;
        
            // While there remain elements to shuffle...
            while (currentIndex != 0) 
            {
        
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
        
            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
            }
        
            return array;
        }

    //DATA
    const sortedImgs = [ 
        'imgs/1.png',
        'imgs/2.png',
        'imgs/3.png',
        'imgs/4.png',
        'imgs/5.png',
        'imgs/6.png',
        'imgs/7.png',
        'imgs/8.png'];

    let imgToSort = [ 
        'imgs/1.png',
        'imgs/2.png',
        'imgs/3.png',
        'imgs/4.png',
        'imgs/5.png',
        'imgs/6.png',
        'imgs/7.png',
        'imgs/8.png'];

    let imgArr = shuffle(imgToSort);
    let col = document.querySelectorAll('.col');
    var tempId = 8;
    console.log(col);

    for(let i=0;i<col.length-1; i++)
    {
        col[i].src = imgArr[i];        
    }   

    //JQUERY

    //button click resert
    $("#button").click(function(){
        location.reload();
    });

    $('.col').click(function() {

        //stock the src to use it
        let src = $(this).attr('src');
        let id = $(this).attr('id');
        col[id].src = "";
        col[tempId].src = src;
        tempId = id;
        
        for(let i=0; i<col.length-1;i++)
        {
            console.log(col[i].src);
        }

        let count = 0;
        for(let i=0;i<col.length-1;i++)
        {            
            
            let src = col[i].src;
            src = src.replace(col[i].src.substr(0,40), "");
            let sortedImgSrc = sortedImgs[i];
            sortedImgSrc = sortedImgSrc.replace(sortedImgs[i].substr(0,5), "");
            if ( src === sortedImgSrc){ count++ };
            console.log(count);
            if (count === 8)
            {
                const win = new Audio("sounds/youwin.mp3");
                win.play();
                $('#rangees').after('<img src="imgs/win.gif" class="w-25">');
            }  
        }        

             

    });

});