$(() => {
    $.scrollify({
        section:".panel"
    });

    $(".scroll,.scroll-btn").click((e) => {
        e.preventDefault();

        $.scrollify.next();
    });


});
