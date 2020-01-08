var l=[1,2,3,4,5,6,7]
function leftRotate(ll,  d,  n) 
    { 
        var i
        for (i = 0; i < d; i++) 
            leftRotatebyOne(ll, n); 
    } 
  
function leftRotatebyOne(ll,  n) 
    { 
        var i, temp; 
        temp = ll[0]; 
        for (i = 0; i < n - 1; i++) 
            ll[i] = ll[i + 1]; 
        ll[i] = temp; 
    } 
  
    /* utility function to print an array */
function printArray(ll,  n) 
    { 
       var i
        for ( i = 0; i < n; i++) 
          return(ll[i] + " "); 
    } 
  leftRotate(l,2,7)
  printArray(l,7)