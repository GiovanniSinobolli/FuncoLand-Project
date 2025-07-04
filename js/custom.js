$(document).ready(function(){
    $(function(){
        $("#head").load("./includes/metas.html");
        $("#header").load("./includes/header.html");
        $("#footer").load("./includes/footer.html");
    });

    $("#sendbutton").click(function (event) {
        event.preventDefault(); // stop form submission (TAKEN FROM https://stackoverflow.com/questions/8664486/javascript-code-to-stop-form-submission)
        $("#popup-message").fadeIn(); // show the popup
    });

    // close the popup
    $("#close-popup").click(function () {
        $("#popup-message").fadeOut(); // hide the popup
    });
});