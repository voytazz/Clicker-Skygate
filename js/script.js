document.addEventListener("DOMContentLoaded", function() { 

    var cookie = document.querySelector(".cookie");
    var cookieCounter = document.querySelector(".cookieCounter");
    var counter = 0;
    
    cookie.addEventListener("click", function() {
        counter++;
        cookieCounter.innerHTML = counter;
    })
})