let currentIndex = 0;

function moveCarousel(direction, carouselClass) {
    const carouselInner = document.querySelector(`${carouselClass}-inner`);
    const totalItems = document.querySelectorAll(`${carouselClass} .game, ${carouselClass} .soulslike-game`).length;
    const itemsPerView = Math.floor(carouselInner.parentElement.clientWidth / document.querySelector(`${carouselClass} .game, ${carouselClass} .soulslike-game`).clientWidth);
    
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = 0;
    } else if (currentIndex > totalItems - itemsPerView) {
        currentIndex = totalItems - itemsPerView;
    }
    carouselInner.style.transform = `translateX(-${currentIndex * (100 / itemsPerView)}%)`;
}

function openLoginModal() {
    document.getElementById('loginModal').style.display = 'block';
}

function closeLoginModal() {
    document.getElementById('loginModal').style.display = 'none';
}

function handleLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username && password) {
        document.getElementById('loginBtn').style.display = 'none';
        document.getElementById('logoutBtn').style.display = 'block';
        alert(`Bem-vindo, ${username}!`);
        closeLoginModal();
    } else {
        alert('Por favor, insira um nome de usuário e senha.');
    }
}

function handleLogout() {
    document.getElementById('loginBtn').style.display = 'block';
    document.getElementById('logoutBtn').style.display = 'none';
    alert('Você saiu com sucesso.');
}

let installedGames = []; // Array para armazenar jogos instalados (simulação)

function handleInstallClick(gameId) {
    // Simulando a instalação do jogo
    installedGames.push(gameId);
    
    // Esconder botão Instalar e mostrar botão Jogue agora
    document.getElementById(`installBtn${gameId}`).style.display = 'none';
    const playNowBtn = document.getElementById(`playNowBtn${gameId}`);
    playNowBtn.style.display = 'inline-block';
    playNowBtn.style.backgroundColor = '#4CAF50'; // Altera a cor do botão Jogue agora
}

function handlePlayNowClick(gameId) {
    // Lógica para ação de "Jogar agora"
    alert(`Iniciando o jogo ${gameId}...`);
}

