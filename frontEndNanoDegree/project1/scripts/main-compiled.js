"use strict";

$(function () {
    $.scrollify({
        section: ".panel"
    });

    $(".scroll,.scroll-btn").click(function (e) {
        e.preventDefault();

        $.scrollify.next();
    });
});

//# sourceMappingURL=main-compiled.js.map