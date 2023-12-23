import PlanetObj from './planetObj.js';

export default class PlanetMath {
  constructor(date1) {
    this.date1 = Date.parse(date1);
    this.now = Date.now();
  }

  yearCompare() {
    this.bDay = this.now - this.date1;
    let planetObj = new PlanetObj();
    let result = this.bDay / planetObj.earth;
    this.userAge = Math.floor(result);
  }
}
