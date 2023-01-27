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

const asyncMock = jest.fn()
  .mockImplementation(() => Promise.reject(new Error('Async error message')));

test('test method GameSavingLoader.load(error)', async () => {
  try {
    const mock = await asyncMock();
    await GameSavingLoader.load(mock);
  } catch (err) {
    expect(err.message).toMatch('Async error message');
  }
});
