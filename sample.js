$(document).ready(function () {
    /*  Local Storage
    * Emmagatzematge persistent
    * No caduca
*/

    let listItems = $("#list li");

    // 1r Mirem si el navegador es compatible
    if (typeof (Storage) !== "undefined") {
        console.log("Size1: " + localStorage.getItem("size"))
        // Recuperem els valors i actuem en consecuencia
        if (localStorage.getItem("size") === "undefined") {
            localStorage.setItem("size", listItems.length);
        } else {
            console.log("SizeFor: " + localStorage.getItem("size"))

            for (let i = listItems.length; i < localStorage.getItem("size"); i++) {
                console.log("Adding: " + i)

                $("#list").append("<li>Element " + i + " </a></li>");
            }
        }

    } else {
        console.log("LocalStorage not supported")
    }


    $("button").click(function () {
        listItems = $("#list li");

        let nextIndex = listItems.length;
        console.log("Click: " + nextIndex)

        $("#list").append("<li>Element " + nextIndex + "</li>");
        localStorage.setItem("size", listItems.length);
    });
    
});


