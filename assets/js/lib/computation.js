"use strict";

class Computation{

    constructor(){
        this.resolution = {};

        this.setResulution();
        this.setCenterPoints();
    }
    setResulution(){
        this.resolution.x = window.innerWidth;
        this.resolution.y = window.innerHeight;
    }
    setCenterPoints(){
        this.resolution.cx = this.resolution.x / 2;
        this.resolution.cy = this.resolution.y / 2;
    }
    getDelta(x, y){
        return {
            x: this.resolution.cx - x,
            y: this.resolution.cy - y
        };
    }
    getTilt(x, y, reversed = false){
        return reversed
                ? { x: x / this.resolution.cx * -1, y: y / this.resolution.cy * -1 }
                : { x: x / this.resolution.cx, y: y / this.resolution.cy };
    }
    getHypoSqrt(x, y){
        return Math.sqrt(x * x + y * y);
    }

}

export default Computation;