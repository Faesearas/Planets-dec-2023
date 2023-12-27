import PlanetObj from './planetObj.js';

export default class PlanetMath {
  constructor(date1) {
    this.date1 = Date.parse(date1);
    this.now = Date.now();
  }

  yearCompare(num) {
    this.bDay = this.now - this.date1;
    let planetObj = new PlanetObj();
    let result = this.bDay / planetObj.ertYr;
    this.userAge = Math.floor(result);
    planetObj.currPnt(num);
    this.pntAge = (this.bDay / planetObj.currPnt).toFixed(2);
    this.nextBDay = (((parseInt(this.bDay / planetObj.currPnt + 1) - this.bDay / planetObj.currPnt) * planetObj.currPnt) / planetObj.ertDay).toFixed(2);
  }
  yearsSince (num1, num2) {
    let planetObj = new PlanetObj();
    planetObj.currPnt(num2);
    this.bDay = this.now - this.date1;
    this.yrsSince = ((this.bDay - (num1 * 31558118400)) / planetObj.currPnt).toFixed(1);

  }
}
