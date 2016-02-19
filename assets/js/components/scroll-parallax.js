"use strict";

import getVendor from "../lib/vendors";

let parallaxEl = $(".scroll-parallax");
let transform = getVendor("transform");

class ScrollParallax{

    constructor(){
        this._events();
    }
    _events(){
        $(window).on("scroll", (e) => { this.handleScroll(e) });
    }
    handleScroll(e){
        let scrollY = $(window).scrollTop();

        for(let el of parallaxEl){
            el = $(el);
            el.css({ transform: "translateY("+ (scrollY / el.data("friction")) * -1 +"px) rotate(45deg)" });
        }

        return false;
    }
}

export default ScrollParallax;