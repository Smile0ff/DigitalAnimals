"use strict";

import "jquery";
import isMobile from "../lib/isMobile";
import Scrollify from "../lib/scrollify";
import Parallaxify from "../lib/parallaxify";
import Loader from "../lib/loader";

new Loader();

$(() => {

    new Scrollify();
    new Parallaxify();
    
});


$(window).scrollTop(0);