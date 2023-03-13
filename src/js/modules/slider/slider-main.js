import Slider from "./slider";

export default class MainSlider extends Slider {
    constructor(btns) {
        super(btns);
    }

    showSlides(n) {
        if(n > this.slides.length) {
            this.slideIndex = 1;
        }

        if(n < 1) {
            this.slideIndex = this.slides.length;
        }

        try {
            this.hanson.style.opacity = '0';

            if(n === 3) {
                this.hanson.classList.add('animated');

                setTimeout(() => {
                    this.hanson.style.opacity = '1';
                    this.hanson.classList.add('slideInUp');
                }, 3000);
            } else {
                this.hanson.classList.remove('slideInUp');
            }
        } catch(e){}
    }

    plusSlides(n) {
        this.showSlides(this.slideIndex += n);
    }

    nextSlide(selector) { 
        const slideHeight= this.slides[0].clientHeight;
        if (this.offset !== (slideHeight * (this.slides.length - 1))) {
            this.offset += slideHeight;
        } else {
            this.offset = 0;
        }  

        this.container.style.transition = 'transform 1s';  
        this.container.style.transform = `translateY(-${this.offset}px)`;
    }
    
    prevSlide(selector) {
        const slideHeight= this.slides[0].clientHeight;
        if (this.offset === 0) {
            this.offset = slideHeight * (this.slides.length - 1);
        } else {
            this.offset -= slideHeight;
        }

        this.container.style.transition = 'transform 1s';  
        this.container.style.transform = `translateY(-${this.offset}px)`;
    }

    bindTriggers() {
        this.btns.forEach(item => {
            item.addEventListener('click', () => {
                this.plusSlides(1);
                this.nextSlide(item);
            });

            item.parentNode.previousElementSibling.addEventListener('click', (e) => {
                e.preventDefault();
                this.slideIndex = 1;
                this.showSlides(this.slideIndex);
            });
        });

        /* Переписать с императивного стиля */
        document.querySelectorAll('.prevmodule').forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                this.plusSlides(-1);
                this.prevSlide(item);
            });
        });

        document.querySelectorAll('.nextmodule').forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                this.plusSlides(1);
                this.nextSlide(item);
            });
        });
    }

    render() {
        if (this.container) {
            try {
                this.hanson = document.querySelector('.hanson');
            } catch(e) {}
    
            this.showSlides(this.slideIndex);
            this.bindTriggers();
        }
    }
}