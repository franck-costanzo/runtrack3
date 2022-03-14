let tempArr = [];
let tempIndex;
let tempValue;

function tri(arr,y)
{
    if (Array.isArray(arr))
    {
        if (y === 'asc')
        {

            for(i=0; i<arr.length; i++)            
            {

                for (j=0; j<arr.length - i - 1; j++)
                {
                    
                    if(arr[j+1] <arr[j])
                    {
                        [arr[j + 1],arr[j]] = [arr[j],arr[j + 1]]
                    }
                    
                }

            }

            console.table(arr);

        }
        else if (y === 'desc')
        {

            for(i=0; i<arr.length; i++)            
            {

                for (j=0; j<arr.length - i - 1; j++)
                {
                    
                    if(arr[j+1] > arr[j])
                    {
                        [arr[j + 1],arr[j]] = [arr[j],arr[j + 1]]
                    }
                    
                }

            }

            console.table(arr);
        }
        else
        {
            console.log("Order is incorrect")
        }
    }
    else
    {
        console.log('first parameter is not an array')
    }
}


let tab1 = [6, 19, 16, 5, 10]
let tab2 =  [1, 20, 15, 14, 4]
let tab3 =  [15, 20, 18, 17, 19]
let tab4 =  [9, 6, 20, 13, 15]
let tab5 =  [14, 10, 16, 17, 5]
let tab6 =  [8, 17, 15, 11, 4]
let tab7 =  [1, 4, 5, 13, 16]
let tab8 =  [4, 19, 11, 17, 1]
let tab9 =  [8, 3, 14, 10, 5]
let tab10 =  [9, 19, 11, 17, 18]


tri(tab10,'desc');
