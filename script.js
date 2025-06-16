/* Sepete ekle ve Satın Al butonlarını aktifleştir */
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.product').forEach(prod => {
    let sepete = prod.querySelector('.sepete-ekle');
    let satinAl = prod.querySelector('.satin-al');

    if (sepete) {
      sepete.addEventListener('click', e => {
        e.preventDefault();
        alert(prod.querySelector('p').innerText + " sepete eklendi!");
      });
    }
    if (satinAl) {
      satinAl.addEventListener('click', e => {
        e.preventDefault();
        alert(prod.querySelector('p').innerText + " satın alma işlemi başlatıldı!");
      });
    }
  });
});
function loadCategory(cat) {
  const data = {
    klavye: [
      {title: 'Gaming Klavye', img: 'https://raw.githubusercontent.com/sNas61/Fraggear/main/IMG_0569.png'}
    ],
    mouse: [
      {title: 'Gaming Mouse', img: 'https://raw.githubusercontent.com/sNas61/Fraggear/main/IMG_0570.webp'}
    ],
    mousepad: [
      {title: 'Gaming Mousepad', img: 'https://raw.githubusercontent.com/sNas61/Fraggear/main/IMG_0576.jpeg'}
    ]
  };
  document.getElementById('cat-title').innerText = cat.toUpperCase();
  const container = document.getElementById('cat-products');
  container.innerHTML = '';
  data[cat].forEach(p => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
      <img src="${p.img}" alt="${p.title}">
      <p>${p.title}</p>
      <a href="#" class="btn sepete-ekle">Sepete Ekle</a>
      <a href="#" class="btn satin-al">Satın Al</a>
    `;
    container.appendChild(div);
  });
  showSection('category-page');
  /* Buton eventlerini tekrar ata */
  document.querySelectorAll('.product').forEach(prod => {
    let sepete = prod.querySelector('.sepete-ekle');
    let satinAl = prod.querySelector('.satin-al');

    if (sepete) {
      sepete.addEventListener('click', e => {
        e.preventDefault();
        alert(prod.querySelector('p').innerText + " sepete eklendi!");
      });
    }
    if (satinAl) {
      satinAl.addEventListener('click', e => {
        e.preventDefault();
        alert(prod.querySelector('p').innerText + " satın alma işlemi başlatıldı!");
      });
    }
  });
}
