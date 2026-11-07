# Sonal.exe — Birthday Edition

A mobile-responsive React + Vite birthday experience with sequential stages, flip cards, meetup story, interactive cake, room controls, password-gated photo reveal, gift message, video player, and a floating birthday-fact balloon.

## Run on your computer
1. Install Node.js (20.19+ or 22.12+ recommended).
2. Extract this folder and open a terminal **inside `sonal-birthday-react`**, where `package.json` is located.
3. Run `npm install` then `npm run dev`.
4. Open the local URL Vite prints.

## Open it on your phone (same Wi-Fi)
1. Keep the computer and phone on the same Wi-Fi network.
2. In the project folder run `npm run dev -- --host 0.0.0.0`.
3. In the terminal, find the **Network** URL (usually `http://192.168.x.x:5173/`) and open that address on your phone. Use the actual URL printed by your terminal.
4. If it does not load, allow Node.js through Windows Firewall on private networks.

## Add your media
- Photo: put `sonal-photo.jpeg` in `public/`.
- Video: put `kids-birthday-wish.mp4` in `public/`.
- The photo-password gate is a playful client-side hurdle, not real security; assets in `public/` can be accessed directly by anyone with the URL.
- Obtain permission before publishing identifiable images/voices of children.

## Build for hosting
Run `npm run build`; the production site is created in `dist/`. The site is static and has no backend. Deploy the `dist` output using a static host, or use the local Wi-Fi steps above for a quick phone preview.
