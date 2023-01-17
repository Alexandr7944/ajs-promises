import json from './parser';
import read from './reader';

class GameSavingLoader {
  static load(flag = false) {
    return new Promise((resolve) => {
      resolve(
        read(flag)
          .then((data) => json(data))
          .then((data) => JSON.parse(data))
          .catch((err) => err),
      );
    });
  }
}

export default GameSavingLoader;
