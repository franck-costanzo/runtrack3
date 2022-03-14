function isPrime(num) {

    if (num === 2) 
    {
      return true;
    } 
    else if (num > 1) 
    {
        for (var i = 2; i < num; i++) 
        {
            if (num % i !== 0) 
            {
                return true;
            } 
            else if (num === i * i) 
            {
            return false
            } 
            else 
            {
            return false;
            }
        }
    } 
    else 
    {
      return false;
    }
  
  }

function sommenombrespremiers( x, y )
{
    if( isPrime(x) && isPrime(y))
    {
        console.log(x + y);
    }
    else
    {
        console.log(false);
    }
}

sommenombrespremiers(1,5)