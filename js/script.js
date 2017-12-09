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
    var numberOfCursor = document.querySelector(".ownedCursor");
    var numberOfGrandma = document.querySelector(".ownedGrandma");
    var numberOfFarm = document.querySelector(".ownedFarm");
    var numberOfBakery = document.querySelector(".ownedBakery");
    var numberOfMine = document.querySelector(".ownedMine");

    var counter = 0;
    var bonusCookiesCounter = 0;

    cookie.addEventListener("click", function () {
        counter++;
        cookieCounter.innerHTML = counter;
        cookie.style.transform = "scale(1.0" + Math.floor(Math.random() * 9) + 1 + ")";

    })

    setInterval(function () {
        if (counter >= cursorCost) {
            cursorBonus.style.opacity = "1";
        } else {
            cursorBonus.style.opacity = "0.3";
        }

        if (counter >= grandmaCost) {
            grandmaBonus.style.opacity = "1";
        } else {
            grandmaBonus.style.opacity = "0.3";
        }

        if (counter >= farmCost) {
            farmBonus.style.opacity = "1";
        } else {
            farmBonus.style.opacity = "0.3";
        }

        if (counter >= bakeryCost) {
            bakeryBonus.style.opacity = "1";
        } else {
            bakeryBonus.style.opacity = "0.3";
        }

        if (counter >= mineCost) {
            mineBonus.style.opacity = "1";
        } else {
            mineBonus.style.opacity = "0.3";
        }


    }, 30);


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
            ownedCursor += 1;
            numberOfCursor.innerHTML = ownedCursor;
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
            bonusCookiesCounter += 1;
            grandmaCounter.innerHTML = grandmaCost;
            cookiesOnSecond.innerHTML = bonusCookiesCounter.toFixed(2);
            ownedGrandma += 1;
            numberOfGrandma.innerHTML = ownedGrandma;
            setInterval(function () {
                var grandma = new Count(1);
                grandma.bonusCount();
            }, 1000);
        }

    })

    var farmCost = 500;
    var ownedFarm = 0;
    farmBonus.addEventListener("click", function () {
        if (counter >= farmCost) {
            counter -= farmCost;
            farmCost += 50;
            bonusCookiesCounter += 3;
            farmCounter.innerHTML = farmCost;
            cookiesOnSecond.innerHTML = bonusCookiesCounter.toFixed(2);
            ownedFarm += 1;
            numberOfFarm.innerHTML = ownedFarm;
            setInterval(function () {
                var farm = new Count(3);
                farm.bonusCount();
            }, 1000);
        }

    })

    var bakeryCost = 2000;
    var ownedBakery = 0;
    bakeryBonus.addEventListener("click", function () {
        if (counter >= bakeryCost) {
            counter -= bakeryCost;
            bakeryCost += 1000;
            bonusCookiesCounter += 6;
            bakeryCounter.innerHTML = bakeryCost;
            cookiesOnSecond.innerHTML = bonusCookiesCounter.toFixed(2);
            ownedBakery += 1;
            numberOfBakery.innerHTML = ownedBakery;
            setInterval(function () {
                var bakery = new Count(6);
                bakery.bonusCount();
            }, 1000);
        }

    })

    var mineCost = 100000;
    var ownedMine = 0;
    mineBonus.addEventListener("click", function () {
        if (counter >= mineCost) {
            counter -= mineCost;
            mineCost += 1000;
            bonusCookiesCounter += 15;
            mineCounter.innerHTML = mineCost;
            cookiesOnSecond.innerHTML = bonusCookiesCounter.toFixed(2);
            ownedMine += 1;
            numberOfMine.innerHTML = ownedMine;

            setInterval(function () {
                var mine = new Count(15);
                mine.bonusCount();
            }, 1000);
        }

    })



})
