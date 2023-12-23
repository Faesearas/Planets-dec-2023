import PlanetObj from '../src/js/planetObj.js';

describe('planetMath', () => {
    let planetObj;
  
    beforeEach(() => {
      planetObj = new PlanetObj();
    });

    test('should display a earth orbital period worth of milliseconds', () => {
        expect(planetObj.earth).toEqual(31558118400);
      });
      test('should display a earth orbital period worth of milliseconds', () => {
        expect(planetObj.ertDay).toEqual(86400000);
      });

});