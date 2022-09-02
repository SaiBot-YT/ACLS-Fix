// ==UserScript==
// @name         ACLS Fix
// @namespace    http://tampermonkey.net/
// @version      0.5
// @description  Fixing Acls
// @author       SaiCode
// @match        https://satowingservice.de/newjob
// @icon         https://satowingservice.de/images/sats_logo.jpg
// @grant        none
// ==/UserScript==

(function () {
    "use strict";

    var company = document.getElementById("cmpselect");
    var plate = document.getElementById("plate");
    var garage = document.getElementById("garage");
    var companys = [
        { value: "99999", name: "ACLS" },
        { value: "912000000", name: "LSFD" },
        { value: "911000000", name: "LSPD" },
        { value: "123412", name: "DCC" },
        { value: "919000000", name: "SANG" },
        { value: "914000000", name: "USMS" },
        { value: "11880", name: "DMV" },
        { value: "913000000", name: "DOJ" },
        { value: "5550161", name: "DOC" },
    ];
    //add event listener to the input field and print on change
    plate.addEventListener("change", function () {
        plate.value = plate.value.toUpperCase();
        for (var i = 0; i < companys.length; i++) {
            if (plate.value.startsWith(companys[i].name)) {
                company.value = companys[i].value;
                kzkontrolle = function () {};
                $("#cstid").val(company.value);
                cstdata();
                getdmg();
                garage.value = "ACLS";
                
            }
        }
        
    });
    //add a button to copy the input field value to the clipboard
    var button = document.createElement("button");
    button.innerHTML = "Verwendungszweck kopieren";
    button.classList = "button ui-button ui-corner-all ui-widget";
    button.addEventListener("click", function () {
        navigator.clipboard.writeText("ACLS Reperatur: " + plate.value);
    });
    plate.parentElement.appendChild(button);

    
})();
