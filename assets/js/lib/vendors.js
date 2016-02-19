"use strict";

export default function getVendor(property){
    let style = document.createElement("div").style;
    let vendors = ["ms", "O", "Moz", "Webkit"];

    if(style[property] === "") return property;

    property = property.charAt(0).toUpperCase() + property.slice(1);

    for(let i = 0; i < vendors.length; i++){
        if(style[vendors[i] + property] === "") return vendors[i] + property;
    }
}