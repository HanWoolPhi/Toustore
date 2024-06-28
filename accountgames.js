// JavaScript untuk filter game berdasarkan input pencarian
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search');
    const gameItems = document.querySelectorAll('.game-item');

    searchInput.addEventListener('input', function () {
        const searchValue = searchInput.value.toLowerCase();

        gameItems.forEach(function (gameItem) {
            const gameName = gameItem.getAttribute('data-name').toLowerCase();

            if (gameName.includes(searchValue)) {
                gameItem.style.display = 'flex'; // Tampilkan game yang cocok
            } else {
                gameItem.style.display = 'none'; // Sembunyikan game yang tidak cocok
            }
        });
    });
});

// accountgames.js
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menuToggle");
    const dropdownMenu = document.getElementById("dropdownMenu");
    const searchInput = document.getElementById("search");
    const gameItems = document.querySelectorAll(".game-item");

    // Toggle dropdown menu
    menuToggle.addEventListener("click", function() {
        dropdownMenu.classList.toggle("show");
    });

    // Filter game items based on search input
    searchInput.addEventListener("input", function() {
        const query = searchInput.value.toLowerCase();
        gameItems.forEach(item => {
            const gameName = item.getAttribute("data-name").toLowerCase();
            if (gameName.includes(query)) {
                item.style.display = "flex"; // Show the game item
            } else {
                item.style.display = "none"; // Hide the game item
            }
        });
    });
});

// JavaScript for handling search
document.getElementById('searchIcon').addEventListener('click', function() {
    const searchInput = document.getElementById('searchInput');
    if (window.innerWidth <= 768) { // Check if it's a mobile device
        searchInput.style.display = searchInput.style.display === 'none' ? 'block' : 'none';
        searchInput.focus(); // Auto focus on the search input when it's displayed
    } else {
        const searchTerm = searchInput.value.toLowerCase();
        const gameItems = document.querySelectorAll('.game-item');
        gameItems.forEach(function(item) {
            const gameDetails = item.querySelector('.game-details h2').textContent.toLowerCase();
            if (gameDetails.includes(searchTerm)) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    }
});

