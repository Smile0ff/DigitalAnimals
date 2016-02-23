"use strict";

import "jquery";
import "fetch";
import "es6-promise";
import "jquery-validation";
import "jquery-mask-plugin";

import FeedbackController from "../controllers/feedbackController";

$(() => {

    $("form").validate();
    new FeedbackController();
});