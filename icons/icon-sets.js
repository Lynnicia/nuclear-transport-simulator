// Icon library for the Nuclear Transport Simulator.
//
// Each entry below adds one choice to the "Icon style" menu.
// "Classic (built in)" is always available and needs no files.
//
//   folder : the subfolder inside icons/ that holds the images
//   name   : the label shown in the menu
//   files  : one image per molecule (SVG or PNG). Leave a molecule out
//            and the classic drawing is used for it.
//   sizes  : (optional) how many pixels wide to draw each icon.
//            Defaults: NLS 15, NES 15, IMP 22, EXP 22, RT 10, RD 10, NTF2 15, SM 7
//
// Molecule keys:
//   NLS  = NLS cargo           NES  = NES cargo
//   IMP  = importin            EXP  = exportin (CRM1)
//   RT   = Ran-GTP             RD   = Ran-GDP
//   NTF2 = NTF2                SM   = small solute
//
// Complexes (importin + cargo, NTF2 + Ran-GDP, etc.) are built automatically
// by layering these icons, so you don't need separate images for them.

window.ICON_SETS = {

  "protein-cartoons": {
    name: "Protein cartoons",
    folder: "protein-cartoons",
    files: {
      NLS:  "nls-cargo.svg",
      NES:  "nes-cargo.svg",
      IMP:  "importin.svg",
      EXP:  "exportin.svg",
      RT:   "ran-gtp.svg",
      RD:   "ran-gdp.svg",
      NTF2: "ntf2.svg",
      SM:   "small-solute.svg"
    },
    sizes: { RT: 12, RD: 12 }
  },

  // To add your own set, put your images in icons/my-icons/,
  // then remove the "//" at the start of each line below.
  // "my-icons": {
  //   name: "My icons",
  //   folder: "my-icons",
  //   files: {
  //     NLS:  "nls-cargo.png",
  //     IMP:  "importin.png"
  //   }
  // },

};
