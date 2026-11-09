// Nere banderan kolore maiteak
const gorria = "#e42113";
const berdia = "#14be63";
const txuria = "#FFFFFF";

let bandera; // bandera variable

// Bandera marrazten duen funtzioa
function crearBandera(tamaño) {
  let lienzo = createGraphics(tamaño, tamaño);

  // Fondo gorria
  lienzo.background(gorria);

  // Berdea
  lienzo.stroke(berdia);
  lienzo.strokeWeight(tamaño * 0.14);
  lienzo.line(0, 0, tamaño, tamaño);
  lienzo.line(tamaño, 0, 0, tamaño);

  // Txuria 
  lienzo.fill(txuria);
  lienzo.rect(tamaño * 0.4, 0, tamaño * 0.2, tamaño);  // bertikala
  lienzo.rect(0, tamaño * 0.4, tamaño, tamaño * 0.2);  // horizontala

  return lienzo;
}

function setup() {
  createCanvas(400, 400, WEBGL);
  bandera = crearBandera(400); 
}

function draw() {
  background(220);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);

  noStroke();
  texture(bandera); 
  box(150);
}