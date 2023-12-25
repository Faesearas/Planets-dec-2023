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
    userDate.yearCompare(0);
    expect(userDate.userAge).toEqual(42);    
  });

  test('should display the difference between the entered date and now, in martian orbital periods!', () => {    
    userDate.yearCompare(3);
    expect(userDate.pntAge).toEqual("22.34");
  });

});