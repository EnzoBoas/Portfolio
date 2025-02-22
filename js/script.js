document.getElementById('menu-toggle').addEventListener('click', function () {
    var aside = document.querySelector('aside');
    aside.classList.toggle('ativo'); // Alterna a classe 'ativo'
});

// Fechar o menu ao clicar fora dele
document.addEventListener('click', function (event) {
    var aside = document.querySelector('aside');
    var menuToggle = document.getElementById('menu-toggle');

    // Verifica se o clique foi fora do menu e do botão de toggle
    if (!aside.contains(event.target) && !menuToggle.contains(event.target)) {
        aside.classList.remove('ativo'); // Remove a classe 'ativo' para fechar o menu
    }
});

// Fecha o menu ao clicar em um item da navegação
document.querySelectorAll('aside a').forEach(item => {
    item.addEventListener('click', function() {
        var aside = document.querySelector('aside');
        aside.classList.remove('ativo');
    });
});


var typed = new Typed(".typing", {
    strings:["", "Desenvolvedor Web"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true,

})

