function showSlide(n) {
    const slides = document.getElementsByClassName('slide');
    const dots = document.getElementsByClassName('dot');
    slideIndex = n;
    if (n > slides.length) {slideIndex = 1};
    if (n < 1) {slideIndex = slides.length};
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
        console.log('eemaldasin slaidi')
        dots[i].className = dots[i].className.replace(' activeDot', '');
        console.log('deaktiveerisin ruudukesed')
    }
    slides[slideIndex-1].style.display = 'block';
    dots[slideIndex-1].className += ' activeDot';
    if (dots[slideIndex-1].className.includes('activeDot')) {console.log('on')}
}

function plusSlides(n) {
    showSlide(slideIndex + n)
}

function changeSlide(n) {
    showSlide(n)
}


let slideIndex = 1;
showSlide(slideIndex)

// Koodi kirjutades lähtusin paljusti w3schools'i lahendusest
// (https://www.w3schools.com/howto/howto_js_slideshow.asp)
// aga proovisin mõnda asja erinevalt teha ja sobitada rohkem
// just käesoleva projektida. Sellest on tingitud kahe
// lahenduse erinevused.