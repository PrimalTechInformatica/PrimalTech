function toggleMenu() {
    const menu = document.querySelector('.menu');
    const menuToggle = document.querySelector('.menu-toggle');
    menu.classList.toggle('show');
    menuToggle.classList.toggle('active');
}

window.addEventListener('scroll', function() {
    const elementos = document.querySelectorAll('.aparecer');

    elementos.forEach(function(elemento) {
        const position = elemento.getBoundingClientRect().top;
        
        if (position - window.innerHeight <= 0) {
            elemento.classList.add('visivel');
        }
    });
});

function openWhatsApp(servico) {
    const mensagem = `Olá, estou interessado no serviço de *${servico}* da PrimalTech. Gostaria de mais informações!`;
    const numeroWhatsApp = "5532988594878";
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
}
