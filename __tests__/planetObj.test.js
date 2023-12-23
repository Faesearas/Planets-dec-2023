import PlanetObj from '../src/js/planetObj.js';

describe('planetMath', () => {
    let planetObj;

    beforeEach(() => {
        planetObj = new PlanetObj();
    });

    test('should display an earth orbital period worth of milliseconds', () => {
        expect(planetObj.earth).toEqual(31558118400);
    });

    test('should display an earth day worth of milliseconds', () => {
        expect(planetObj.ertDay).toEqual(86400000);
    });

    test('should display the amount of Mercury orbital periods to equal 1 earth orbital period', () => {
        expect(planetObj.mer).toEqual(4.15);
    });

});