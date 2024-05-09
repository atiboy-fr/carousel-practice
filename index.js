const switchBtn = document.querySelector('.switchBtn')
const onBtn = document.querySelector('.onBtn')
const offBtn = document.querySelector('.offBtn')
const carouselSection = document.querySelector('.carousel-section')
const switchContainer = document.querySelector('.mode')
const imageContainer = document.querySelector('.images')
const images = document.querySelectorAll('.image');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

const switchContainerWidth = Number.parseFloat(getComputedStyle(switchContainer).width) - 4
const switchBtnWidth = Number.parseFloat(getComputedStyle(switchBtn).width)
console.log(switchBtnWidth)
console.log(switchContainerWidth)


// imageContainer.style.transform = 'scale(0.3)'
// imageContainer.style.overflow = 'visible'
images.forEach((img, i) => {
    img.style.transform = `translateX(${100 * i}%)`
})



switchBtn.addEventListener('click', function() {
    if(switchBtn.classList.contains('onBtn')) {
    switchBtn.style.transform = `translateX(${switchContainerWidth - switchBtnWidth}px)`
    switchBtn.style.transition = 'transform 0.5s ease'
    switchBtn.classList.remove('onBtn')
    switchBtn.classList.add('offBtn')
    switchBtn.textContent = 'Off'
    carouselSection.style.backgroundColor = '#121212'
    carouselSection.style.transition = 'background-color 0.7s ease-in'
    } else {
    switchBtn.style.transform = 'translateX(0)'
    switchBtn.style.transition = 'transform 0.5s ease'
    switchBtn.textContent = 'On'
    switchBtn.classList.remove('offBtn')
    switchBtn.classList.add('onBtn')
    carouselSection.style.backgroundColor = '#FFF'
    carouselSection.style.transition = 'background-color 0.7s ease-out'
    }
})

const goToSlide = function(curSlide) {
    images.forEach((img, i) => {
        img.style.transform = `translateX(${100 * (i - curSlide)}%)`
    })
}

let curSlide = 0
const maxSlide = images.length - 1

const nextSlide = function() {
    if(curSlide === maxSlide) curSlide = 0
    else curSlide++
    goToSlide(curSlide)
   
}

const prevSlide = function() {
    if(curSlide === 0) curSlide = maxSlide 
    else curSlide--
        goToSlide(curSlide)

}

nextBtn.addEventListener('click', nextSlide)

prevBtn.addEventListener('click', prevSlide)
