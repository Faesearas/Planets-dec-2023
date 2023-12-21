import planetMath from '../src/js/planetMath.js';

describe('planetMath', () => {
  let planetMath;

  beforeEach(() => {
    userDate = new planetMath(35);
  });

  test('should be able to display contents of the class object', () => {    
    expect(userDate.int).toEqual(35);    
  });

});