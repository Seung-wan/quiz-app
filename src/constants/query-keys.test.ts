import { QUERY_KEYS } from './query-keys';

const context = describe;

describe('query-keys', () => {
  context('quizs', () => {
    it('all', () => {
      expect(QUERY_KEYS.QUIZS.ALL).toEqual(['quizs']);
    });

    it('lists', () => {
      expect(QUERY_KEYS.QUIZS.LISTS()).toEqual(['quizs', 'list']);
    });

    it('list', () => {
      const FILTER = { id: 1, amount: 10, category: 2 };

      expect(QUERY_KEYS.QUIZS.LIST(FILTER)).toEqual([
        'quizs',
        'list',
        { ...FILTER },
      ]);
    });
  });
});
