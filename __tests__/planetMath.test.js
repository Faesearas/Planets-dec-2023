import PlanetMath from '../src/js/planetMath.js';
import PlanetObj from '../src/js/planetObj.js';

describe('planetMath', () => {
  let userDate;
  let planetObj;

  beforeEach(() => {
    userDate = new PlanetMath("1981-12-20");
    planetObj = new PlanetObj();
  });

  test('should display the difference between the entered date and now', () => {    
    userDate.yearCompare();
    expect(userDate.userAge).toEqual(42);    
  });
  test('should display the difference between the entered date and now in martian orbital periods', () => {    
    userDate.yearCompare();
    expect(userDate.marAge).toEqual(unknown);    
  });

});