import GameSavingLoader from '../gameSavingLoader';
import read from '../reader';

jest.mock('../reader');
beforeEach(() => jest.resetAllMocks());

test(('test negative method GameSavingLoader.load()'), async () => {
  read.mockRejectedValue(new Error('Error'));
  const err = await GameSavingLoader.load();
  expect(err.message).toBe('Error');
});
