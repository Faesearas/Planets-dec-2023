export default class PlanetObj {
  constructor() {
    this.ertYr = 31558118400;
    this.ertDay = 86400000;
    this.planets = [87.97, 224.7, 365.24, 686.98, 4432.82, 10755.7, 30687.15, 60190.03];
  }
  currPnt(num) {
    this.currPnt = parseInt(this.ertDay * this.planets[num]);
  }
}
