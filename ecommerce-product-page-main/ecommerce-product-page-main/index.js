// function myFunc(){
    
// };

const img = document.querySelector('.cart-icon')

img.onclick = () => {
    let hero = document.getElementsByClassName('.hero-right');
    let dropdown = document.getElementsByClassName('.cart-dropdown')
    
    if(.classList.contains('dropdown')){
        hero.classList.remove('dropdown');
    };
    else{
        hero.classList.add('dropdown');
    };
};