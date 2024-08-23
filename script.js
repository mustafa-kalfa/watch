$(function(){
            
    var figures = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    var date = new Date();

    if (figures.indexOf(date.getSeconds()) > -1) {
        $(".second").html("0" + date.getSeconds());
    }
    else {
        $(".second").html(date.getSeconds());
    }

    if (figures.indexOf(date.getMinutes()) > -1) {
        $(".minute").html("0" + date.getMinutes());
    }
    else {
        $(".minute").html(date.getMinutes());
    }

    if (figures.indexOf(date.getHours()) > -1) {
        $(".hour").html("0" + date.getHours());
    }
    else {
        $(".hour").html(date.getHours());
    }

    var second = $(".second").html();
    var minute = $(".minute").html();
    var hour = $(".hour").html();

    setInterval(function () {
        $(".second").removeClass("rotate180");
        $(".minute").removeClass("rotate180");
        $(".hour").removeClass("rotate180");

        var date = new Date();
        
        if (figures.indexOf(date.getSeconds()) > -1) {
            $(".second").html("0" + date.getSeconds());
        }
        else {
            $(".second").html(date.getSeconds());
        }

        if (figures.indexOf(date.getMinutes()) > -1) {
            $(".minute").html("0" + date.getMinutes());
        }
        else {
            $(".minute").html(date.getMinutes());
        }

        if (figures.indexOf(date.getHours()) > -1) {
            $(".hour").html("0" + date.getHours());
        }
        else {
            $(".hour").html(date.getHours());
        }

        if ((second) !== $(".second").html()) {
            $(".second").addClass("rotate180");
            second = $(".second").html();
        }
        if (minute !== $(".minute").html()) {
            $(".minute").addClass("rotate180");
            minute = $(".minute").html();
        }
        if (hour !== $(".hour").html()) {
            $(".hour").addClass("rotate180");
            hour = $(".hour").html();
        }

    }, 500);
});