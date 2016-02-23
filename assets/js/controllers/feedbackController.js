"use strict";

let form = $("#feedback-form");
let loader = $("#loader");
let responseHolder = $("#response-holder");

let hasErrors = false;

class FeedbackController{

    constructor(){
        this._events();
    }
    _events(){
        form.on("submit", (e) => { this._handleForm(e) });
    }
    _handleForm(e){
        if(!form.valid()) return;
        e.preventDefault();

        loader.addClass("active");

        let formData = new FormData(form[0]);
        let formUrl = form.attr("action");

        fetch(formUrl, {
            method: "POST",
            body: formData
        })
        .then(this._checkStatus)
        .then(this._getJson)
        .then(this._updateUI)
        .catch((error) => {
            new Error(error);
        });
    }
    _checkStatus(res){
        hasErrors = (res.ok && res.status === 200) ? false : true;
        
        return res;
    }
    _getJson(res){
        return res.json();
    }
    _updateUI(json){
        let statusClass = hasErrors ? "error" : "success";

        loader.removeClass("active");

        responseHolder
            .html(`<p>${json.message}</p>`)
            .addClass("active "+ statusClass);

        if(!hasErrors) form[0].reset();

        window.setTimeout(() => {
            responseHolder.empty().removeClass("active error success");
        }, 5000);
    }
}

export default FeedbackController;