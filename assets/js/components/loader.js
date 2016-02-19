"use strict";

let page = $("#page");

class Loader{

    constructor(){
        this._events();
    }
    _events(){
        $(window).on("load", (e) => { this.handleLoad(e) });
    }
    handleLoad(e){

        window.setTimeout(() => {

            page.addClass("loaded");
        }, 1000);

        return false;
    }
}

export default Loader;