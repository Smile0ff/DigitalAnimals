"use strict";

import getVendor from "./vendors";

let parallaxHolder = $(".parallax-holder");
let transform = getVendor("transform");
let elOffsets = [];

class LetterParallax{
    
    constructor(){
        this._setOffsets();
        this._events();
    }
    _events(){
        $(window)
            .on("scroll", (e) => { this._handleScroll(e) })
            .on("resize", (e) => { this._handleResize(e) });
    }
    _setOffsets(){
        parallaxHolder.each((index, el) => {
            elOffsets.push($(el).offset());
        });
    }
    _handleScroll(e){
        let scrollY = $(window).scrollTop();

        parallaxHolder.each(function(index, el){
            el = $(el);

            let friction = parseFloat(el.data("friction"));
            //let shiftY = (elOffsets[index].top - el.height() - scrollY) / friction;
            let shiftY = (scrollY / friction) * -1;

            el.css({ transform: "translateY("+ shiftY +"px)"});
        });

        return false;
    }
    _handleResize(e){
        this._setOffsets();
    }

}

export default LetterParallax;