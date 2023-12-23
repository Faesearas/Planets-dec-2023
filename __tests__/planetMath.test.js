import PlanetMath from '../src/js/planetMath.js';
import PlanetObj from '../src/js/planetObj.js';

describe('planetMath', () => {
  let userDate;
  let planetObj;

  beforeEach(() => {
    userDate = new PlanetMath("1981-01-01");
    planetObj = new PlanetObj();
  });

  test('should display the difference between the entered date and now', () => {    
    userDate.yearCompare();
    expect(userDate.userAge).toEqual(42);    
  });


});