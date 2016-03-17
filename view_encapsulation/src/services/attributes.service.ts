export class AttributesService {
  attributes(h1) {
    return Object.keys(h1.attributes).map((key) => {
      return h1.attributes[key].nodeName;
    })
    .join(', ');
  }
}