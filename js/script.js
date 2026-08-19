const currentPage = window.location.pathname.split('/').pop();

const navLinks = document.querySelectorAll('.nav-icon');

navLinks.forEach(function(link) {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage) {
        link.classList.add('active');
    }
});

const title = document.querySelector("h1");
const text = title.textContent;

title.textContent = "";

let i = 0;

function typeWriter() {
    if (i < text.length) {
        title.textContent += text[i];
        i++;
        setTimeout(typeWriter, 100);
    }
}

typeWriter();