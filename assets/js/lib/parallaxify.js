"use strict";

import getVendor from "./vendors";

let parallaxHolder = $(".parallax-holder");
let transform = getVendor("transform");
let elData = [];
let viewport = {};

class Parallaxify{
    
    constructor(){
        this._setViewport();
        this._setElData();

        parallaxHolder.each((index, el) => { this._applyCSS($(el), elData[index].bottomShiftY); });

        this._events();
    }
    _events(){
        $(window)
            .on("scroll", (e) => { this._handleScroll(e) })
            .on("resize", (e) => { this._handleResize(e) });
    }
    _setViewport(){
        viewport.w = window.innerWidth;
        viewport.h = window.innerHeight;
    }
    _setElData(){
        parallaxHolder.each((index, el) => {
            el = $(el);
            let data = {};

            data.offsetY = el.offset().top;
            data.topShiftY = el.data("shift-top");
            data.bottomShiftY = el.data("shift-bottom");
            data.startY = data.offsetY + data.topShiftY;
            data.endY = data.offsetY + data.bottomShiftY;
            data.speedRatio = el.data("speed-ratio");

            elData.push(data);
        });
    } 
    _handleScroll(e){
        let scrollY = $(window).scrollTop();
        let bottomEdge = viewport.h + scrollY;

        parallaxHolder.each((index, el) => {
            el = $(el);
            let data = elData[index];
            let posY = 0;

            if(bottomEdge > data.startY){
                let diffY = Math.abs(bottomEdge - data.startY);
                let diffRatio = diffY / data.speedRatio;
                
                posY = (data.bottomShiftY - diffRatio <= data.topShiftY) ? data.topShiftY : data.bottomShiftY - diffRatio;

            } else if(bottomEdge <= data.startY){

                posY = data.bottomShiftY;
            }
            this._applyCSS(el, posY);
        });
        
        return false;
    }
    _applyCSS(el, shiftY = 0){
        el.css({ transform: "translateY("+ shiftY +"px)" });
    }
    _handleResize(e){
        this._setViewport();
        this._setElData();

        parallaxHolder.each((index, el) => { this._applyCSS($(el), elData[index].bottomShiftY); });
    }

}

export default Parallaxify;