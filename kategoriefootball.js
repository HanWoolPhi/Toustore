const searchButton = document.getElementById('searchToggle');
const searchInput = document.getElementById('search');

searchButton.addEventListener('click', () => {
    searchButton.classList.toggle('active');
    searchInput.classList.toggle('active');
});