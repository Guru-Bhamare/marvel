# Marvel

All commands below are run from the **project root** — the `marvel/` directory that
holds the `.js` files and this README:

```
marvel/            ← project root
├── 01_sentinel.js
├── 02_mirror.js
├── ...
├── 10_cerebro.js
├── wolverine.js
├── .gitignore
└── README.md
```

## Install the raylib package

Run this once, at the root:

```bash
npm install raylib
```

This creates `node_modules/` at the root.

## Wolverine bitmap

`wolverine.js` contains the reference Wolverine bitmap. It exports a `wolverine`
object with `width`, `height`, and `points`. The `points` property is a
two-dimensional array of grayscale brightness values, from `0` (black) to
`255` (white).

Import the bitmap in any assignment file that needs it:

```js
const { wolverine } = require("./wolverine.js");
```

Use it as the source bitmap for displaying or transforming the image. Keep the
original bitmap unchanged when creating transformed versions.

## How to run a program

From the root, pass the file you want to run to `node`:

```bash
node 01_sentinel.js
```

Any of the numbered files works the same way:

```bash
node 03_glass.js
node 06_shadow.js
```

## Keep node_modules in .gitignore

Keep `node_modules/` out of git. Add the below line in `.gitignore` at the root:

```
node_modules/
```
