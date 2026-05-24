# ChineseCulturePresentation

An interactive slide deck for presenting cultural patterns in China, Mexico, and Italy. It is built with React, Vite, Tailwind CSS, Motion, and Lucide icons.

## Present Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in Chrome.

Use the right arrow, down arrow, space, enter, or the next button to reveal each point. Use the left arrow, up arrow, or previous button to go back.

## Deploy On GitHub Pages

The included GitHub Actions workflow deploys the deck automatically from the `main` branch.

1. Create a new GitHub repository named `ChineseCulturePresentation`.
2. Upload the contents of this folder into the repository.
3. Go to the repository on GitHub.
4. Open `Settings`.
5. Open `Pages`.
6. Under `Build and deployment`, set `Source` to `GitHub Actions`.
7. Commit or upload the files to the `main` branch.
8. Open the `Actions` tab and wait for `Deploy to GitHub Pages` to finish.
9. Open the published URL shown by the workflow. It will usually be:

```text
https://YOUR-GITHUB-USERNAME.github.io/ChineseCulturePresentation/
```

If you use a different repository name, update the `base` value in `vite.config.ts` to match that repository name.

## Build Check

```bash
npm run lint
npm run build
```
