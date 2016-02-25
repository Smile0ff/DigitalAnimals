"use strict";

let body = $("body");

class Loader{

    constructor(){
        this._events();
    }
    _events(){
        $(window).on("load", (e) => { this._handleLoad(e) });
    }
    _handleLoad(e){

        window.setTimeout(() => {
            body.addClass("__loaded");
        }, 2000);
    }

}

export default Loader;