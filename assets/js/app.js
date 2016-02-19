"use strict";

import "jquery";
import ScrollController from "./controllers/scrollController";
import Parallaxify from "./lib/parallaxify";

$(() => {
    new ScrollController();
    new Parallaxify();
});
