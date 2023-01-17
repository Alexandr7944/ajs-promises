import json from './parser';
import read from './reader';

class GameSavingLoader {
  static load() {
    return new Promise((resolve) => {
      resolve(
        read()
          .then((data) => json(data))
          .then((data) => JSON.parse(data)),
      );
    });
  }
}

export default GameSavingLoader;
