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
