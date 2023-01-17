import GameSavingLoader from '../gameSavingLoader';

test('test method GameSavingLoader.load()', async () => {
  const output = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1, name: 'Hitman', level: 10, points: 2000,
    },
  };
  const data = await GameSavingLoader.load();
  expect(data).toEqual(output);
});

test('test error method GameSavingLoader.load()', async () => {
  const data = await GameSavingLoader.load(true);
  expect(data.message).toBe('Error function read');
});
