import commentCounter from './commentCounter.js';

describe('commentCounter', () => {
    it('shold return the commits length', () => {
        expect(commentCounter()).toBe(3);
    })
})
