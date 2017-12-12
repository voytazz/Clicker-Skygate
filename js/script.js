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
    var newGame = document.querySelector(".newGame");

    // CONSTRUCTOR //////////

    function Count(bonus, time) {
        this.bonus = (localStorage.getItem("bonusCookiesCounter")) ? localStorage.getItem("bonusCookiesCounter") : bonus;

        this.time = time;
        this.bonusCount = function () {
            var myInterval = setInterval(function () {
                cookieCounter.innerHTML = counter += bonus;
                cookie.style.transform = "scale(1.0" + Math.floor(Math.random() * 9) + 1 + ")";

            }, time);

            function stop() {
                clearInterval(myInterval);
            }

            newGame.addEventListener("click", function () {
                stop();
            })
        }
    }

    // CONTINUE BONUS LOOP AFTER REFRESH //

    for (var i = 0; i < localStorage.getItem("bonusCookiesCounter"); i++) {
        var continueBonus = new Count(1, 1000);
        continueBonus.bonusCount();
    }


    // COUNTER INCREMENT //

    cookie.addEventListener("click", function () {
        counter++;
        cookieCounter.innerHTML = counter;
        cookie.style.transform = "scale(1.0" + Math.floor(Math.random() * 9) + 1 + ")";

    })

    // SET COUNTERS IN LOCAL STORAGE //

    setInterval(function () {

        if (window.localStorage) {
            localStorage.setItem("Counter", counter);
            localStorage.setItem("cursorCost", cursorCost);
            localStorage.grandmaCost = grandmaCost;
            localStorage.farmCost = farmCost;
            localStorage.bakeryCost = bakeryCost;
            localStorage.mineCost = mineCost;
            localStorage.ownedCursor = ownedCursor;
            localStorage.ownedGrandma = ownedGrandma;
            localStorage.ownedFarm = ownedFarm;
            localStorage.ownedBakery = ownedBakery
            localStorage.ownedMine = ownedMine;
            localStorage.bonusCookiesCounter = bonusCookiesCounter.toFixed(2);

        } else {}
    }, 100);

    // GET ITEMS FROM LOCAL STORAGE //

    var counter = (localStorage.getItem("Counter") ? parseInt(localStorage.getItem("Counter")) : 0);
    cookieCounter.innerHTML = counter;

    var cursorCost = (localStorage.getItem("cursorCost") ? parseInt(localStorage.getItem("cursorCost")) : 20);
    cursorCounter.innerHTML = cursorCost;

    var grandmaCost = (localStorage.getItem("grandmaCost") ? parseInt(localStorage.getItem("grandmaCost")) : 100);
    grandmaCounter.innerHTML = grandmaCost;

    var farmCost = (localStorage.getItem("farmCost") ? parseInt(localStorage.getItem("farmCost")) : 500);
    farmCounter.innerHTML = farmCost;

    var bakeryCost = (localStorage.getItem("bakeryCost") ? parseInt(localStorage.getItem("bakeryCost")) : 5000);
    bakeryCounter.innerHTML = bakeryCost;

    var mineCost = (localStorage.getItem("mineCost") ? parseInt(localStorage.getItem("mineCost")) : 100000);
    mineCounter.innerHTML = mineCost;

    var ownedCursor = (localStorage.getItem("ownedCursor") ? parseInt(localStorage.getItem("ownedCursor")) : 0);
    numberOfCursor.innerHTML = ownedCursor;

    var ownedGrandma = (localStorage.getItem("ownedGrandma") ? parseInt(localStorage.getItem("ownedGrandma")) : 0);
    numberOfGrandma.innerHTML = ownedGrandma;

    var ownedFarm = (localStorage.getItem("ownedFarm") ? parseInt(localStorage.getItem("ownedFarm")) : 0);
    numberOfFarm.innerHTML = ownedFarm;

    var ownedBakery = (localStorage.getItem("ownedBakery") ? parseInt(localStorage.getItem("ownedBakery")) : 0);
    numberOfBakery.innerHTML = ownedBakery;

    var ownedMine = (localStorage.getItem("ownedMine") ? parseInt(localStorage.getItem("ownedMine")) : 0);
    numberOfMine.innerHTML = ownedMine;

    var bonusCookiesCounter = (localStorage.getItem("bonusCookiesCounter") ? parseFloat(localStorage.getItem("bonusCookiesCounter")) : 0);
    cookiesOnSecond.innerHTML = bonusCookiesCounter.toFixed(2);

    // SET NEW GAME //

    newGame.addEventListener("click", function () {

        if (window.localStorage) {

            counter = 0;
            cursorCost = 20;
            grandmaCost = 100;
            farmCost = 500;
            bakeryCost = 5000;
            mineCost = 100000;
            ownedCursor = 0;
            ownedGrandma = 0;
            ownedFarm = 0;
            ownedBakery = 0;
            ownedMine = 0;
            bonusCookiesCounter = 0;

            cookieCounter.innerHTML = 0;
            cursorCounter.innerHTML = 20;
            grandmaCounter.innerHTML = 100;
            farmCounter.innerHTML = 500;
            bakeryCounter.innerHTML = 5000;
            mineCounter.innerHTML = 100000;
            numberOfCursor.innerHTML = 0;
            numberOfGrandma.innerHTML = 0;
            numberOfFarm.innerHTML = 0;
            numberOfBakery.innerHTML = 0;
            numberOfMine.innerHTML = 0;
            cookiesOnSecond.innerHTML = 0;

            clearInterval(stop)

        }
    })

    // HIGHLIGHTING BONUS BUTTONS //

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

    }, 50);

    // CLICK ON CURSOR //

    cursorBonus.addEventListener("click", function () {

        if (counter >= cursorCost) {
            counter -= cursorCost;
            cursorCost += 10;
            bonusCookiesCounter += 1;
            cursorCounter.innerHTML = cursorCost;
            cookiesOnSecond.innerHTML = bonusCookiesCounter.toFixed(2);
            ownedCursor += 1;
            numberOfCursor.innerHTML = ownedCursor;

            var cursor = new Count(1, 1000);
            cursor.bonusCount();

        }
    })

    // CLICK ON GRANDMA //

    grandmaBonus.addEventListener("click", function () {
        if (counter >= grandmaCost) {
            counter -= grandmaCost;
            grandmaCost += 50;
            bonusCookiesCounter += 2;
            grandmaCounter.innerHTML = grandmaCost;
            cookiesOnSecond.innerHTML = bonusCookiesCounter.toFixed(2);
            ownedGrandma += 1;
            numberOfGrandma.innerHTML = ownedGrandma;

            var grandma = new Count(2, 1000);
            grandma.bonusCount();

        }

    })

    // CLICK ON FARM //

    farmBonus.addEventListener("click", function () {
        if (counter >= farmCost) {
            counter -= farmCost;
            farmCost += 100;
            bonusCookiesCounter += 3;
            farmCounter.innerHTML = farmCost;
            cookiesOnSecond.innerHTML = bonusCookiesCounter.toFixed(2);
            ownedFarm += 1;
            numberOfFarm.innerHTML = ownedFarm;

            var farm = new Count(3, 1000);
            farm.bonusCount();

        }

    })

    // CLICK ON BAKERY //

    bakeryBonus.addEventListener("click", function () {
        if (counter >= bakeryCost) {
            counter -= bakeryCost;
            bakeryCost += 2000;
            bonusCookiesCounter += 6;
            bakeryCounter.innerHTML = bakeryCost;
            cookiesOnSecond.innerHTML = bonusCookiesCounter.toFixed(2);
            ownedBakery += 1;
            numberOfBakery.innerHTML = ownedBakery;

            var bakery = new Count(6, 1000);
            bakery.bonusCount();

        }

    })

    // CLICK ON MINE //

    mineBonus.addEventListener("click", function () {
        if (counter >= mineCost) {
            counter -= mineCost;
            mineCost += 5000;
            bonusCookiesCounter += 15;
            mineCounter.innerHTML = mineCost;
            cookiesOnSecond.innerHTML = bonusCookiesCounter.toFixed(2);
            ownedMine += 1;
            numberOfMine.innerHTML = ownedMine;

            var mine = new Count(15, 1000);
            mine.bonusCount();

        }

    })

})
