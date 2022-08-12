let z = new ComplexNumber(0, 0);
let CANVAS = 800;
let NSCAN = 50;
let THRESH = 2.5;
let CACHE = {};

function setup() {
  createCanvas(CANVAS, CANVAS);
  loadPixels();
  pixelDensity(1);
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let pix = (x + y * width) * 4;
      colorPixel(51, pix);
    }
  }
  mandelbrot();
  updatePixels();
}

function mandelbrot() {
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let counter = 0;
      z = new ComplexNumber(0, 0);

      let xx = readCache(x, width);
      let yy = readCache(y, height);
      let c = new ComplexNumber(xx, yy);

      let pix = (x + y * width) * 4;

      while (counter < NSCAN) {
        z = z.square().add(c);
        counter++;

        if (z.compare(THRESH)) {
          break;
        }
      }

      if (z.compare(THRESH)) {
        colorPixel(0, pix);
      } else {
        colorPixel(255, pix);
      }
    }
  }
}

function colorPixel(c, pix) {
  pixels[pix + 0] = c;
  pixels[pix + 1] = c;
  pixels[pix + 2] = c;
  pixels[pix + 3] = 200;
}

function readCache(i, range) {
  let val = CACHE[`${i}-${range}`];
  if (!val) {
    val = map(i, 0, range, THRESH * -1, THRESH);
    CACHE[`${i}-${range}`] = val;
  }
  return val;
}
