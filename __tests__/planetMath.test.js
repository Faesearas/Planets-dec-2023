import PlanetMath from '../src/js/planetMath.js';
import PlanetObj from '../src/js/planetObj.js';

describe('planetMath', () => {
  let userDate;
  let planetObj;

  beforeEach(() => {
    userDate = new PlanetMath("1965-01-01", "2000-01-01");
    planetObj = new PlanetObj();
  });

  test('should display the difference between the two entered dates', () => {    
    userDate.yearCompare();
    expect(userDate.result).toEqual(35);    
  });


});