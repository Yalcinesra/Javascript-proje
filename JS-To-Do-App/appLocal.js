
 let liste = JSON.parse(localStorage.getItem("LISTE")) || [];



let total = 0;
let completed = 0;

const listeInput = document.querySelector("#todo-input");
const listeUl = document.querySelector("#todo-ul");
const listeButon = document.querySelector("#todo-button");
const toplam = document.querySelector("#toplam");



listeButon.onclick = () => {
  if (!listeInput.value) {
    alert("lütfen bir not giriniz");

   
  } else if (liste.includes(listeInput.value)) {
    return;

  } else {
    liste.push(listeInput.value);
    localStorage.setItem("LISTE",JSON.stringify(liste))

    total += 1;

    gosterliste()
    
  }

 
  createSilButon();
  
 
  createCheckButon();
};
const gosterliste=()=>{
    liste.forEach(()=>{
         listeUl.innerHTML =
      `<li class="ayse">
    <i class="fa fa-check fa-lg"></i>
    <p>${liste[liste.length - 1]}</p>
    <i class="fa fa-trash fa-lg"></i>
    </li>` + listeUl.innerHTML;
    })
   
    toplam.textContent = total;
 
   

    listeInput.value = "";

    //? her li girişinde cursor inputta olsun
    listeInput.focus();

}
const createSilButon = () => {
  //?ul deki bütün fa-trash lara ulaş
  document.querySelectorAll(".fa-trash").forEach((a) => {
    a.onclick = () => {
    
      

      liste = liste.filter(
        (yapılacak) =>
          yapılacak != a.closest("li").querySelector("p").textContent
      );

      console.log(liste);
   
      a.parentElement.remove();
      total = total - 1;
      toplam.textContent = total;

      if(a.parentElement.classList.contains("checked")){
        completed-=1;
        document.querySelector("#tamamlanan").textContent=completed
      }
    };
  });
};
const createCheckButon = () => {
  document.querySelectorAll(".fa-check").forEach(
    (a) =>
      (a.onclick = () => {
        if (a.parentElement.classList.contains("checked")) {
          a.parentElement.classList.remove("checked");
          completed-=1;
        } else {
          a.parentElement.classList.add("checked");
          completed+=1;
        }
        document.querySelector("#tamamlanan").textContent=completed
      })
  );
};
gosterliste()