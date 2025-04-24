var pessoa = {
  nome: "Ayres",
  idade: "34",
};

console.log(pessoa);

var quadrado = {
  lados: 4,
  area: function (lado) {
    return lado * lado;
  },
  perimetro: function (lado) {
    console.log(this.lados);
    return lado * lado;
  },
};

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

console.log(Math.random());

var menu = {
  with: 800,
  height: 50,
  backgroundColor: "#84e",
  metadeHeight() {
    return this.height / 2;
  },
};

menu.backgroundColor = "#000";
menu.color = "blue";

menu.esconder = function () {
  console.log("Escondi");
};

var bg = menu.backgroundColor;
