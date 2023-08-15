const toggleMenuButton = document.querySelector('.navigation-icon');
const logo = document.querySelector('.logo');
const menu = document.querySelector('.menu');

toggleMenuButton.addEventListener('click', () => {
    menu.classList.toggle('active');    
    toggleMenuButton.classList.toggle('active');    
    logo.classList.toggle('active');    
});

function sendWhatsAppMessage() {
    const nombre = encodeURIComponent(document.getElementById('name').value);
    const email = encodeURIComponent(document.getElementById('email').value);
    const subject = encodeURIComponent(document.getElementById('subject').value);
    const mensaje = encodeURIComponent(document.getElementById('message').value);

    const text = `Nombre: ${nombre}%0ACorreo: ${email}%0AAsunto: ${subject}%0AMensaje: ${mensaje}`;

    const waLink = `https://wa.me/${5492345400586}?text=${text}`;
        
    window.open(waLink, '_blank');
}