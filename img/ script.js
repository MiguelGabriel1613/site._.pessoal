// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Menu toggle para mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
    
    // Fechar menu ao clicar em um link
    const menuLinks = document.querySelectorAll('.menu-link');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
    
    // Efeito de rolagem suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Efeito de mudança no header ao rolar
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if(window.scrollY > 100) {
            header.style.backgroundColor = 'rgba(52, 17, 0, 0.98)';
            header.style.boxShadow = '0 4px 25px rgba(0, 0, 0, 0.5)';
        } else {
            header.style.backgroundColor = 'rgba(52, 17, 0, 0.95)';
            header.style.boxShadow = '0 4px 25px rgba(0, 0, 0, 0.4)';
        }
    });
    
    // Formulário de contato
    const form = document.querySelector('.formulario');
    if(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Aqui você pode adicionar lógica para enviar o formulário
            // Por enquanto, apenas mostra um alerta
            alert('Obrigado pela mensagem! Em breve entrarei em contato.');
            form.reset();
        });
    }
});