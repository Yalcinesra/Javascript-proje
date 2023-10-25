//* ======================================================
//*                     IOS CALCULATOR
//* ======================================================
const numberButtons = document.querySelectorAll(".num");
const operationButtons = document.querySelectorAll(".operator");
const equalButtons = document.querySelector(".equal");
const acButtons = document.querySelector(".ac");
const pmButtons = document.querySelector(".pm");
const percentButtons = document.querySelector(".percent");
const ustEkran = document.querySelector(".previous-display");
const altEkran = document.querySelector(".current-display");



//?operator değişkenleri
let ustEkranYazi = "";
let altEkranYazi = "";

let islem = "";

// //?eşittir yada percent e basıldıktan sonra yeni işleme yeni sayılar girmek için, tıklandı tıklanmadı boolean değişkeni hazırladık, eşittir (ve de percent) butonunda bu true yani tıklandı olacak
// let esittirPressed=false



numberButtons.forEach((number) => {
  number.onclick = () => {

    ekranaHazirlik(number.textContent);

    updateEkran();
  };
});


const ekranaHazirlik = (num) => {
  

// // //?kullanıcı 0 girerse, sonrasında 0 ve . dışında bir sayı girerse, ekranda sadece girilen yeni sayı (0 iptal olsun) gözüksün
//  if(altEkranYazi=="0" && num !=="0"&& num !==".")
// {
//   altEkranYazi = num;
//   // bu döngüden çık bu işini globaldeki değişkeni değiştirerek bitirdi ama bişey döndürmeyecek
//   return;
// }


//?kullanıcı herhangi bir yerde . girmişken, tekrar nokta girmeye kalkarsa giremesin

if(num==="." && altEkranYazi.includes(".")) return

//?kullanıcı 10 haneden sonra girmesin

if(altEkranYazi.length > 9) return



//?kullanıcı ilk başta 0 girer ardından tekrar 0 girerse, girilmesin, tek 0 döndürsün

  if(altEkranYazi==="0" && num==="0") return

// //?eşittir yada percent a basıldıktan sonra girilen number tek başına ekranda görünsün,çünkü yeni işlem başlıyor(ekranda 72 yazan işlem sonucu varken 5 e basınca 725 olmasın)

// if(esittirPressed==true){
// esittirPressed=false
//   altEkranYazi=num
//   return
// }


//?bütün şartları başarı ile geçtiyse basılan numaraları arka arkaya ekle
altEkranYazi += num;
}

//?BURADA YAPILANLARI EKRANA BASTIRMA
const updateEkran = () => {



  altEkran.textContent = altEkranYazi;
  //? işlem sonucu 8 haneyi geçmesin

  //?işlem girilince

 if (islem) {
   ustEkran.textContent = `${üstEkranYazi}  ${işlem}`;
 } else {
   ustEkran.textContent = "";
 }


 
};


//?herhangi bir işleme tıklandığında

operationButtons.forEach((op)=>{

  op.onclick=()=>{

//?altekran boşken, hiçbir şekilde sayı girişi yapılmamışsa, operatöre basılmasın. boş return yapmaya çalıştığınız işlemi yaptırmaz.
//? return fonksiyon içerisinde her yerde kullanılabilir. Kod return satırına eriştiğinde fonksiyon durur ve değer fonksiyonun çağırıldığı yere geri gönderilir. Bir fonksiyon içerisinde birden fazla return fonksiyonu da olabilir. return değer döndürmek zorunda değildir.

if(altEkranYazi==="") return ;


    //?eşittire basılmadan arka arkaya işleme basılırsa (alt ve üst ekran doluyken işleme basılmaya devam edilirse)
   if(altEkranYazi && ustEkranYazi) hesapla()


    islem = op.textContent;

    ustEkranYazi = altEkranYazi;

    altEkranYazi = "";
    updateEkran();
  }
})



//?eşittir butonuna tıklandığında

equalButtons.onclick=()=>{

  hesapla()
updateEkran()
// esittirPressed=true

}

const hesapla=()=>{
let sonuc;
switch (islem) {
  case "+":
   sonuc= +ustEkranYazi + Number(altEkranYazi);
    break;
  case "-":
   sonuc= ustEkranYazi - altEkranYazi;
    break;

  case "x":
  sonuc=  ustEkranYazi * altEkranYazi;
    break;
  case "÷":
  sonuc=  ustEkranYazi / altEkranYazi;
    break;

  default:
    return;
}

 altEkranYazi=sonuc

ustEkranYazi=""
islem=""
}





//?AC butonuna basıldığında ekranlar temizlensin

//? pm butonuna basıldığında altekrandaki sayının işareti değişsin -1 ile çarpma

//?% ye basılınca altekrandaki sayı 100 e bölünsün
