export class CharacterService {
  countCharacters(item) {
    return Object.keys(item).reduce((previous, next) => {
      return previous.concat(item[next]);
    }, '');
  }
}
