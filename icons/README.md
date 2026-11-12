# Icon library

This folder holds the icon sets for the simulator's **Icon style** menu.

```
icons/
├── icon-sets.js          ← list of icon sets (edit this to add one)
├── protein-cartoons/     ← a ready-made set
│   ├── nls-cargo.svg
│   ├── nes-cargo.svg
│   ├── importin.svg
│   ├── exportin.svg
│   ├── ran-gtp.svg
│   ├── ran-gdp.svg
│   ├── ntf2.svg
│   └── small-solute.svg
└── my-icons/             ← empty folder for your own set
```

## Adding your own icon set

1. Put your images in `icons/my-icons/`, or in a new folder with any name you like.
2. Open `icon-sets.js` and remove the `//` from the start of each line in the `"my-icons"` example.
3. List one image file for each molecule you want to replace. Any molecule you leave out keeps its classic drawing.
4. Reload the simulator and choose your set from **Icon style**.

## Tips for good icons

- **Use square images** with transparent backgrounds. SVG stays sharp at any size; PNG works too (128 × 128 px is plenty).
- **Have importin and exportin open to the right.** The simulator rotates them as they tumble and places the cargo inside the opening.
- **Keep shapes bold and simple.** Most icons are drawn only 10–22 pixels wide, so fine detail and small text won't be readable.
- **Change sizes with `sizes`** in `icon-sets.js` if an icon looks too big or too small.
- **Check the license** before using icons from an online library, and credit the source in the main README if required.

## If an icon doesn't show up

- Check that the file name in `icon-sets.js` matches the real file name exactly, including capital letters and the `.svg` or `.png` ending. GitHub Pages is case-sensitive.
- Check that every entry in `icon-sets.js` ends with a comma, and look for a missing quote mark.
- The browser console lists any image it couldn't find.
