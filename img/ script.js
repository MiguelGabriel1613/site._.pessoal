// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Menu toggle para mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
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
    }
    
    // Efeito de rolagem suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                window.scrollTo({
                    top: targetElement.offsetTop - headerHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Efeito de mudança no header ao rolar
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (header) {
            if (window.scrollY > 50) {
                header.style.boxShadow = '0 2px 25px rgba(0, 0, 0, 0.08)';
                header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
            } else {
                header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.05)';
                header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
            }
        }
    });
    
    // Formulário de contato
    const form = document.querySelector('.formulario');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Coletar dados do formulário
            const nome = form.querySelector('input[type="text"]').value;
            const email = form.querySelector('input[type="email"]').value;
            const mensagem = form.querySelector('textarea').value;
            
            // Validação simples
            if (!nome || !email || !mensagem) {
                alert('Por favor, preencha todos os campos.');
                return;
            }
            
            // Aqui você normalmente enviaria para um backend
            // Por enquanto, apenas mostra um alerta de sucesso
            alert(`Obrigado pela mensagem, ${nome}! Em breve entrarei em contato.`);
            form.reset();
            
            // Animação de sucesso
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = '✓ Mensagem Enviada!';
            submitBtn.style.background = 'linear-gradient(135deg, #10b981, #34d399)';
            
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.style.background = 'linear-gradient(135deg, #1e40af, #3b82f6)';
            }, 3000);
        });
    }
    
    // Adicionar animação de entrada para elementos
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observar elementos para animação
    document.querySelectorAll('.projeto-card, .habilidade-categoria, .dado-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});