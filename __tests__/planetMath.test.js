import PlanetMath from '../src/js/planetMath.js';

describe('planetMath', () => {
  let userDate;

  beforeEach(() => {
    userDate = new PlanetMath(1965, 2000);
  });

  test('should display the difference between the two entered years', () => {    
    userDate.yearCompare();
    expect(userDate.num).toEqual(35);    
  });

});