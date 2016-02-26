"use strict";

import "jquery";
import "fetch";
import "es6-promise";
import "jquery-validation";
import "jquery-mask-plugin";

import Loader from "../lib/loader";
import FeedbackController from "../controllers/feedbackController";

new Loader();

$(() => {

    $("form").validate();
    new FeedbackController();
});