const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cartMenuIcon = document.querySelector('.navbar-shopping-cart');
const detailCart = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu); 
menuHamIcon.addEventListener('click', toggleMobileMenu); 
cartMenuIcon.addEventListener('click', toggleCartDetail);

function toggleDesktopMenu(){
    const detailCartClose = detailCart.classList.contains('inactive');
    if (!detailCartClose) {
        detailCart.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}


function toggleMobileMenu(){
    const detailCartClose = detailCart.classList.contains('inactive');
    if (!detailCartClose) {
        detailCart.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleCartDetail() {
    const mobileMenuClose = mobileMenu.classList.contains('inactive');
    const desktopMenuClose = desktopMenu.classList.contains('inactive'); 

    // if (!mobileMenuClose) {
    //     mobileMenu.classList.add('inactive');
    // }
    // // si mobileMenu esta open, hay que cerrarlo

    // // detailCart.classList.toggle('inactive');
    // if (detailCartClose){
    //     // abrimos aside "detailCartClose"

        
    // }else{
    //     detailCart.classList.add('inactive');
    // }

    if (!mobileMenuClose || !desktopMenuClose) {
        mobileMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');
    }
    detailCart.classList.toggle('inactive');

}
