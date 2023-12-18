import { getTimeLabel } from '@/utils';

const context = describe;

describe('date', () => {
  context('getTimeLabel', () => {
    it('10을 넣으면 "10초"로 표기된다.', () => {
      const time = 10;
      const label = getTimeLabel(time);

      expect(label).toBe('10초');
    });

    it('144를 넣으면 "2분 24초"로 표기된다.', () => {
      const time = 144;
      const label = getTimeLabel(time);

      expect(label).toBe('2분 24초');
    });

    it('5400을 넣으면 "1시간 30분"으로 표기된다.', () => {
      const time = 5400;
      const label = getTimeLabel(time);

      expect(label).toBe('1시간 30분');
    });
  });
});
