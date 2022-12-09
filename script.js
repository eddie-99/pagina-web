

//Primero se crea un objeto Javascript con el nombre data
let data = [
    {
        id: "tt5727208",
        titulo: "Uncut Gems",
        director: " Benny Safdie, Josh Safdie",
        anioDeEstreno: 2019,
        paisDeOrigen: ["USA"],
        generos: ["Crime", "Drama", "Thriller"],
        calificacion: 7.4
    },
    {
        id: "tt1379182",
        titulo: "Dogtooth",
        director: "Yorgos Lanthimos",
        anioDeEstreno: 2009,
        paisDeOrigen: ["Greece"],
        generos: ["Drama", "Thriller"],
        calificacion: 7.3
    },
    {
        id: "tt5715874",
        titulo: "The Killing of a Sacred Deer",
        director: "Yorgos Lanthimos",
        anioDeEstreno: 2017,
        paisDeOrigen: ["USA"],
        generos: ["Drama", "Horror", "Mystery"],
        calificacion: 7.0
    },
    {
        id: "tt0903747",
        titulo: "Breaking Bad",
        director: "Vince Gilligan",
        anioDeEstreno: 2008,
        paisDeOrigen: ["USA"],
        generos: ["Crime", "Drama", "Thriller"],
        calificacion: 9.5
    }, 
    {
        id: "tt2861424",
        titulo: "Rick and Morty",
        director: "Dan HarmonJustin, Roiland",
        anioDeEstreno: 2013,
        paisDeOrigen: ["USA"],
        generos: ["Animation", "Adventure", "Comedy"],
        calificacion: 9.1
    }
];

//Segundo, se almacena el objeto en el localStorage.
localStorage.setItem('data', JSON.stringify(data));


//Tercero, se obtienen los valores del localStorage y se guardan en una variable.
let datos = JSON.parse(localStorage.getItem("data"));

//Cuarto, se recorren los elementos y se muestran en el html
datos.forEach(element => {
    let elements = document.getElementById("elementos");
    let li = document.createElement("li");
    li.innerHTML = "id: " + element.id + "<br/>" + "titulo: " + element.titulo +
    "<br/>" + "director: " + element.director + "<br/>" + "año: " + element.anioDeEstreno + 
    "<br/>" + "pais: " + element.paisDeOrigen + "<br/>" + "generos: " + element.generos +
    "<br/>" + "calificación IMDb: " + element.calificacion + "<br/>" + "<br/>";
    elements.appendChild(li);
});