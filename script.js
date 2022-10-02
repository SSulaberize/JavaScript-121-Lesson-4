let navigationline = document.getElementById ('navigation-bar');
let hamburgerbar = document.getElementById ('burger-bar');
hamburgerbar.addEventListener ('click', function(){
    hamburgerbar.classList.toggle('toggle');
    navigationline.classList.toggle('active');
})