"use strict";

import "jquery";
import Scrollify from "../lib/scrollify";
import Parallaxify from "../lib/parallaxify";

$(() => {
    new Scrollify();
    new Parallaxify();
});

$(window).scrollTop(0);