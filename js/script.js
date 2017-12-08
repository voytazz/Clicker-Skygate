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
    var cookiesOnSecond = document.querySelector(".cookiesOnSecond");
    var counter = 0;
    var bonusCookiesCounter = 0;

    cookie.addEventListener("click", function () {
        counter++;
        cookieCounter.innerHTML = counter;
        cookie.style.transform = "scale(1.0" + Math.floor(Math.random() * 9) + 1 + ")";

    })

    setInterval(function () {
        if (counter >= cursorCost) {
            cursorBonus.style.backgroundColor = "#1D2135";
        } else {
            cursorBonus.style.backgroundColor = "rgba(109, 130, 151, 0.3)";
        }

        if (counter >= grandmaCost) {
            grandmaBonus.style.backgroundColor = "#8BA9E1";
        } else {
            grandmaBonus.style.backgroundColor = "lightslategray";
        }


    }, 10);


    function Count(bonus) {
        this.bonus = bonus;
        this.bonusCount = function () {
            cookieCounter.innerHTML = counter += this.bonus;
        }
    }


    var cursorCost = 20;
    var ownedCursor = 0;
    cursorBonus.addEventListener("click", function () {

        if (counter >= cursorCost) {

            counter -= cursorCost;
            cursorCost += 5;
            bonusCookiesCounter += 0.2;
            cursorCounter.innerHTML = cursorCost;
            cookiesOnSecond.innerHTML = bonusCookiesCounter.toFixed(2);
            ownedCursor+=1;
            var kursor = new Count(1);
            kursor.bonusCount();
            setInterval(function () {
                var kursor = new Count(1);
                kursor.bonusCount();

            }, 5000);

        }
    })
    
    
    var grandmaCost = 100;
    var ownedGrandma = 0;
    grandmaBonus.addEventListener("click", function () {
        if (counter >= grandmaCost) {
            counter -= grandmaCost;
            grandmaCost += 10;
            bonusCookiesCounter += 1.25;
            grandmaCounter.innerHTML = grandmaCost;
            cookiesOnSecond.innerHTML = bonusCookiesCounter.toFixed(2);
            ownedGrandma+=1;
            var grandma = new Count(5);
            grandma.bonusCount();
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
            farmCost += 50;
            bonusCookiesCounter += 3.33;
            farmCounter.innerHTML = farmCost;
            cookiesOnSecond.innerHTML = bonusCookiesCounter.toFixed(2);
            var farm = new Count(10);
            farm.bonusCount();
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
            bakeryCost += 1000;
            bonusCookiesCounter += 7.5;
            bakeryCounter.innerHTML = bakeryCost;
            cookiesOnSecond.innerHTML = bonusCookiesCounter.toFixed(2);
            var bakery = new Count(15);
            bakery.bonusCount();
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
            mineCost += 1000;
            bonusCookiesCounter += 20;
            mineCounter.innerHTML = mineCost;
            cookiesOnSecond.innerHTML = bonusCookiesCounter.toFixed(2);
            var mine = new Count(20);
            mine.bonusCount();
            setInterval(function () {
                var mine = new Count(20);
                mine.bonusCount();
            }, 1000);
        }

    })



})
