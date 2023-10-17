let liste=[]
let completed=[]

const addInput = document.querySelector("#todoName");
const todoList = document.querySelector(".list-group");
const todocompleted = document.querySelector(".completed-group");
const todoButton = document.querySelector("#todoAddButton");
const mesaj = document.querySelector(".mesaj");



todoButton.onclick = () => {
  if (!addInput.value) {
    mesaj.textContent = "lütfen bir not giriniz";
  } else if (liste.includes(addInput.value)) {
    return;
  } else {
    liste.push(addInput.value);
    localStorage.setItem("LISTE", JSON.stringify(liste));
    addInput.value = "";
    gosterListe();
  }
};
const gosterListe = () => {
  todoList.textContent = "";

  liste.forEach((todo) => {
    todoList.innerHTML =
      `<li>
    <i class="fa fa-check fa-lg"></i>
    <p>${todo}</p>
    <i class="fa fa-trash fa-lg"></i>
    </li>` + todoList.innerHTML;
  });

  addInput.focus();
  createSilButon();
  createCheckButon();
 
  // completedRefreshButon();
};


const createSilButon = () => {
  document.querySelectorAll(".fa-trash").forEach((a) => {
    a.onclick = () => {
      console.log(a);
      liste = liste.filter(
        (yapilacak) =>
          yapilacak != a.closest("li").querySelector("p").textContent
      );
      a.parentElement.remove();
      localStorage.setItem("LISTE", JSON.stringify(liste));
    };
  });
};
const completedSilButon = () => {
  document.querySelectorAll(".fa-trash").forEach((a) => {
    a.onclick = () => {
      console.log(a);
      completed = completed.filter(
        (yapilacak) =>
          yapilacak != a.closest("li").querySelector("p").textContent
      );
      a.parentElement.remove();
      localStorage.setItem("COMLETED", JSON.stringify(completed));
    };
  });
};

const createCheckButon = () => {
  document.querySelectorAll(".fa-check").forEach(
    (a) =>
      (a.onclick = () => {
        console.log(a);
        todocompleted.innerHTML =
          `<li>
        <i class="fa-solid ref fa-arrows-rotate"></i>
        <p>${a.parentElement.querySelector("p").textContent}</p>
    <i class="fa fa-trash fa-lg"></i>
    </li>` + todocompleted.innerHTML;
    completed.push(a.parentElement.querySelector("p").textContent);

        liste = liste.filter(
          (yapilacak) =>
            yapilacak != a.closest("li").querySelector("p").textContent
        );
        console.log(liste);
        a.parentElement.remove();
       console.log(completed);
  console.log(document.querySelectorAll(".ref"));
completedRefreshButon();
completedSilButon();
      })
  );
  
};

const completedRefreshButon = () => {
  document.querySelectorAll(".fa-arrows-rotate").forEach((a) => {
    a.onclick = () => {
      console.log(a);
      todoList.innerHTML =
        `<li>
      <i class="fa fa-check fa-lg"></i>
      <p>${a.parentElement.querySelector("p").textContent}</p>
      <i class="fa fa-trash fa-lg"></i>
      </li>` + todoList.innerHTML;
      liste.push(a.parentElement.querySelector("p").textContent);

      completed = completed.filter(
        (yapilacak) =>
        yapilacak != a.parentElement.querySelector("p").textContent
      );
      a.parentElement.remove();
  createSilButon();
     
    };
  });
};

gosterListe();