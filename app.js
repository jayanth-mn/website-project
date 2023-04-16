const hambruger = document.querySelector('.header .navbar .navlist .hamburger');
const mobile_menu = document.querySelector('.header .navbar .navlist ul');
const header = document.querySelector('.header.container');

hambruger.addEventListener('click',()=>{
    hambruger.classList.toggle('active');
    mobile_menu.classList.toggle('active');

});

document.addEventListener('scroll',()=>{
    var scroll_position = window.scrollY;
    if(scroll_position > 350){
        header.style.backgroundColor = "cyan";
        
        
    }
    else{
        header.style.backgroundColor = "transparent";
        
    }
});