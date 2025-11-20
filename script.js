document.getElementById('year').textContent = new Date().getFullYear();

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: 'smooth'
    });
}

function handleContact(e) {
    e.preventDefault();
    alert('Thanks! This demo form won\'t actually send — replace with your own form endpoint or mailto link.');
}