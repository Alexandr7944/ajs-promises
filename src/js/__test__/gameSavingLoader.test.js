import GameSavingLoader from '../gameSavingLoader';

test('test method GameSavingLoader.load()', async () => {
  const asyncMockFull = jest.fn()
    .mockResolvedValueOnce('first call')
    .mockRejectedValueOnce(new Error('Async error message'));
  const output = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1, name: 'Hitman', level: 10, points: 2000,
    },
  };

  try {
    const mock = await asyncMockFull();
    const data = await GameSavingLoader.load(mock);
    expect(data).toEqual(output);
    await asyncMockFull();
  } catch (err) {
    expect(err.message).toBe('Async error message');
  }
});
