document.addEventListener("DOMContentLoaded", function () {

    var cookie = document.querySelector(".cookieImg");
    var cookieCounter = document.querySelector(".cookieCounter");
    var cursorBonus = document.querySelector(".cursorBonus");
    var grandmaBonus = document.querySelector(".grandmaBonus");
    var farmBonus = document.querySelector(".farmBonus");
    var bakeryBonus = document.querySelector(".bakeryBonus");
    var mineBonus = document.querySelector(".mineBonus");
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


    cursorBonus.addEventListener("click", function () {
        if (counter >= 20) {
            counter -= 20;
            setInterval(function () {
                var kursor = new Count(1);
                kursor.bonusCount();
            }, 5000);

        } else {}

    })

    grandmaBonus.addEventListener("click", function () {
        if (counter >= 100) {
            counter -= 100; 
            setInterval(function () {
                var grandma = new Count(5);
                grandma.bonusCount();
            }, 4000);
        }

    })

    farmBonus.addEventListener("click", function () {
        if (counter >= 500) {
            counter -= 500;
            setInterval(function () {
                var farm = new Count(10);
                farm.bonusCount();
            }, 3000);
        }

    })

    bakeryBonus.addEventListener("click", function () {
        if (counter >= 2000) {
            counter -= 2000;
            setInterval(function () {
                var bakery = new Count(15);
                bakery.bonusCount();
            }, 2000);
        }

    })

    mineBonus.addEventListener("click", function () {
        if (counter >= 100000) {
            counter -= 100000;
            setInterval(function () {
                var mine = new Count(20);
                mine.bonusCount();
            }, 1000);
        }

    })



})