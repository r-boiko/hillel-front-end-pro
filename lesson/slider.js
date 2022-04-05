class Slider {
  defaultSettings = {
    selector: '.slider',
    arrows: false,
    dots: false,
    loop: false,
    autoplay: false,
  };

  state = {
    currentSlide: 0,
  }

  templates = {
    renderDots: function (slides) {
      return (
        `<ul class="slider-dots">
            ${slides.map(function (_, index) {
              return (
                `<li class="slider-dot">
                   <button type="button">${index + 1}</button>
                 </li>`
              )
            }).join('')}
        </ul>`
      )
    },
    renderArrows: function () {
      return (
        `<ul class="slider-arrows">
           <li class="arrow arrow-prev">
             <button type="button">prev</button>
           </li>
           <li class="arrow arrow-next">
             <button type="button">next</button>
           </li>
        </ul>`
      )
    },
    renderTrack: function (slides) {
      return (
        `<div class="slider-list">
            <div class="slider-track">
                ${slides}
            </div>
        </div>`
      )
    },
    renderSlides: function (slides) {
      return slides.map(function (slide) {
        return (
          `<div class="slider-slide">
            ${slide.outerHTML}
          </div>`
        )
      }).join('');
    }
  }

  constructor(settings) {
    this.settings = Object.assign(this.defaultSettings, settings);
  }

  setState(state) {
    this.state = Object.assign(this.state, state);
  }

  render() {
    const slider = document.querySelector(this.settings.selector);
    const sliderChildren = Array.from(slider.children);
    const slides = this.templates.renderSlides(sliderChildren);
    const renderTrack = this.templates.renderTrack(slides);

    slider.innerHTML = renderTrack;

    if(this.settings.arrows) {
      const arrows = this.templates.renderArrows();

      slider.insertAdjacentHTML('beforeend', arrows);
    }

    if(this.settings.dots) {
      const dots = this.templates.renderDots(sliderChildren);

      slider.insertAdjacentHTML('beforeend', dots);
    }

    this.setState({
      slidesCount: sliderChildren.length,
      elements: {
        slider: slider,
        track: slider.querySelector('.slider-track'),
        next: slider.querySelector('.arrow-next'),
        prev: slider.querySelector('.arrow-prev'),
        dots: slider.querySelector('.slider-dots'),
      }
    })
  }

  arrowsEvents() {
    const next = this.state.elements.next;
    const prev = this.state.elements.prev;

    next.addEventListener('click', this.nextSlide.bind(this))

    prev.addEventListener('click', this.prevSlide.bind(this))
  }

  nextSlide() {
    const track = this.state.elements.track;
    const slidesCount = this.state.slidesCount;

    if(Math.abs(this.state.currentSlide) === slidesCount - 1) return;

    this.state.currentSlide -= 1;

    track.style.transform = `translateX(${this.state.currentSlide * 100}%)`;
  }

  prevSlide() {
    const track = this.state.elements.track;

    if(this.state.currentSlide === 0) return;

    this.state.currentSlide += 1;

    track.style.transform = `translateX(${this.state.currentSlide * 100}%)`;
  }

  slideChange(e) {
    const track = this.state.elements.track;
    const dot = e.target;

    if(dot.classList.contains('slider-dot')) {
      this.state.currentSlide = -(dot.textContent - 1)

      track.style.transform = `translateX(${this.state.currentSlide * 100}%)`;
    }
  }

  dotsEvents() {
    const dots = this.state.elements.dots;

    dots.addEventListener('click', this.slideChange.bind(this))
  }

  init() {
    this.render();
    this.arrowsEvents();
    this.dotsEvents();
  }
}

class CustomSlider extends Slider {
  constructor(settings) {
    super(settings);
  }

  customMethod() {
    console.log('customMethod');
  }
}

const slider = new CustomSlider({
  selector: '.slider-test',
  arrows: true,
  dots: true,
});

slider.init();
slider.customMethod();
