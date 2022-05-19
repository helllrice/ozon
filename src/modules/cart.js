const cart = () => {
    const cartBtn = document.getElementById('cart');
    const modal = document.querySelector('.cart');
    const modalClose = modal.querySelector('.cart-close');

    const closeCart = () => {
        modal.style.display = 'none'
    }

    const openCart = () => {
        modal.style.display = 'flex';
    }

    cartBtn.addEventListener('click', openCart)
    modalClose.addEventListener('click', closeCart)
}

export default cart