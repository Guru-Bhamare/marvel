const { wolverine } = require('./wolverine.js');
const r = require('raylib')

function setup() {

  const screen = {
    width: 500,
    height: 500,
    FPS: 60,
  }

  const pixel = {
    size: 10,
  }

  const bitmap = wolverine;

  r.InitWindow(screen.width, screen.height, "sentinel");
  r.SetTargetFPS(screen.FPS);

  return { bitmap, screen, pixel };
}

function grayStyle(brightness) {
  return { r: brightness, g: brightness, b: brightness, a: 255 }
}

function draw(world) {
  r.ClearBackground(r.WHITE);
  r.BeginDrawing();

  const bitmap = world.bitmap;
  const pixelSize = world.pixel.size;

  for (let row = 0; row < bitmap.height; row++) {
    for (let column = 0; column < bitmap.width; column++) {

      r.DrawRectangle(column * pixelSize, row * pixelSize, pixelSize, pixelSize, grayStyle(bitmap.points[row][column]))
    }
  }

  r.EndDrawing();

}

function loop(world) {
  while (!r.WindowShouldClose()) {
    // no update!
    draw(world);
  }
}

function teardown(world) {
  r.CloseWindow();
}

function main() {
  const world = setup();
  loop(world);
  teardown();
}

main();
