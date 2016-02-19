"use strict";

let scrollPanels = $(".scroll-panel");

class ScrollController{

    constructor(){
        this._events();
    }
    _events(){
        $(window).on("scroll", (e) => { this._handleScroll(e) });
    }
    _handleScroll(e){
        let scrollY = $(window).scrollTop();

        scrollPanels.each((index, el) => {
            el = $(el);
            if(scrollY + el.innerHeight() > el.offset().top) el.addClass("active");
        });

        return false;
    }
}

export default ScrollController;