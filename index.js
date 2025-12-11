import {readdirSync, readFileSync, writeFileSync} from "fs";
import {createMermaidRenderer} from "mermaid-isomorphic";
import {mdToPdf} from "md-to-pdf";
import {resolve} from "node:path";

const renderer = createMermaidRenderer()

const mermaidPath = './assets/mermaid/';
const handoutPath = './handouts/';
const basedir = resolve('.');

await Promise.all(readdirSync(mermaidPath).map(async (f) => {
    if (f.endsWith('.mmd')) {
        const diagram = readFileSync(`${mermaidPath}/${f}`, 'utf8');
        const {svg} = (await renderer([diagram]))[0].value;
        writeFileSync(`./${mermaidPath}/${f.replace('.mmd', '.svg')}`, svg);
    }
}));

await Promise.all(readdirSync(handoutPath).map(async (f) => {
    if (f.endsWith('.md')) {
        const pdf = await mdToPdf({path: `${handoutPath}${f}`}, {basedir}).catch(console.error);
        if (pdf) {
            pdf.filename = `${handoutPath}${f}`.replace('.md', '.pdf');
            writeFileSync(pdf.filename, pdf.content);
        }
    }
}));
