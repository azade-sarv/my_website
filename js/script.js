const currentPage = window.location.pathname.split('/').pop();

const navLinks = document.querySelectorAll('.nav-icon');

navLinks.forEach(function(link) {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage) {
        link.classList.add('active');
    }
});
