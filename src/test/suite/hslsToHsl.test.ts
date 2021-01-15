import { expect } from 'chai';
import { hslToHsl, hslToHsla, hslaToHsl, hslaToHsla } from '../../utils/toHsl/hslsToHsl';

describe('hslToHsl()', () => {
  it('returns valid hsl value from hsl array input', () => {
    const hslInput1 = [260,50,80];
    const hslInput2 = [147,86,65];
    const hsl1 = hslToHsl(hslInput1);
    const hsl2 = hslToHsl(hslInput2);
    expect(hsl1).to.eql(`hsl(260, 50%, 80%)`);
    expect(hsl2).to.eql(`hsl(147, 86%, 65%)`);
  });
});

describe('hslaToHsla()', () => {
  it('returns valid hsla value from hsla array input', () => {
    const hslaInput1 = [260,50,80,0.5];
    const hslaInput2 = [147,86,65,0.8];
    const hsla1 = hslaToHsla(hslaInput1);
    const hsla2 = hslaToHsla(hslaInput2);
    expect(hsla1).to.eql(`hsla(260, 50%, 80%, 0.5)`);
    expect(hsla2).to.eql(`hsla(147, 86%, 65%, 0.8)`);
  });
});

describe('hslToHsla()', () => {
  it('returns valid hsla value from hsl array input', () => {
    const hslInput1 = [260,50,80];
    const hslInput2 = [147,86,65];
    const hsla1 = hslToHsla(hslInput1);
    const hsla2 = hslToHsla(hslInput2);
    expect(hsla1).to.eql(`hsla(260, 50%, 80%, 1)`);
    expect(hsla2).to.eql(`hsla(147, 86%, 65%, 1)`);
  });
});

describe('hslaToHsl()', () => {
  it('returns valid hsl value from hsla with alpha = 1', () => {
    const hslaInput1 = [260,50,80, 1];
    const hslaInput2 = [147,86,65, 1];
    const hsl1 = hslaToHsl(hslaInput1);
    const hsl2 = hslaToHsl(hslaInput2);
    expect(hsl1).to.eql(`hsl(260, 50%, 80%)`);
    expect(hsl2).to.eql(`hsl(147, 86%, 65%)`);
  });

  it('returns valid hsla value from hsla with custom alpha value', () => {
    const hslaInput1 = [260,50,80, 0.5];
    const hslaInput2 = [147,86,65, 0.8];
    const hsla1 = hslaToHsl(hslaInput1);
    const hsla2 = hslaToHsl(hslaInput2);
    expect(hsla1).to.eql(`hsla(260, 50%, 80%, 0.5)`);
    expect(hsla2).to.eql(`hsla(147, 86%, 65%, 0.8)`);
  });
});