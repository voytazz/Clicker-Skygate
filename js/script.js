document.addEventListener("DOMContentLoaded", function() { 

    var cookie = document.querySelector(".cookieImg");
    var cookieCounter = document.querySelector(".cookieCounter");
    var cursorBonus = document.querySelector(".cursorBonus");
    var counter = 0;
    
    cookie.addEventListener("click", function() {
        counter++;
        cookieCounter.innerHTML = counter;
    })
    

        

    cursorBonus.addEventListener("click", function() {

        if(counter >= 20) {
    var myiInterval = setInterval(function(){      
        function Count(bonus) {
        this.bonus = bonus;
        this.bonusCount = function () {
            cookieCounter.innerHTML = counter += this.bonus;
            
        }
    }
    var kursor = new Count(1);
    kursor.bonusCount(); }, 1000);
            counter-=20;
        } else {
            
        }
        
    })
    
    
    
})