
const dropdowns = document.querySelectorAll('.dropdown');


dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', () => {
        
        dropdown.classList.toggle('open');
    });
});
