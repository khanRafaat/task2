var pinContainer = document.querySelector(".pin-code");
pinContainer.addEventListener('keyup', function (event) {
    var target = event.srcElement;

    var maxLength = parseInt(target.attributes["maxlength"].value, 10);
    var myLength = target.value.length;

    if (myLength >= maxLength) {
        var next = target;
        while (next = next.nextElementSibling) {
            if (next == null) break;
            if (next.tagName.toLowerCase() == "input") {
                next.focus();
                break;
            }
        }
    }

    if (myLength === 0) {
        var next = target;
        while (next = next.previousElementSibling) {
            if (next == null) break;
            if (next.tagName.toLowerCase() == "input") {
                next.focus();
                break;
            }
        }
    }
}, false);

pinContainer.addEventListener('keydown', function (event) {
    var target = event.srcElement;
    target.value = "";
}, false);

// Secret Mode 

document.getElementById('btnSecret').onclick = function () {
    var x = document.getElementById("pin-code").querySelectorAll('[name="pin"]');

    if (this.innerHTML === "Hide Pin") {
        for (let i = 0; i < x.length; i++) {
            x[i].type = "password";
        }
        this.innerHTML = "Show Pin";

    } else if (this.innerHTML === "Show Pin") {

        for (let i = 0; i < x.length; i++) {
            x[i].type = "number";
        }
        this.innerHTML = "Hide Pin";
    }
};

//Procced  function
document.getElementById('pinSubmit').onclick = function () {
    var x = document.getElementById("pin-code").querySelectorAll('[name="pin"]');
    var status = document.getElementById("status");
    var statusContainer = document.getElementById("statusContainer");
    for (let i = 0; i < x.length; i++) {
        if (x[i].value === "") {
            x[i].style.backgroundColor = "red";
            statusContainer.style.display = "flex";
            status.innerHTML = "Please Insert Pin Code";
        } else {
            x[i].style.removeProperty("background-color");
            statusContainer.style.display = "flex";
            var inputvalue = [...x].map(input => input.value);
            status.innerHTML = "Your Pin code is: " + inputvalue.join('');
        }
    }
};