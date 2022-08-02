const littlelambocoin = require('../../util/littlelambocoin');

describe('littlelambocoin', () => {
  it('converts number mojo to littlelambocoin', () => {
    const result = littlelambocoin.mojo_to_littlelambocoin(1000000);

    expect(result).toBe(0.000001);
  });
  it('converts string mojo to littlelambocoin', () => {
    const result = littlelambocoin.mojo_to_littlelambocoin('1000000');

    expect(result).toBe(0.000001);
  });
  it('converts number mojo to littlelambocoin string', () => {
    const result = littlelambocoin.mojo_to_littlelambocoin_string(1000000);

    expect(result).toBe('0.000001');
  });
  it('converts string mojo to littlelambocoin string', () => {
    const result = littlelambocoin.mojo_to_littlelambocoin_string('1000000');

    expect(result).toBe('0.000001');
  });
  it('converts number littlelambocoin to mojo', () => {
    const result = littlelambocoin.littlelambocoin_to_mojo(0.000001);

    expect(result).toBe(1000000);
  });
  it('converts string littlelambocoin to mojo', () => {
    const result = littlelambocoin.littlelambocoin_to_mojo('0.000001');

    expect(result).toBe(1000000);
  });
  it('converts number mojo to colouredcoin', () => {
    const result = littlelambocoin.mojo_to_colouredcoin(1000000);

    expect(result).toBe(1000);
  });
  it('converts string mojo to colouredcoin', () => {
    const result = littlelambocoin.mojo_to_colouredcoin('1000000');

    expect(result).toBe(1000);
  });
  it('converts number mojo to colouredcoin string', () => {
    const result = littlelambocoin.mojo_to_colouredcoin_string(1000000);

    expect(result).toBe('1,000');
  });
  it('converts string mojo to colouredcoin string', () => {
    const result = littlelambocoin.mojo_to_colouredcoin_string('1000000');

    expect(result).toBe('1,000');
  });
  it('converts number colouredcoin to mojo', () => {
    const result = littlelambocoin.colouredcoin_to_mojo(1000);

    expect(result).toBe(1000000);
  });
  it('converts string colouredcoin to mojo', () => {
    const result = littlelambocoin.colouredcoin_to_mojo('1000');

    expect(result).toBe(1000000);
  });
});
