export default class PlanetObj{
    constructor () {
        this.ertYr = 31558118400;
        this.ertDay = 86400000;
        this.planets =  [87.97, 224.7, 365.24, 686.98, 4432.82, 10755.7, 30687.15, 60190.03]
    }
    currPnt (num) {
        this.currPnt = parseInt(this.ertDay * this.planets[num]);
    }
}


// this.mer = this.ertDay * 87.97;
// this.ven = this.ertDay * 224.7;
// this.mar = this.ertDay * 686.98;
// this.jup = this.ertDay * 4332.82;
// this.sat = parseInt(this.ertDay * 10755.7);
// this.ura = this.ertDay * 30687.15;
// this.nep = this.ertDay * 60190.03;