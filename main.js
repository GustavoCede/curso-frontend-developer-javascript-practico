const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cartMenuIcon = document.querySelector('.navbar-shopping-cart');
const detailCart = document.querySelector('.product-detail');

const cardsContainer = document.querySelector('.cards-container')

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

// creamos array con objetos
const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="'
});

productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="'
});

productList.push({
    name: 'Computador',
    price: 1120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="'
});

/* 
<div class="product-card">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
<div class="product-info">
    <div>
        <p>$120,00</p>
        <p>Bike</p>
    </div>
    <figure>
        <img src="./icons/bt_add_to_cart.svg" alt="">
    </figure>
</div>
</div> 
*/

// for  para recorrer elementos dentro de mi array productList
// creamos variable product para mi array productList


function renderProducts(arr) {
    
    for (const product of arr) { //elemento

        // Creamos div guardandola en una variable productCart, con la propiedad createElement
        // asemejamos estructura html del cmentario anterior en js 
        const productCard = document.createElement('div'); 
        
        // classList sirve para acceder a la lista de clases de un elemento
        // agrego el nombre de la clase para productCart
        productCard.classList.add('product-card');
    
        // creo elemento imagen 
        const productImage = document.createElement('img');
        // product = {name, price, image}
        
        //atributo src , llamo product.image donde guardamos link dentro de variables de nuestros elementos antes creados 
        productImage.setAttribute('src', product.image);
    
        // productInfoFigure.appendChild(productImage);
    
        const productInfo= document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
        
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName= document.createElement('p');
        productName.innerText = product.name;
    
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        // Con Element.append() podemos agregar varios nodos y texto mientras que con Element.appendChild() solo podemos agregar un nodo.
        // productInfoDiv.append(productPrice, productName)
    
        const  productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement ('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg' );
        // 
        productInfoFigure.appendChild(productImgCart);
    
    
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImage);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);

// for (const key in object) { //indice
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }
