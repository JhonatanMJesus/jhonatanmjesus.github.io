document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu-item');

    // Função para definir o item ativo
    function setActiveLink(event) {
        menuItems.forEach(item => item.classList.remove('active'));
        event.target.classList.add('active');
    }

    // Adiciona o evento de clique para cada item do menu
    menuItems.forEach(item => item.addEventListener('click', setActiveLink));

    // Define o primeiro item como ativo por padrão
    if (menuItems.length > 0) {
        menuItems[0].classList.add('active');
    }
});