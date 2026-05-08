const manager = TicketManager.instance(); //só instanciei uma vez dentro da variavél manager 

const view  = new TicketView("status");
manager.AddObserver(view);

const movies = [

    MovieFactory.create("Super Mário galaxy", "img/Mario.jpg", "Animação","99 minutos" ),
    MovieFactory.create("Michael Jackson o filme", "img/MichaelJackson.jpg", "Documentario", "130 minutos" ),
    MovieFactory.create("Diabo veste prada", "img/DiaboVestePrada.jpg", "Comédia", "121 minutos")
    
]


    const container = document.getElementById("movies"); // adiciona na div vazia do html



movies.forEach(movie => {


    const card = document.createElement("div");
    card.classList.add("card-filme");

    const title = document.createElement("h3");
    title.innerText = movie.name;

    const img = document.createElement("img");
    img.src = movie.image;

    img.addEventListener("click", () => {
        openFilm(movie);
    });

    const gender = document.createElement("h3");
    gender.innerText = movie.gender;
    const duration = document.createElement("h4");
    duration.innerText = movie.duration;
   

    
    card.appendChild(title);
    card.appendChild(img);
    card.appendChild(gender);
    card.appendChild(duration);


    container.appendChild(card);
});

function openReserve() {
document.getElementById("modal-reserve").style.display = "flex";

}

function closeReserve() {
  document.getElementById("modal-reserve").style.display = "none";
}

function openFilm(movie) {
    document.getElementById("modal-title").textContent = movie.name;
    document.getElementById("modal-img").src = movie.image;
    document.getElementById("modal-desc").textContent = movie.description;
    document.getElementById("modal-film").style.display = "flex";
    
}

function closeFilm(){
    document.getElementById("modal-film").style.display = "none";
}