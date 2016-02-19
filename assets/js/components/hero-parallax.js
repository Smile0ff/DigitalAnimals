"use strict";

import getVendor from "../lib/vendors";
import Computation from "../lib/computation";

let heroHolder = $("#hero-parallax-holder");
let heroImage = heroHolder.find(".hero-image");
let heroButton = $("#hero-parallax-button");

let friction = {
    x: heroImage.data("friction-x"),
    y: heroImage.data("friction-y")
};
let delta = {};

let isParallax = true;
let isZoom = true;
let isTimeOut = false;

let transform = getVendor("transform");
let transition = getVendor("transition");

class HeroParallax extends Computation{

    constructor(){
        isParallax = isZoom = $(window).scrollTop() > 0 ? false : true;

        super();
        this._events();
    }
    _events(){
        $(window)
            .on("scroll", (e) => { this.handleScroll(e) })
            .on("mousemove", (e) => { this.handleMovement(e) });

        heroButton
            .on("mouseenter", (e) => { this.handleEnter(e) })
            .on("mouseleave", (e) => { this.handleLeave(e) });
    }
    handleScroll(e){
        isParallax = isZoom = $(window).scrollTop() > 0 ? false : true;

        return false;
    }
    handleMovement(e){
        if(!isParallax) return;

        delta = super.getDelta(e.pageX, e.pageY);

        heroImage.css({
            transform: "translateX("+ (delta.x / friction.x) * -1 +"px) translateY("+ (delta.y / friction.y) * -1 +"px)",
            transition: "none"
        });

        return false;
    }
    handleEnter(e){
        if(!isZoom) return;
        
        isParallax = false;
        isTimeOut = true;

        window.setTimeout(() => {

            if(!isTimeOut) return;

            heroImage.css({
                transform: "translateX(0px) translateY(0px) scale(0.85)",
                transition: "all .6s cubic-bezier(0.76, 0.05, 0.32, 1) 0s"
            });

        }, 1000);

        return false;
    }
    handleLeave(e){
        if(!isZoom) return;

        isTimeOut = false;

        heroImage.css({
            transform: "translateX(0px) translateY(0px) scale(1)",
            transition: "all .6s cubic-bezier(0.76, 0.05, 0.32, 1) 0s"
        });

        window.setTimeout(() => { isParallax = true; }, 1000);

        return false;
    }
}

export default HeroParallax;