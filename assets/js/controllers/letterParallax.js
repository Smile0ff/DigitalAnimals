"use strict";

import getVendor from "../lib/vendors";

let letters = $(".parallax-letter-holder");
let transform = getVendor("transform");

class LetterParallax{
    
    constructor(){
        this._events();
    }
    _events(){
        $(window).on("scroll", (e) => { this._handleScroll(e) });
    }
    _handleScroll(e){
        let scrollY = $(window).scrollTop();

        letters.each(function(index, el){
            $(el).css({ transform: "translateY("+ scrollY * -.25 +"px)"});
        });

        return false;
    }

}

export default LetterParallax;