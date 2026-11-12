// The supplied deployment consists of self-contained HTML route copies.
// Keep index.html as the editable shared application and regenerate each entry.
const fs = require('fs');
const vm = require('vm');
const source = fs.readFileSync('index.html','utf8');
new vm.Script(source.match(/<script>([\s\S]*?)<\/script>/)[1]);
const routes = [...source.matchAll(/^ '(\/[^']*)':\{title:'([^']*)',description:'([^']*)'/gm)];
if(routes.length!==8) throw Error('Expected eight website routes');
for(const [,route,title,description] of routes){
  if(route==='/') continue;
  const html=source.replace('data-start="/"',`data-start="${route}"`)
    .replace(/<title>.*?<\/title>/,`<title>${title} — Vision Biomedical Services</title>`)
    .replace(/(<meta name="description" content=")[^"]*/,`$1${description}`);
  fs.mkdirSync('.'+route,{recursive:true});
  fs.writeFileSync('.'+route+'/index.html',html);
}
console.log('Built and syntax-checked all eight static route entries.');
