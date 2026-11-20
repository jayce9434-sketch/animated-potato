# My Singing Dogs — v1.0

A complete, original musical dog collection game for GitHub Pages. Two islands, 16 collectible island slots (13 distinct visual species), rare Mythical breeding, 13 original transparent dog sprites based on the supplied tan-and-white dog reference, 16 independently controllable audio stems, two full original compositions, 64 bars each, automatic saves, offline earnings, PWA installation, mobile touch controls, collection, achievements, nursery, feeding, upgrades, import/export, and responsive interface.

## Play / publish

1. Extract **every file directly into the root** of your GitHub repository. Do not nest the files in another directory.
2. In GitHub, open **Settings → Pages → Build and deployment → Deploy from a branch** and select **main / (root)**.
3. Open the GitHub Pages URL. The entry point is `index.html`; no npm, build steps, hosting services, or CDNs needed.
4. Tap **Enter the islands**, then **Play** to activate audio. Tap **Hear full concert** to preview all eight performers on an island.

For local testing (not necessary for GitHub Pages), run `python3 -m http.server 8000` from the extracted folder and visit `http://localhost:8000`.

## The songs

- Plant Island: 112 BPM, 64 bars, 2 minutes 17 seconds; 8 individual stems.
- Ice Island: 96 BPM, 64 bars, 2 minutes 40 seconds; 8 individual stems.
- Original, composed note events are supplied in `score.js` for accurate gameplay-synchronized performance animation. Instrument audio is rendered from the installed TimGM General MIDI soundfont and encoded as Ogg Vorbis for the browser. No copyrighted game melodies or sound recordings were used.
- Full-length compositions have overtures, verses, rising sections, choruses, solo bridges, and finales. Parts have intentional rests and feature moments. Mute or adjust an individual dog's part from its detail menu.

## Features

- Single element dogs: Wind and Stone on both islands; Tech on Plant, Cold on Ice.
- Each island: 3 singles + 3 doubles + 1 triple + 1 rare Mythical. A Double + Triple pairing has an approx. 10.5% chance of producing a Mythical, with a guarantee by the 9th eligible attempt.
- Buy singles from Market, breed/hatch additional dogs, collect coins, buy treats, level dogs to 20, unlock extra castle capacity, claim daily/lifetime achievements.
- Move dogs with drag/touch. Browser data autosaves and offline earnings are capped at eight hours per absence. Export JSON backups, and import when necessary. Clearing browser storage will erase a save unless backed up.
- Audio starts only after user interaction because of browser restrictions. Sound uses decoded synced stems (can require a few seconds of initial loading on mobile) and requires speakers/headphones. Music data for the inactive island is released to help conserve mobile memory.

## Original art

The icy-blue dog image supplied by the creator is used as the official game icon. The custom dog artwork was generated using the separate tan-and-white dog photo supplied by the creator as the visual model. Dogs are exported as transparent WebP sprites; the island landscapes are original assets. No artwork relies on a remote server.

## Notes on audio and performance

Musical timing is exact on the Web Audio shared clock. Visible dog performance animations follow each rendered note's start, duration, and instrument role (vocals with sustained poses, low notes with foot stamps, synths with spectral pulses, wind parts with trailing gestures). The transparent sprites are static layered artworks and use CSS rig/particle movement; they are not independently frame-by-frame animated skeletal illustrations. This should not be confused with full frame-by-frame jaw/lip rigging.

## Troubleshooting

- If music is silent, tap Play, unmute your device, and make sure the master/music slider is not zero.
- `file://` URLs restrict audio fetching. Use GitHub Pages or a local HTTP server.
- If an old version loads, close and reopen the tab so the service worker can update its cache.
- Export your save before deleting website data or switching devices.

## Private gift / access warning

This project is intended as a private gift for the creator and Mason. **GitHub Pages normally exposes the published website to anyone who knows or finds the URL; it does not enforce two-person-only access.** For genuinely limited access, use a host with real sign-in/access controls or keep the files unshared and run them locally via a small local web server. Do not rely on hidden links, front-end passwords, or unlisted repositories for access control.

## Testing and limitations

The game was exercised in a headless Chromium browser through an inline-asset test harness, including full-stem audio playback, breeding, egg incubation and instant completion, hatching, both island concerts, the collection screen, settings, save export, and a 390px touch layout. Five direct browser screenshots were captured. This environment blocks normal HTTP/file URL navigation, so a deployed GitHub Pages instance and actual iOS Safari have **not** been tested. The visual character performances use timed image layers and movement cues synchronized to the composed notes; they are not fully articulated frame-by-frame lip-synced 3D animations. Art and music are original project assets, but no claim of universal error-free behavior or professional studio-recorded dog voices is made.
