import commentCounter from './commentCounter.js';

describe('commentCounter', () => {
  it('shold return the commits length', () => {
    expect(commentCounter(3)).toBe(3);
  });
  it('should return 0 when there is a 400 error', () => {
    expect(commentCounter(0)).toBe(0);
  });
});
