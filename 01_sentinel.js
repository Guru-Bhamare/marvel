const { wolverine } = require('./wolverine.js');
const r = require('raylib')

function setup() {

  const screen = {
    width: 500,
    height: 500,
    FPS: 60,
  }

  const bitmap = wolverine;

  r.InitWindow(screen.width, screen.height, "sentinel");
  r.SetTargetFPS(screen.FPS);

  return bitmap;
}
function draw(bitmap) {

  r.ClearBackground(r.WHITE);
  r.BeginDrawing();
  r.EndDrawing();

}


function loop(bitmap) {
  while (!r.WindowShouldClose()) {
    // no update!
    draw(bitmap);
  }
}

function teardown() {
  r.CloseWindow();
}

function main() {
  const bitmap = setup();
  loop(bitmap);
  teardown();
}

main();
