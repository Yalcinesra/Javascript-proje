const veriGetir = async () => {
  try {
    const res = await fetch("https://api.tvmaze.com/search/people?q=lauren");

    if (!res.ok) {
      throw new Error(`biraz hata var ${res.status}`);
      console.log("merhaba");
    }
    const veri = await res.json();
    ekranaBastir(veri);
  } catch (error) {
    console.log(error);

    console.log("try-catch sayesinde kod devam ediyor");

    console.log("merhaba");
  }
};

veriGetir();

const ekranaBastir = (data) => {
  const alan = document.querySelector(".row");
  console.log(data);

  data.forEach((eleman) => {
    alan.innerHTML += `
   
    <div class="col col-lg-4">
    
    <div class="card mt-4" style="width: 20rem;">
    
    <img src= ${eleman.person.image.medium} class="rounded mx-auto d-block mt-4"  width=60% />
    <h4 class= mt-4 > Name: <span class="text-danger"> ${eleman.person.name}</span> </h4>
    <ul class="list-group list-group-flush">
         <li class="list-group-item"><i class="fa-solid fa-person"></i>${eleman.person.gender} </li>


          <li class="list-group-item"><i class="fas fa-lg fa-landmark"></i>${eleman.person.country.name} </li>
          
          <li class="list-group-item"><i class="fa-solid fa-cake-candles"></i>${eleman.person.birthday} </li>

      </ul>
     <div class="card-body">
      <a href="#" class="btn btn-primary">Go somewhere</a>
    
  </div>  
  </div>
  </div>

`;
  });
};

