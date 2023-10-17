//* ===================================================
//*                 Checkout Page Solution
//*  map filter, dest,spread ===================================================
//!table da kullanılacak değişkenler
const kargo = 15.0;
const vergi = 0.18;

let sepettekiler = [
  { name: "Vintage Backpack", price: 34.99, adet: 1, img: "./img/photo1.png" },
  { name: "Levi Shoes", price: 40.99, adet: 1, img: "./img/photo2.png" },
  { name: "Antique Clock", price: 69.99, adet: 1, img: "./img/photo3.jpg" },
];

//!EKRANA BASTIR

sepettekiler.forEach((urun) => {
  //!DESTRUCTURİNG
  const { name, price, adet, img } = urun;

  document.querySelector("#urun-rowlari").innerHTML += `
<div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-lg-3 col-md-5">
      <img src=${img} class=" w-100 rounded-start" alt="..." />
    </div>

    <div class="col-md-7 ">
      <div class="card-body">
        <h5 class="card-title">${name}</h5>

        <div class="ürün-price">
          <p class="text-warning h2">
            $<span class="indirim-price">${(price * 0.7).toFixed(2)}</span>
            <span class="h5 text-dark text-decoration-line-through">${price}</span>
          </p>
        </div>

        <div class="border border-1 border-dark shadow-lg d-flex justify-content-center p-2">
          <div class="adet-controller">
            <button class="btn btn-secondary btn-sm minus">
              <i class="fas fa-minus"></i>
            </button>
            <p class="d-inline mx-4" id="ürün-adet">
             ${adet}
            </p>
            <button class="btn btn-secondary btn-sm plus">
              <i class="fas fa-plus"></i>
            </button>
          </div>
        </div>

        <div class="ürün-removal mt-4">
          <button class="btn btn-danger btn-sm w-100 remove-ürün">
            <i class="fa-solid fa-trash-can me-2"></i>Remove
          </button>
        </div>

        <div class="mt-2">
          Ürün Toplam: $<span class="ürün-toplam">${(
            price *
            0.7 *
            adet
          ).toFixed(2)} </span>
        </div>
      </div>
    </div>
  </div>
</div>`;
});

hesaplaCardTotal();
//!SİLME

sil();

function sil() {
  document.querySelectorAll(".remove-ürün").forEach((btn) => {
    btn.onclick = () => {
      //!ekrandan sildik
      btn.closest(".card").remove();

      //!diziden de sil
      sepettekiler = sepettekiler.filter(
        (ürün) =>
          ürün.name != btn.closest(".card").querySelector("h5").textContent
      );

      console.log(sepettekiler);

      //!hesapla total
      hesaplaCardTotal();
    };
  });
}

//!ADET DEĞİŞTİRME

document.querySelectorAll(".adet-controller").forEach((kutu) => {
  const arti = kutu.lastElementChild;
  const eksi = kutu.firstElementChild;
  // let adet1=kutu.children[1]
  // let adet1=arti.previousElementSibling
  let adet1 = eksi.nextElementSibling;

  //!artiya tıklanınca olacaklar

  arti.onclick = () => {
    //*ekranda değiştirme
    adet1.textContent = +adet1.textContent + 1;

    //* ürüntoplam kısmını güncelle

    adet1.closest(".card").querySelector(".ürün-toplam").textContent =
      adet1.closest(".card").querySelector(".indirim-price").textContent *
      adet1.textContent;
    hesaplaCardTotal();

    //?dizideki adeti güncelle
    sepettekiler = sepettekiler.map((a) => {
      if (a.name == adet1.closest(".card").querySelector("h5").textContent) {
        return { ...a, adet: +adet1.textContent };
      } else {
        return a;
      }
    });

    console.log(sepettekiler);
  };

  //!eksiye tıklanınca olacaklar
  eksi.onclick = () => {
    adet1.textContent = adet1.textContent - 1;
    hesaplaCardTotal();

    //?ürüntoplam kısmını güncelle
    adet1.closest(".card").querySelector(".ürün-toplam").textContent =
      adet1.closest(".card").querySelector(".indirim-price").textContent *
      adet1.textContent;
    hesaplaCardTotal();

    //?dizideki adeti güncelle
    sepettekiler = sepettekiler.map((a) => {
      if (a.name == adet1.closest(".card").querySelector("h5").textContent) {
        return { ...a, adet: +adet1.textContent };
      } else {
        return a;
      }
    });
    console.log(sepettekiler);

    //   //!eğer adet 1 iken tekrar eksi ye basılırsa o ürünü sil (minus butonu Sil fonksiyonuna gitsin parent ını silsin)

    if (adet1.textContent < 1) {
      alert("sileyim mi ");

      adet1.closest(".card").remove();
    }
  };
});

//! BROWSERDAKİ TOTAL i HESAPLAMA
function hesaplaCardTotal() {
  const urunToplam = document.querySelectorAll(".ürün-toplam");

  //!   querySelectorAll(), statik bir NodeList döndürür.
  //!burada netten https://softauthor.com/javascript-htmlcollection-vs-nodelist/ adresinden göster
  // Dizi Değil!
  // Bir NodeList bir dizi gibi görünebilir ama öyle değildir.
  // Bir NodeList içinde döngü yapabilir ve düğümlerine index ine göre başvurabilirsiniz.
  // Ancak, bir NodeList'te push(), pop() veya join() ve reduce gibi Array yöntemlerini kullanamazsınız.

  //?Reduce tam olarak Array istiyor, nodelist yeterli değil
  // console.log(Array.from(urunToplam));

  const araToplam = Array.from(urunToplam).reduce(
    (topl, item) => topl + Number(item.textContent),
    0
  );

  document.querySelector(".aratoplam").textContent = araToplam;

  document.querySelector(".vergi").textContent = (araToplam * vergi).toFixed(2);
  document.querySelector(".kargo").textContent = araToplam > 0 ? kargo : 0;
  document.querySelector(".toplam").textContent =
    araToplam + araToplam * vergi + kargo;
}
