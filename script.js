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


function sendWhatsAppMail() {
    
    const email = encodeURIComponent(document.querySelector('#cta #email').value);    

    const text = `Hola, quiero ponerme en contacto, mi mail es: ${email}`;

    const waLink = `https://wa.me/${5492345400586}?text=${text}`;
        
    window.open(waLink, '_blank');
}

function openModal(imgSrc) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('img01');

    modalImg.src = imgSrc;
    modal.style.display = "flex";
    setTimeout(() => {
        modal.style.opacity = "1";
    }, 10);
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.opacity = "0";
    setTimeout(() => {
        modal.style.display = "none";
    }, 300);
}

document.querySelectorAll('.project-container img').forEach(img => {
    img.addEventListener('click', function() {
        openModal(this.src);
    });
});
