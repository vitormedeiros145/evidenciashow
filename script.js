// Array de fotos
const photos = ['photos/DSC_9568-1.JPG']; // Adicione o caminho completo das fotos aqui

// Função para exibir fotos na galeria
function displayPhotos() {
    const gallery = document.getElementById('gallery');
    photos.forEach(photo => {
        const img = document.createElement('img');
        img.src = photo; // Aqui atribuímos o caminho de cada foto ao atributo src do elemento de imagem
        img.alt = 'Fotografia';
        img.classList.add('gallery-image')
        gallery.appendChild(img);
    });
}

// Chame a função para exibir fotos na galeria
displayPhotos();


// Função para lidar com o envio do formulário de agendamento de sessão fotográfica
document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
   
    
    const formData = new FormData(this);
    for (var pair of formData.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
    }
    alert('Solicitação de agendamento enviada com sucesso!');
});

// Chamar a função para exibir as fotos na galeria quando a página carregar
window.onload = displayPhotos;
