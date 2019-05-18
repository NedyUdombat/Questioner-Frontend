import { setToken, destroyToken, getToken, decodeToken } from './helpers';

const token = '678ygvhju7654fiuwbcuh32efbkcuwsdfucbweiufiuwbefgbweybnj';
describe('API Index Test Suite', () => {
  it('should set token', () => {
    expect(setToken(token)).toEqual(token);
  });

  it('should get token', () => {
    expect(getToken()).toEqual(token);
  });

  it('should decode token', () => {
    expect(decodeToken(token)).toEqual(null);
  });

  it('should destroy token', () => {
    const newToken = destroyToken(token);
    expect(newToken).toEqual(null);
  });
});
