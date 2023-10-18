//https://www.themealdb.com/
let showList=[];
fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
  .then((response) => response.json())
  .then((veri) =>{
  showList=veri
  ekranaBastir(showList.meals)});

function ekranaBastir(data){
    const food=document.querySelector(".food")
    food.innerHTML=""
    data.forEach((w)=> {
        food.innerHTML+=`
        <div class="col-md-3 m-1" >
        <p>${w.strMeal}</p>
        <img  src=${w.strMealThumb} />
        </div>`
        
    });
}

document.querySelector("#ara").oninput=(e)=>{
    // document.querySelector("#ara").value
const veri= showList.meals.filter((a)=>a.strMeal.toLowerCase().includes(e.target.value.toLowerCase()))
ekranaBastir(veri)
}

document.querySelectorAll(".ülke").forEach((country)=>country.onclick=()=>{
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country.id}`)
    .then((res) => res.json())
    .then((veri) =>ekranaBastir(veri.meals));
})
