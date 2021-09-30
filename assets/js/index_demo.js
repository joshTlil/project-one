var clicked1 = true;
var clicked2 = true;
var clicked3 = true;
var clicked4 = true;

$('.show-btn1').click(function() {
    if (clicked1) {
        $('.hide1').show();
        clicked1 = false;
    } else if (!clicked1) {
        $('.hide1').hide();
        clicked1 = true;
    }
    return
});

$('.show-btn2').click(function() {
    if (clicked2) {
        $('.hide2').show();
        clicked2 = false;
    } else if (!clicked2) {
        $('.hide2').hide();
        clicked2 = true;
    }
    return
});

$('.show-btn3').click(function() {
    if (clicked3) {
        $('.hide3').show();
        clicked3 = false;
    } else if (!clicked3) {
        $('.hide3').hide();
        clicked3 = true;
    }
    return
});

$('.show-btn4').click(function() {
    if (clicked4) {
        $('.hide4').show();
        clicked4 = false;
    } else if (!clicked4) {
        $('.hide4').hide();
        clicked4 = true;
    }
    return
});