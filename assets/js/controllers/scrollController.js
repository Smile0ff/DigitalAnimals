"use strict";

let scrollPanels = $(".scroll-holder");

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
            if(scrollY + window.innerHeight > el.offset().top) el.addClass("active");
        });

        return false;
    }
}

export default ScrollController;