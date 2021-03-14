var id = null;

function square(){
    var elem = document.getElementById("awooga");
    var count = 0;
    var count2 = 0;
    clearInterval(id);
    id = setInterval(path,10);
    function path(){
        if (count2 == 100)
        {
           if( count == 3)
           {
               count = 0;
               count2 = 0;
           }
           else
           {
               count++;
               count2=0;
           }

        }else
        {
            if(count == 0){
                count2++;
                elem.style.right = count2+'px';
            }else if(count == 1)
            {
                count2++;
                elem.style.top = count2+'px';
            }else if ( count==2)
            {
                count2++;
                elem.style.left = count2+'px';  
            }else if (count == 3)
            {
                count2++;
                elem.style.bottom=count2+'px';
            }
        
        }
        
        
    }
}
