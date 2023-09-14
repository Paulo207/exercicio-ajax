

// script.js

    document.addEventListener("DOMContentLoaded", function () {
        // URL da API do GitHub para obter os dados do usuário
        const apiUrl = "https://api.github.com/users/Paulo207";
    
        // Função para fazer a requisição Ajax
        function fetchData() {
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
            // Atualizar os elementos HTML com os dados recebidos
            document.getElementById("repoCount").textContent = data.public_repos;
            document.getElementById("followerCount").textContent = data.followers;
            document.getElementById("followingCount").textContent = data.following;
            document.getElementById("githubLink").href = data.html_url;
            document.querySelector(".profile-avatar").src = data.avatar_url;
            document.querySelector(".profile-name").textContent = data.name;
            document.querySelector(".profile-username").textContent = data.login;
            })
            .catch((error) => console.error("Erro ao buscar dados: ", error));
        }
    
        // Chame a função fetchData para buscar os dados quando a página for carregada
        fetchData();
    });