import PlanetObj from './planetObj.js';

export default class PlanetMath {
  constructor(date1,date2) {
    this.date1 = Date.parse(date1);
    this.date2 = Date.parse(date2);
    // this.today = Date.now();
  }

  yearCompare() {
    let temp = this.date2 - this.date1;
    let planetObj = new PlanetObj();
    let result = temp / planetObj.earth;
    this.result = Math.round(result);
  }
}
