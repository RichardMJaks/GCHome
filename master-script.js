// Richard M Jaks
window.scrollTo(0,0);
$(".main div").animate({
    opacity: 1,
    marginTop: 0
}, 2000, function() {});

// https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp
topbar = $(".topbar")[0];
cScroll = window.scrollY;
window.onscroll = () => {
    dScroll = window.scrollY;
    console.log(dScroll > cScroll);
    if (dScroll < cScroll) {
        topbar.style.top = "0";
    }
    else {
        topbar.style.top = "-100px";
    }
    cScroll = window.dScroll;
}