"use strict";

import getVendor from "../lib/vendors";
import Computation from "../lib/computation"

let projectsHolder = $("#projects-holder");
let projectsInfoHolder = $("#projects-info");
let chooser = $("#chooser");
let chooserItems = chooser.find(".item-holder");

let offsetTop = projectsHolder.offset().top;
let transform = getVendor("transform");

let delta = {};
let tilt = {};
let radius = {};

class Projects extends Computation{

    constructor(){
        super();
        this._events();
    }
    _events(){
        $(window).on("mousemove", (e) => { this._handleMove(e) });
        chooser.on("click", ".item-holder", (e) => { this._handleType(e) });
        projectsInfoHolder.on("click", (e) => { this._handleClose(e) });
    }
    _handleMove(e){
        delta = super.getDelta(e.pageX, e.pageY - offsetTop);
        tilt = super.getTilt(delta.x, delta.y);
        radius = super.getHypoSqrt(tilt.x, tilt.y * -1);

        this.applyCss();

        return false;
    }
    _handleType(e){
        let target = $(e.target).closest(".item-holder");
        let type = target.data("type");

        target.addClass("active");
        projectsInfoHolder.addClass("active").find("."+ type).addClass("active");
        
        return false;
    }
    _handleClose(e){
        let target = $(e.target);

        if(target.closest(".item").length <= 0 || target.hasClass("close")){
            chooserItems.removeClass("active");
            projectsInfoHolder.removeClass("active").find(".item-holder").removeClass("active");
        }

        return false;
    }
    applyCss(){
        for(let el of chooserItems){
            $(el).css({ transform: "translateX(-50%) translateY(-50%) rotate3d("+ tilt.x +", "+ tilt.y +", "+ 0 +", "+ radius * 10 +"deg)" });
        }
    }

}

export default Projects;