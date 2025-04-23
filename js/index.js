document.addEventListener("DOMContentLoaded", function() {
    // Variáveis para o comportamento do cabeçalho
    let lastScrollTop = 0;
    const header = document.querySelector("header");

    // Comportamento de scroll para o cabeçalho
    window.addEventListener("scroll", function() {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        
        if (currentScroll > lastScrollTop) {
            // Se o scroll for para baixo e já passou da metade da tela
            if (currentScroll > window.innerHeight / 2) {
                header.style.top = "-60px";
            }
        } else {
            // Se o scroll for para cima, o cabeçalho aparece novamente
            header.style.top = "0";
        }
        
        // Atualiza a posição do scroll
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });

    // Menu hamburguer para dispositivos móveis
    const menuToggle = document.querySelector('.menu-toggle');
    const botoes = document.querySelector('.botoes');
    
    // Se o menu toggle existir na página
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            botoes.classList.toggle('active');
        });
        
        // Fechar o menu quando clicar em um botão
        const menuButtons = document.querySelectorAll('.botao');
        menuButtons.forEach(button => {
            button.addEventListener('click', function() {
                if (window.innerWidth <= 576) {
                    botoes.classList.remove('active');
                }
            });
        });
        
        // Fechar o menu quando clicar fora dele
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.botoes') && 
                !event.target.closest('.menu-toggle') && 
                botoes.classList.contains('active')) {
                botoes.classList.remove('active');
            }
        });
    }
    
    // Ajustar tamanho de elementos baseado no tamanho da tela
    function adjustElements() {
        const containerImagem = document.querySelector('.container-imagem');
        if (containerImagem) {
            if (window.innerWidth <= 576) {
                containerImagem.style.height = 'auto';
            }
        }
    }
    
    // Executar ajustes iniciais
    adjustElements();
    
    // Ajustar elementos quando a janela for redimensionada
    window.addEventListener('resize', adjustElements);
});