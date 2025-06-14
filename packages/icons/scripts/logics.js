const cheerio = require('cheerio').default;
const camelcase = require('camelcase');

async function convertIconData(svg) {
  const $svg = cheerio.load(svg, { xmlMode: true })('svg');

  // filter/convert attributes
  // 1. remove class attr
  // 2. convert to camelcase ex: fill-opacity => fillOpacity
  const attrConverter = (/** @type {{[key: string]: string}} */ attribs, /** @type string */ tagName) =>
    attribs &&
    Object.keys(attribs)
      .filter((name) => {
        const arr = ['class'];
        if (tagName === 'svg') {
          arr.concat(arr, ['xmlns', 'xmlns:xlink', 'xml:space', 'width', 'height']);
        }
        return !arr.includes(name);
      })
      .reduce((obj, name) => {
        const newName = camelcase(name);
        switch (newName) {
          case 'fill':
            if (attribs[name] === 'none' || attribs[name] === 'currentColor' || multiColor) {
              obj[newName] = attribs[name];
            }
            break;
          case 'pId':
            break;
          default:
            obj[newName] = attribs[name];
            break;
        }
        return obj;
      }, {});

  // convert to [ { tag: 'path', attr: { d: 'M436 160c6.6 ...', ... }, child: { ... } } ]
  const elementToTree = (/** @type {Cheerio} */ element) =>
    element
      .filter((_, e) => e.tagName && !['style'].includes(e.tagName))
      .map((_, e) => ({
        tag: e.tagName,
        attr: attrConverter(e.attribs, e.tagName),
        child: e.children && e.children.length ? elementToTree(cheerio(e.children)) : [],
      }))
      .get();

  const tree = elementToTree($svg);
  return tree[0]; // like: [ { tag: 'path', attr: { d: 'M436 160c6.6 ...', ... }, child: { ... } } ]
}

module.exports = {
  convertIconData,
};
