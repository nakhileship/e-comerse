const vara = document.getElementById('bar');
const nav = document.getElementById('navbar')

if (vara) {
    vara.addEventListener('click', () => {
        nav.classList.add('active');
    })
}