import PlanetObj from '../src/js/planetObj.js';

describe('planetMath', () => {
  let planetObj;

  beforeEach(() => {
    planetObj = new PlanetObj();
  });

  test('should display an earth day worth of milliseconds', () => {
    expect(planetObj.ertDay).toEqual(86400000);
  });

  test('should display an earth orbital period worth of milliseconds', () => {
    expect(planetObj.ertYr).toEqual(31558118400);
  });

  test('should display the orbital period in ms for Saturn', () => {
    planetObj.currPnt(5);
    expect(planetObj.currPnt).toEqual(929292480000);
  });

});