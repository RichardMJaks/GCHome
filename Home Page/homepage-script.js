function ParagraphClipper() {
    // Sauce: https://jsfiddle.net/k5VET/ 
    var p=$('.news-content p');
    var divh=$('.news-content').height();

    // Isiklik lahendus
    for (let index = 0; index < $(p).length; index++) {
        var element = $(p)[index];

        // Sauce: https://jsfiddle.net/k5VET/ 
        while ($(element).outerHeight()>divh) {
            $(element).text(function (index, text) {
                return text.replace(/\W*\s(\S)*$/, '...');
            });
        }
    }
}


// Kutsume kõik automaatsed funktsioonid
window.scrollTo(0,0);
ParagraphClipper();
$(".main div").animate({
    opacity: 1,
    marginTop: 0
}, 2000, function() {});

// Richard M Jaks leiutis
// Arvutab kui lai uudis saab olla
// n - mitu uudist ühel real
newsBlockWidth = (n) => {
    p = $(".panel").css("padding");
    s = $($(".panel")[0]).width();
    m = $($(".news-block")[0]).css("margin");

    return (s - p - m * n) / n;
}

w = newsBlockWidth(3);
$(".news-block, .news-block img, .news-content").width(w);