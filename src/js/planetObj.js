export default class PlanetObj{
    constructor () {
        this.ertYr = 31558118400;
        this.ertDay = 86400000;
        this.mer = this.ertDay * 87.97;
        this.ven = this.ertDay * 224.7;
        this.mar = this.ertDay * 686.98;
        this.jup = this.ertDay * 4332.82;
        this.sat = parseInt(this.ertDay * 10755.7);
        this.ura = this.ertDay * 30687.15;
        this.nep = this.ertDay * 60190.03;
    }
}
