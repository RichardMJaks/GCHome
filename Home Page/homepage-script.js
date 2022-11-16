// Partial sauce: https://jsfiddle.net/k5VET/ 
// Ülejäänud on Richard M Jaks lahendus
var p=$('.news-content p');
var divh=$('.news-content').height();
console.log($(p));

for (let index = 0; index < $(p).length; index++) {
    var element = $(p)[index];
    while ($(element).outerHeight()>divh) {
        $(element).text(function (index, text) {
            return text.replace(/\W*\s(\S)*$/, '...');
        });
    }
}
