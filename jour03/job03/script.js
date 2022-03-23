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
        'imgs/8.png',
        ""];

    let imgToSort = [ 
        'imgs/1.png',
        'imgs/2.png',
        'imgs/3.png',
        'imgs/4.png',
        'imgs/5.png',
        'imgs/6.png',
        'imgs/7.png',
        'imgs/8.png',
        ""];

    let imgArr = shuffle(imgToSort);
    let col = document.querySelectorAll('.col');
    console.log(col);

    for(let i=0;i<col.length; i++)
    {
        col[i].src = imgArr[i];        
    }   

    //JQUERY

    //button click resert
    $("#button").click(function(){
        location.reload();
    });

    $('.col').click(function() {

        //get the id of the empty block to be able to only switch between adjacent tiles
        let emptyId;
        for(let i = 0; i< col.length; i++)
        {
            let temp = col[i].src;
            temp = temp.replace(col[i].src.substr(0,59), "");
            console.log(temp);
            if ( temp == "")
            {
                emptyId = i;
            }
        }


        //stock the src of the clicked tile to use it
        let src = $(this).attr('src');
        let id = $(this).attr('id');
        if (id == (emptyId-3) || id == (emptyId-1) || id == (emptyId+1) || id == (emptyId+3))
        {
            col[id].src = "";
            col[emptyId].src = src;
        }
        

        let count = 0;

        for(let i=0;i<col.length;i++)
        {            
            
            let src2 = col[i].src;
            src2 = src2.replace(col[i].src.substr(0,59), "");
            let sortedImgSrc = sortedImgs[i];
            sortedImgSrc = sortedImgSrc.replace(sortedImgs[i].substr(0,5), "");

            if ( src2 === sortedImgSrc){ count++ };
            console.log(count);

            if (count == 9)
            {
                const win = new Audio("sounds/youwin.mp3");
                win.play();
                $('#rangees').after('<img src="imgs/win.gif" class="w-25">');
            }  
        }        

             

    });

});