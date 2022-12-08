let counts=setInterval(updated);
        let upto=0;
        function updated(){
            var count= document.getElementById("counter");
            count.innerHTML=++upto;
            if(upto==100)
            {
                clearInterval(counts);
            }

            var count= document.getElementById("counters");
            count.innerHTML=++upto;
            if(upto==142)
            {
                clearInterval(counts);
            }

            var count= document.getElementById("countered");
            count.innerHTML=++upto;
            if(upto==142)
            {
                clearInterval(counts);
            }

            var count= document.getElementById("countereds");
            count.innerHTML=++upto;
            if(upto==142)
            {
                clearInterval(counts);
            }
        }
    

        

        