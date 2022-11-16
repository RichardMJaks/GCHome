// Sauce: https://jsfiddle.net/k5VET/ 
var p=$('.news-content p');
var divh=$('.news-content').height();

//Isiklik lahendus
for (let index = 0; index < $(p).length; index++) {
    var element = $(p)[index];

    //Sauce: https://jsfiddle.net/k5VET/ 
    while ($(element).outerHeight()>divh) {
        $(element).text(function (index, text) {
            return text.replace(/\W*\s(\S)*$/, '...');
        });
    }
}
