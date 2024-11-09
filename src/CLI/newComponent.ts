import * as fs from 'fs';
import * as path from 'path';
import {componentTemplate} from "./templates/template.component";
import {typesTemplates} from "./templates/template.types";
import {stylesTemplate} from "./templates/template.styles";
import {storiesTemplate} from "./templates/template.stories";
import {testTemplate} from "./templates/template.test";

const componentName = process.argv[2];

if (!componentName) {
    console.error('Veuillez fournir un nom de composant.');
    process.exit(1);
}

const componentDir = path.join(__dirname, `../components/${componentName}`);

if (fs.existsSync(componentDir)) {
    console.error('Le dossier du composant existe déjà.');
    process.exit(1);
}

fs.mkdirSync(componentDir);

const files = [
    { name: `${componentName}.component.tsx`, content: componentTemplate(componentName) },
    { name: `${componentName}.types.ts`, content: typesTemplates(componentName) },
    { name: `${componentName}.styles.ts`, content: stylesTemplate(componentName) },
    { name: `${componentName}.stories.tsx`, content: storiesTemplate(componentName) },
    { name: `${componentName}.test.tsx`, content: testTemplate(componentName) },
    { name: `index.ts`, content: `export * from './${componentName}.component';` },
]

try {
    files.forEach(file => {
        fs.writeFileSync(path.join(componentDir, file.name), file.content);
    });
} catch (err) {
    console.error(err);
    process.exit(1);
}

console.log(`Composant ${componentName} créé avec succès !`);