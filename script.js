let slidIndex = 0;
showSlides();
function showSlides() {
    let i;
    let slide = document.getElementsByClassName("slid");
    let dots = document.getElementsByClassName("dot");
    for (i=0; i<slide.length;i++){
        slide[i].style.display = "none";
    }
    slidIndex++;
    if (slidIndex > slide.length) {
        slidIndex = 1
    }
    for (i=0; i<dots.length;i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slide[slidIndex-1].style.display = "block";
    dots[slidIndex-1].className += " active";
    setTimeout(showSlides, 2000);
    

}
