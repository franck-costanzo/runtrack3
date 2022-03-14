const jourfériés = [
    new Date(2020, 0, 1), new Date(2020, 3, 13), new Date(2020, 4, 1), new Date(2020, 4, 8),
    new Date(2020, 4, 21), new Date(2020, 5, 1), new Date(2020, 6, 14), new Date(2020, 7, 15),
    new Date(2020, 10, 1), new Date(2020, 10, 11), new Date(2020, 11, 25)
]



function jourtravaille(date)
{
    if (date instanceof Date)
    {
        for(i=0; i<jourfériés.length; i++)
        {

            if (date.getDate() === jourfériés[i].getDate() && 
                date.getFullYear() === jourfériés[i].getFullYear() &&
                date.getMonth() === jourfériés[i].getMonth())
            {
                let month = new Date(date.getMonth());
                console.log('le '+ date.getDate() + ' ' + month.toLocaleString('default', { month: 'long' }) 
                            + ' ' +date.getFullYear() + ' est un jour férié !');
                break;
            }

            if (date.getDay() === 0 || date.getDay() === 6)
            {
                let month = new Date(date.getMonth());
                console.log('Non, le '+ date.getDate() + ' ' 
                            + month.toLocaleString('default', { month: 'long' }) 
                            + ' ' +date.getFullYear() + ' est un week-end')
            }
            else
            {
                let month = new Date(date.getMonth());
                console.log('oui, le '+ date.getDate() + ' ' 
                            + month.toLocaleString('default', { month: 'long' }) + ' ' 
                            + date.getFullYear() + ' est un jour travaillé')
            }
        }
    }
    
    else
    {
        console.log('le format de la date est invalide');
    }
}


jourtravaille(new Date(2020, 0, 2));