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

  test('should display the difference between the entered date and now, in martian orbital periods!', () => {    
    userDate.yearCompare();
    expect(userDate.marAge).toEqual("22.34");
  });

  test('should display the difference between the entered date and now, in Mercury`s orbital periods!', () => {    
    userDate.yearCompare();
    expect(userDate.merAge).toEqual("174.42");
  });

  test('should display the difference between the entered date and now, in Venus` orbital periods!', () => {    
    userDate.yearCompare();
    expect(userDate.venAge).toEqual("68.29");
  });

  test('should display the difference between the entered date and now, in Jupiter`s orbital periods!', () => {    
    userDate.yearCompare();
    expect(userDate.marAge).toEqual("?");
  });

  test('should display the difference between the entered date and now, in Saturn`s orbital periods!', () => {    
    userDate.yearCompare();
    expect(userDate.merAge).toEqual("?");
  });

  test('should display the difference between the entered date and now, in Uranus` orbital periods!', () => {    
    userDate.yearCompare();
    expect(userDate.venAge).toEqual("?");
  });

  test('should display the difference between the entered date and now, in Neptune` orbital periods!', () => {    
    userDate.yearCompare();
    expect(userDate.venAge).toEqual("?");
  });

});