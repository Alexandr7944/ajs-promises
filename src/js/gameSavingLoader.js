import json from './parser';
import read from './reader';

class GameSavingLoader {
  static load() {
    return read()
      .then((data) => json(data))
      .then((data) => JSON.parse(data))
      .catch((err) => err);
  }
}

export default GameSavingLoader;
