function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function(letra, i){   
    
    setTimeout(function(){
        elemento.innerHTML += letra;
    }, 75 * i)

    });
    }
    const titulo = document.querySelector('.title');
    typeWrite(titulo);

    document.addEventListener('DOMContentLoaded', () => {
        const content = document.getElementById('content');
    
        // Função para carregar o conteúdo da página
        const loadPage = (url) => {
            fetch(url)
                .then(response => response.text())
                .then(html => {
                    // Usar DOMParser para manipular o HTML da nova página
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(html, 'text/html');
                    
                    // Atualizar o conteúdo
                    const newContent = doc.getElementById('content').innerHTML;
                    content.innerHTML = newContent;
                    
                    // Atrasar a adição da classe visible para permitir o efeito de fade-in
                    setTimeout(() => {
                        content.classList.add('visible');
                    }, 50);
                });
        };
    
        // Adicionar evento de clique aos links do menu
        document.querySelectorAll('a.menu-item').forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                const href = link.getAttribute('href');
                
                // Adicionar a classe hidden para fade-out
                content.classList.remove('visible');
                
                // Esperar a transição de fade-out para carregar a nova página
                setTimeout(() => {
                    loadPage(href);
                }, 500); // Tempo correspondente à duração da transição de fade-out
            });
        });
    
        // Inicializar o conteúdo visível
        content.classList.add('visible');
    });