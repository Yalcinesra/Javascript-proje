// const cardDiv = document.querySelector("#cardDiv");
const cardDiv = document.getElementById("cardDiv");
const btn = document.querySelector(".btn")
const containerDiv = document.querySelector(".container");

// console.log(containerDiv)
// console.log(btn)
// console.log(cardDiv)

// const getRandomUser = () => {
//     fetch("https://randomuser.me/api/").then(res=> res.json())
//     .then(data=> createElem(data.results[0])).catch(err => console.log(err))
// }

const getRandomUser2 = async () => {
    try {
        const response = await fetch("https://randomuser.me/api/");
        console.log(response)
        if(response.ok){
            const data = await response.json();
            createElem(data.results[0])
        }else {
            errorMsg()
        }

    } catch (error) {
        errorMsg()
    }
}

const createElem = (user) => {
    console.log(user)
    console.log(Object.values(user.name))
    const elem = `<div class="card mb-3" style="width: 540px;height:200px;">
    <div class="row g-0">
      <div class="col-md-4" style="height:200px;">
        <img src=${user.picture.large} class="rounded-start w-100 h-100" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body d-flex flex-column justify-content-center align-items-center h-100 ">
          <h5 class="card-title">${Object.values(user.name).join(" ")}</h5>
          <p class="card-text">${user.email}</p>
          <p class="card-text"><small class="text-body-secondary">${user.phone}</small></p>
        </div>
      </div>
    </div>
  </div>`

  cardDiv.innerHTML = elem;

}

const errorMsg = () => {
  containerDiv.innerHTML = `<img src="./error.gif" />`
}

window.addEventListener("load", getRandomUser2)
btn.addEventListener("click",getRandomUser2)