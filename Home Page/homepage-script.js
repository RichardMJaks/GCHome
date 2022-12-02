function PanelScroll() {
    panels = $(".panel");

    // Võtame paneeli ja sellele järgneva paneeli
    let target = $(".scrollable")[0];
    targetZ = target.style.zIndex;
    let follow = document.getElementById(`panel-${Math.abs(targetZ)+1}`);
    let drag = document.getElementById(`panel-${Math.abs(targetZ)-1}`);

    toggleScrollable = (switchTo) => {
        offset = $(switchTo).offset();
        switchTo.style.top = "0px";
        $(switchTo).offset(offset);
        switchTo.classList.add("scrollable");
        switchTo.classList.remove("unscrollable");

        pos = $(target).offset().top;
        target.style.top = `${pos}px`;
        console.log(target.style.top);
        target.classList.remove("scrollable");
        target.classList.add("unscrollable");
    }
    
    // Valitud paneeli muutmine
    switcher = (switchTo) => {
        minThreshold = 0;
        for (let index = targetZ - 1; index > 0; index--) {
            minThreshold += $(`#panel-${index}`).outerHeight() - 30;
        }
        maxThreshold = minThreshold + $(target).outerHeight();
        console.log($(targetScroll).scrollTop() - minThreshold, target.id, maxThreshold - $(targetScroll).scrollTop());

        if ($(targetScroll).scrollTop() < minThreshold || $(targetScroll).scrollTop() > maxThreshold) {
            toggleScrollable(switchTo);
        }
        
    }
    // Tagasi kerimine
    if (drag != null) {
        switcher(drag);
    }

    // Edasi kerimine
    if (follow != null) {
        switcher(follow);
    }


}

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

// Asetab paneelid õigetesse kohtadesse
$(".panel").offset(function(i, coords) {
    return {top: $($(".panel")[i]).offset().top + 1000, left: $($(".panel")[i]).offset().left}
});

let contentWrapper = $(".content-wrapper")[0];
contentWrapper.style.height = `${$("content-wrapper").outerHeight()}px`;

targetScroll = $(".content-wrapper")[0]
$(targetScroll).scroll(function() {PanelScroll()});
