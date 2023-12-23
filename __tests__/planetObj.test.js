import PlanetObj from '../src/js/planetObj.js';

describe('planetMath', () => {
    let planetObj;

    beforeEach(() => {
        planetObj = new PlanetObj();
    });

    test('should display an earth orbital period worth of milliseconds', () => {
        expect(planetObj.ertYr).toEqual(31558118400);
    });

    test('should display an earth day worth of milliseconds', () => {
        expect(planetObj.ertDay).toEqual(86400000);
    });

    test('should display the orbital period in ms for Mercury', () => {
        expect(planetObj.mer).toEqual(7600608000);
    });

    test('should display the orbital period in ms for Venus', () => {
        expect(planetObj.ven).toEqual(19414080000);
    });

    test('should display the orbital period in ms for Mars', () => {
        expect(planetObj.mar).toEqual(59355072000);
    });

    test('should display the orbital period in ms for Jupiter', () => {
        expect(planetObj.jup).toEqual(374355648000);
    });

    test('should display the orbital period in ms for Saturn', () => {
        expect(planetObj.sat).toEqual(929292480000);
    });

    test('should display the orbital period in ms for Uranus', () => {
        expect(planetObj.ura).toEqual(2651369760000);
    });

    test('should display the orbital period in ms for Neptune', () => {
        expect(planetObj.nep).toEqual(5200418592000);
    });
});