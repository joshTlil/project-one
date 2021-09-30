var showBtn = document.querySelector('#hide-btn');
var clicked = true;

showBtn.forEach.$('.show-btn').onclick(function() {
    if (clicked) {
        $('.switcher').hide();
    } else if (!clicked) {
        $('div').hide();
    }
    return
});

// 