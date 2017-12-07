document.addEventListener("DOMContentLoaded", function () {

    var cookie = document.querySelector(".cookieImg");
    var cookieCounter = document.querySelector(".cookieCounter");
    var cursorBonus = document.querySelector(".cursorBonus");
    var cursorCounter = document.querySelector(".cursorCounter");
    var grandmaBonus = document.querySelector(".grandmaBonus");
    var grandmaCounter = document.querySelector(".grandmaCounter");
    var farmBonus = document.querySelector(".farmBonus");
    var farmCounter = document.querySelector(".farmCounter");
    var bakeryBonus = document.querySelector(".bakeryBonus");
    var bakeryCounter = document.querySelector(".bakeryCounter");
    var mineBonus = document.querySelector(".mineBonus");
    var mineCounter = document.querySelector(".mineCounter");
    var counter = 0;

    cookie.addEventListener("click", function () {
        counter++;
        cookieCounter.innerHTML = counter;
        
    })

    function Count(bonus) {
        this.bonus = bonus;
        this.bonusCount = function () {
            cookieCounter.innerHTML = counter += this.bonus;
        }
    }

    var cursorCost = 20;
    cursorBonus.addEventListener("click", function () {
        
        if (counter >= cursorCost) {
            counter -= cursorCost;
            cursorCost+=5;
            cursorCounter.innerHTML = cursorCost;
            setInterval(function () {
                var kursor = new Count(1);
                kursor.bonusCount();
                
            }, 5000);

        } 
       

    })
    
    var grandmaCost = 100;
    grandmaBonus.addEventListener("click", function () {
        if (counter >= grandmaCost) {
            counter -= grandmaCost;
            grandmaCost+=10;
            grandmaCounter.innerHTML = grandmaCost;
            setInterval(function () {
                var grandma = new Count(5);
                grandma.bonusCount();
            }, 4000);
        }

    })

    var farmCost = 500;
    farmBonus.addEventListener("click", function () {
        if (counter >= farmCost) {
            counter -= farmCost;
            farmCost+=50;
            farmCounter.innerHTML = farmCost;
            setInterval(function () {
                var farm = new Count(10);
                farm.bonusCount();
            }, 3000);
        }

    })
    
    var bakeryCost = 2000;
    bakeryBonus.addEventListener("click", function () {
        if (counter >= bakeryCost) {
            counter -= bakeryCost;
            bakeryCost+=1000;
            bakeryCounter.innerHTML = bakeryCost;
            setInterval(function () {
                var bakery = new Count(15);
                bakery.bonusCount();
            }, 2000);
        }

    })
    
    var mineCost = 100000;
    mineBonus.addEventListener("click", function () {
        if (counter >= mineCost) {
            counter -= mineCost;
            mineCost+=1000;
            mineCounter.innerHTML = mineCost;
            setInterval(function () {
                var mine = new Count(20);
                mine.bonusCount();
            }, 1000);
        }

    })



})
