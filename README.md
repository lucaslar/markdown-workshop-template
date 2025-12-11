# Markdown Workshop Template

This is a **text-based presentation and documentation toolkit** that enables creating professional slides and handouts using only Markdown, with full version control support—no Word or PowerPoint required.

## Key Features
- Using MARP with presenter mode capabilities **Markdown-based presentations**
- **Automatic Mermaid diagram (`.mmd`) conversion** (&rarr; SVG) for visual content
- **Handout generation** from Markdown to PDF
- **Single-command workflow** via `npm start`

## How It Works
The repository orchestrates several specialized tools through a custom Node.js script ([index.js](./index.js)) and npm scripts:
1. **Diagram Processing**: Converts all Mermaid charts in [./assets/mermaid/](./assets/mermaid/) to SVG format
2. **Handout Generation**: Transforms all Markdown files in [./handouts/](./handouts/) to PDFs
3. **Presentation Export**: Generates PDF from [presentation.md](presentation.md)
4. **Presenter Mode**: Launches interactive presentation with presenter capabilities

## Tech Stack
- **[MARP](https://github.com/marp-team/marp-cli)** - Markdown presentation engine
- **[md-to-pdf](https://github.com/simonhaenisch/md-to-pdf)** - Document conversion
- **[mermaid-isomorphic](https://www.npmjs.com/package/mermaid-isomorphic)** - Diagram rendering
- **[Playwright](https://playwright.dev/)** - Browser automation for rendering


## Usage

``` sh
npm ci        # Install dependencies
npm start     # Process diagrams, generate PDFs, and launch presentation
```

This template is ideal for technical workshops, training materials, or any scenario requiring version-controlled, reproducible presentation materials.
