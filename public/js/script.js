// Slider Logic
const slides = document.querySelectorAll(".slide-img");
let count = 0;
slides.forEach(
    (slide,idx) =>{
        slide.style.left = `${idx * 100}%`
    }
)

const slideImgae = () =>{
    slides.forEach(
        (slide) =>{
            slide.style.transform = `translateX(-${count * 100}%)`
        }
    )
}
const goPrev = () =>{
    if(count >= 0){
        count--;
        slideImgae();
    }
}
const goNext = () =>{
    if(count < (slides.length - 1)){
        count++;
        slideImgae();
    }
}

const slideShow =() =>{
    goNext();
    if(count === (slides.length - 1)){count = 0};
    setTimeout(slideShow, 5000);
}
slideShow();
