# Nuclear Transport Simulator

An interactive classroom simulation of nuclear protein import and export. Importins and exportins carry cargo through nuclear pore complexes, powered by the Ran-GTP gradient.

**Run it:** open `index.html` in any web browser, or visit the GitHub Pages link once it's set up (see below).

## What it models

- **Import:** importin binds NLS cargo, enters through a nuclear pore, and Ran-GTP releases the cargo inside the nucleus. Importin + cargo can't leave the nucleus.
- **Export:** exportin (CRM1) binds NES cargo only together with Ran-GTP and carries it out. Ran-GAP releases the cargo in the cytoplasm.
- **Ran cycle:** RCC1 (Ran-GEF) makes Ran-GTP in the nucleus, and Ran-GAP hydrolyzes it in the cytoplasm. NTF2 carries Ran-GDP back into the nucleus.
- **Comparison:** small solutes diffuse freely through the pores.

## Experiments students can run

- Turn RCC1 or Ran-GAP off
- Add leptomycin B (blocks exportin)
- Mutate the NLS
- Change the number of nuclear pores
- Change the amount of each molecule, including NTF2
- Start with the cargo in the wrong compartments

A live chart, a counts table and event counters track the results. The page also includes a "Things to try" question set.

## Simplifications

Molecules diffuse in 2-D and react on contact with set probabilities. Reaction rates are scaled for classroom viewing and aren't measured values. Importin-α/β is shown as one importin, and RanBP1 is folded into Ran-GAP.

## Putting it on GitHub Pages

1. Create a new public repository and upload `index.html` and `README.md`.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then click **Save**.
4. After a minute or two the site will be live at `https://<your-username>.github.io/<repository-name>/`.

## Credits

Simulation built with Claude (Anthropic), Opus 5.5 model, 2026. The biological model was reviewed and refined by author. Inspired by HHMI BioInteractive's "Membrane Transport" simulation; this project isn't affiliated with or endorsed by HHMI.
