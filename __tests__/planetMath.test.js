import PlanetMath from '../src/js/planetMath.js';
import PlanetObj from '../src/js/planetObj.js';

// Unfortunately due to these tests acting on a live clock some will fail and need adjustment.
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

  test('should display the user`s entered age, in Martian orbital periods!', () => {
    userDate.yearCompare(3);
    expect(userDate.pntAge).toEqual("22.34");
  });

  test('should display the earth days to user`s next birthday, on Mars!!', () => {
    userDate.yearCompare(3);
    expect(userDate.nextBDay).toEqual("452.78");
  });

  test('should display the orbital periods of venus, from their current age to that birthday, on earth!!!', () => {
    userDate.yearsSince(20, 1);
    expect(userDate.yrsSince).toEqual("35.8");
  });

});