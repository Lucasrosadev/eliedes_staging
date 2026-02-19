// ===== Mostrar animação quando aparece na tela (Intersection Observer) =====
const elementosAnimados = document.querySelectorAll('.anim-on-scroll');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.15 });

elementosAnimados.forEach(el => observer.observe(el));


// ===== Botão VER TUDO =====
const btnVerTudo = document.getElementById('btnVerTudo');
const gridBaixo = document.getElementById('gridBaixo');

let aberto = false; // começa FECHADO

btnVerTudo.addEventListener('click', () => {
  aberto = !aberto;

  if (aberto) {
    gridBaixo.style.display = 'grid';
    btnVerTudo.textContent = 'OCULTAR';
  } else {
    gridBaixo.style.display = 'none';
    btnVerTudo.textContent = 'VER TUDO';
  }
});


// ===== Clique no card -> WhatsApp =====
const cards = document.querySelectorAll('.card-produto');
const numeroWhatsApp = '5517997370884';

cards.forEach(card => {
  card.addEventListener('click', () => {
    const produto = card.dataset.produto || "Cardápio";

    const mensagem = `Olá! Tenho interesse em: ${produto}`;
    const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

    window.open(linkWhatsApp, '_blank', 'noopener,noreferrer');
  });
});
