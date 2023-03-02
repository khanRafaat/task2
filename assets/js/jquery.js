// add input

$(document).ready(function () {
    var wrapper = $(".pin-code");
    var add_button = $(".addMore");
    $(add_button).click(function (e) {
        e.preventDefault();
        $(wrapper).append('<input type="number" name="pin" maxlength="1">');
    });

});



// regex filter 


$(".enableRegex").click(function () {
    if ($(".enableRegex").text() === "Enable Regex Without Number") {

        $('[name="pin"]').attr("type", "text");
        $(".enableRegex").html("Disable Regex");
        $('[name="pin"]').bind('keypress', regexAlphaNumeric);

    } else if ($(".enableRegex").text() === "Disable Regex") {
        $('[name="pin"]').unbind('keypress', regexAlphaNumeric);
        $('[name="pin"]').attr("type", "number");
        $(".enableRegex").html("Enable Regex Without Number");
    }
});

function regexAlphaNumeric(event) {
    var value = String.fromCharCode(event.which);
    var pattern = new RegExp(/^[A-Z@~`!@#$%^*()_=+\\\';:\/?>.,-]/i);
    return pattern.test(value);
}

//  $('[name="pin"]').bind('keypress', testInput);
