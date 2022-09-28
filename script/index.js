var tipos = new Array(
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.5, 0, 1, 1, 0.5, 1, 1], // normal
  [1, 0.5, 0.5, 1, 2, 2, 1, 1, 1, 1, 1, 2, 0.5, 1, 0.5, 1, 2, 1, 1], // fuego
  [1, 2, 0.5, 1, 0.5, 1, 1, 1, 2, 1, 1, 1, 2, 1, 0.5, 1, 1, 1, 1], // agua
  [1, 1, 2, 0.5, 0.5, 1, 1, 1, 0, 2, 1, 1, 1, 1, 0.5, 1, 1, 1, 1], // electrico
  [1, 0.5, 2, 1, 0.5, 1, 1, 0.5, 2, 0.5, 1, 0.5, 2, 1, 0.5, 1, 0.5, 1, 1], // hierba
  [1, 0.5, 0.5, 1, 2, 0.5, 1, 1, 2, 2, 1, 1, 1, 1, 2, 1, 0.5, 1, 1], // hielo
  [2, 1, 1, 1, 1, 2, 1, 0.5, 1, 0.5, 0.5, 0.5, 2, 0, 1, 2, 2, 0.5, 1], // lucha
  [1, 1, 1, 1, 2, 1, 1, 0.5, 0.5, 1, 1, 1, 0.5, 0.5, 1, 1, 0, 2, 1], // veneno
  [1, 2, 1, 2, 0.5, 1, 1, 2, 1, 0, 1, 0.5, 2, 1, 1, 1, 2, 1, 1], // tierra
  [1, 1, 1, 0.5, 2, 1, 2, 1, 1, 1, 1, 2, 0.5, 1, 1, 1, 0.5, 1, 1], // volador
  [1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 0.5, 1, 1, 1, 1, 0, 0.5, 1, 1], // psiquico
  [1, 0.5, 1, 1, 2, 1, 0.5, 0.5, 1, 0.5, 2, 1, 1, 0.5, 1, 2, 0.5, 0.5, 1], // bicho
  [1, 2, 1, 1, 1, 2, 0.5, 1, 0.5, 2, 1, 2, 1, 1, 1, 1, 0.5, 1, 1], // roca
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 0.5, 1, 1, 1], // fantasma
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 0.5, 0, 1], // dragon
  [1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 2, 1, 1, 2, 1, 0.5, 1, 0.5, 1], // siniestro
  [1, 0.5, 0.5, 0.5, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 0.5, 2, 1], // acero
  [1, 0.5, 1, 1, 1, 1, 2, 0.5, 1, 1, 1, 1, 1, 1, 2, 2, 0.5, 1, 1], // hada
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] // Nada
);

var nombre_tipo = new Array(
  "Normal",
  "Fuego",
  "Agua",
  "Electrico",
  "Hierba",
  "Hielo",
  "Lucha",
  "Veneno",
  "Tierra",
  "Volador",
  "Psiquico",
  "Bicho",
  "Roca",
  "Fantasma",
  "Dragon",
  "Siniestro",
  "Acero",
  "Hada"
);

var habilidades = new Array(
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // nada
  [1, 0.5, 1, 1, 1, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // sebo
  [1, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // ignifugo
  [1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // levitacion
  [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // absorbe electricidad
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // absorbe agua
  [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // absorbe fuego
  [1, 1.25, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // piel seca
  [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // herbivoro
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // filtro
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // superguarda
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // armadura prisma
  [1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // peluche
  [1, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] // pompa
);
var climas = new Array(
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // nada
  [1, 1.5, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // sequia
  [1, 0.5, 1.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //lluvia
  [1, 1.5, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // ocaso
  [1, 0, 1.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // albor
  [1, 1, 1, 0.5, 1, 0.5, 1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 1, 1, 1] // delta
);

function calculo() {
  var tipo1 = document.querySelector('input[name="tipo1"]:checked').value;
  var tipo2 = document.querySelector('input[name="tipo2"]:checked').value;
  var habilidad = document.querySelector('input[name="hab"]:checked').value;
  var clima = document.querySelector('input[name="clima"]:checked').value;
  var color = [];
  var resultado = [];
  var output;
  var output2;
  var output3;
  var i;

  if (tipo1 != tipo2) {
    for (i = 0; i <= 18; i++) {
      resultado[i] =
        tipos[i][tipo1] *
        tipos[i][tipo2] *
        habilidades[habilidad][i] *
        climas[clima][i];
      if (tipos[i][tipo1] * tipos[i][tipo2] < 2 && habilidad == 10) {
        resultado[i] = 0;
      }
      if (tipos[i][tipo1] * tipos[i][tipo2] >= 2 && habilidad == 9) {
        resultado[i] = resultado[i] * 0.75;
      }
      if (tipos[i][tipo1] * tipos[i][tipo2] >= 2 && habilidad == 11) {
        resultado[i] = resultado[i] * 0.75;
      }
      resultado[i] == 0
        ? (color[i] = "inmune")
        : resultado[i] < 0.5
        ? (color[i] = "resiste2")
        : resultado[i] > 2
        ? (color[i] = "debil2")
        : resultado[i] < 1
        ? (color[i] = "resiste")
        : resultado[i] > 1
        ? (color[i] = "debil")
        : (color[i] = "neutro");
    }
    output = '<div class="tabla">';
    for (i = 0; i <= 17; i++) {
      output +=
        "<div class='total'><div class='tipe'><h5>" +
        nombre_tipo[i] +
        "</h5></div>";
      output +=
        '<div class="dano"><h5 class="' +
        color[i] +
        ' numero">x' +
        resultado[i] +
        "</h5></div></div>";
    }
    output += "</div>";

    fetch("https://pokeapi.co/api/v2/type/" + tipo1)
      .then((data) => data.json())
      .then((poke) => {
        creaPoke(poke);
      });
    function creaPoke(poke) {
      let type = poke;
      let pokemon = type.pokemon;
      let i = Math.floor(Math.random() * 100);
      let poke2 = pokemon[i];
      let poke3 = poke2.pokemon;
      var output2;
      console.log(poke3);
      output2 = "<div>";
      output2 +=
        "<div class='total total2'><div class='tipe2'><h5>" +
        type.name +
        "</h5></div>";
      output2 += "<div><h5>" + poke3.name + "</h5></div></div>";
      output2 += "</div>";
      const pok = document.createElement("div");
      pok.classList.add("dvd");
      pok.innerHTML = output2;
      document.querySelector("#fetch").innerHTML = "";
      document.querySelector("#fetch").append(pok);
    }
    fetch("https://pokeapi.co/api/v2/type/" + tipo2)
      .then((data) => data.json())
      .then((poke) => {
        creaPoke2(poke);
      });
    function creaPoke2(poke) {
      let type = poke;
      let pokemon = type.pokemon;
      let i = Math.floor(Math.random() * 100);
      let poke2 = pokemon[i];
      let poke3 = poke2.pokemon;
      var output3;
      console.log(poke3);
      output3 = "<div>";
      output3 +=
        "<div class='total total2'><div class='tipe2'><h5>" +
        type.name +
        "</h5></div>";
      output3 += "<div><h5>" + poke3.name + "</h5></div></div>";
      output3 += "</div>";
      const pok2 = document.createElement("div");
      pok2.classList.add("dvd");
      pok2.innerHTML = output3;
      document.querySelector("#fetch2").innerHTML = "";
      document.querySelector("#fetch2").append(pok2);
    }
    const tabla = document.createElement("div");
    tabla.classList.add("borde");
    tabla.innerHTML = output;
    document.querySelector("#resultado").innerHTML = "";
    document.querySelector("#resultado").append(tabla);
  } else {
    document.querySelector("#resultado").innerHTML = "";
    document
      .querySelector("#resultado")
      .append("Tipo Primario y Secundario tienen que ser distintos!");
  }
}
