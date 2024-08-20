// Passo 1: Obter os elementos do DOM (Document Object Model)
// Obtém o botão "próximo" e "anterior" pelo id
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

// Obtém o elemento principal do carrossel e outros elementos importantes dentro dele
let carouselDom = document.querySelector('.carousel'); // Carrossel principal
let SliderDom = carouselDom.querySelector('.carousel .list'); // Lista de itens do carrossel
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail'); // Contêiner dos thumbnails
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item'); // Todos os itens (thumbnails) dentro do contêiner de thumbnails
let timeDom = document.querySelector('.carousel .time'); // Elemento de tempo do carrossel

// Adiciona o primeiro item dos thumbnails ao contêiner de thumbnails
thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);

// Define o tempo de execução de algumas animações e o tempo automático para o próximo slide
let timeRunning = 3000; // Tempo da animação para mudar o slider
let timeAutoNext = 60000; // Tempo para mudar automaticamente para o próximo slide

// Define a ação quando o botão "próximo" for clicado
nextDom.onclick = function(){
    showSlider('next'); // Chama a função para mostrar o próximo slider
}

// Define a ação quando o botão "anterior" for clicado
prevDom.onclick = function(){
    showSlider('prev'); // Chama a função para mostrar o slider anterior
}

// Variáveis para controlar o tempo da animação e o tempo para o próximo slide automático
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click(); // Dispara automaticamente o clique no botão "próximo" após o tempoAutoNext
}, timeAutoNext);

// Função para mostrar o próximo ou anterior slider
function showSlider(type){
    // Obtém todos os itens atuais do slider e dos thumbnails
    let SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    // Se o tipo for 'next' (próximo)
    if(type === 'next'){
        // Move o primeiro item do slider para o final
        SliderDom.appendChild(SliderItemsDom[0]);
        // Move o primeiro item do thumbnail para o final
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        // Adiciona a classe 'next' ao carrossel para a animação
        carouselDom.classList.add('next');
    } else {
        // Se o tipo for 'prev' (anterior)
        // Move o último item do slider para o início
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        // Move o último item do thumbnail para o início
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        // Adiciona a classe 'prev' ao carrossel para a animação
        carouselDom.classList.add('prev');
    }
    
    // Limpa o timeout anterior e define um novo para remover as classes de animação
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        // Remove as classes 'next' e 'prev' após a animação
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    // Limpa o timeout para o próximo slide automático e redefine para o próximo intervalo
    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click(); // Dispara o clique no botão "próximo" automaticamente
    }, timeAutoNext);
}
