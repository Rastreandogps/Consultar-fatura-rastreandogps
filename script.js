// Força a página para o topo ao carregar
window.addEventListener('load', () => window.scrollTo(0, 0));

// ano no rodapé
document.getElementById('year').textContent = new Date().getFullYear();

// tracking simples dos cliques no ML (pode trocar por Pixel/GA depois)
const btnMl = document.getElementById('btn-ml');
btnMl?.addEventListener('click', () => {
    try {
        sessionStorage.setItem('ml_click', String(Date.now()));
    } catch (e) {}
});

// rolagem suave para âncoras internas
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        const id = a.getAttribute('href');
        const el = id && document.querySelector(id);
        if(el){
            e.preventDefault();
            el.scrollIntoView({behavior:'smooth', block:'start'});
            history.replaceState(null, '', id);
        }
    });
});