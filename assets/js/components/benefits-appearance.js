"use strict";

let benefitsEl = $(".benefits-item");

class BenefitsAppearance{
    
    constructor(){
        this._events();
    }
    _events(){
        $(window).on("scroll", (e) => { this.handleScroll(e) });
    }
    handleScroll(e){
        let scrollY = $(window).scrollTop();
        let bottomPos = scrollY + (window.innerHeight - (window.innerHeight / 5));

        benefitsEl.each((index, el) => {
            el = $(el);
            bottomPos >= $(el).offset().top ? el.addClass("active") : el.removeClass("active");
        });

        return false;
    }

}

export default BenefitsAppearance;