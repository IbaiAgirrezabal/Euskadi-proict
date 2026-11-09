// Nere banderan kolore maiteak
const gorria = "#e42113";
const berdia = "#14be63";
const txuria = "#FFFFFF";

let bandera;

function crearBandera(tamaño) {
  let lienzo = createGraphics(tamaño, tamaño);

  // Fondo rojo
  lienzo.background(gorria);

  // Cruz verde diagonal (Aspa de San Andrés)
  lienzo.stroke(berdia);
  lienzo.strokeWeight(tamaño * 0.08);
  lienzo.line(0, 0, tamaño, tamaño);
  lienzo.line(tamaño, 0, 0, tamaño);

  // Cruz blanca vertical y horizontal
  lienzo.stroke(txuria);
  lienzo.strokeWeight(tamaño * 0.14);
  lienzo.line(tamaño / 2, 0, tamaño / 2, tamaño);
  lienzo.line(0, tamaño / 2, tamaño, tamaño / 2);

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
