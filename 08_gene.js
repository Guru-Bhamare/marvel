function draw(bitmap) {}

function teardown() {
  r.CloseWindow();
}

function loop(bitmap) {
  while (!r.WindowShouldClose()) {
    // no update!
    draw(bitmap);
  }
}

function setup() {
  const bitmap = {};
  return bitmap;
}

function main() {
  const bitmap = setup();
  loop(bitmap);
  teardown();
}

main();
