import PlanetMath from '../src/js/planetMath.js';

describe('planetMath', () => {
  let userDate;

  beforeEach(() => {
    userDate = new PlanetMath(35);
  });

  test('should be able to display contents of the class object', () => {    
    expect(userDate.num).toEqual(35);    
  });

});