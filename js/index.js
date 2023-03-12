const userSwiper = function () {
  let breakpoint = window.matchMedia('(min-width: 530px)')
  let mySwiper
  const breakpointChecker = function () {
    if (breakpoint.matches === true) {
      if (mySwiper !== undefined) mySwiper.destroy(true, true)
      return
    } else if (breakpoint.matches === false) {
      return enableSwiper()
    }
  }
  const enableSwiper = function () {
    myswiper = new Swiper('.swiper', {
      loop: false,
      slidesPerView: 1.5,
      spaceBetween: 16,
      a11y: true,
      keyboardControl: true,
      grabCursor: true,

      keyboard: {
        enable: false,
        onlyInViewport: false
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    })
  }
  breakpoint.addListener(breakpointChecker)

  breakpointChecker()
}
userSwiper()

/* выплывающие блоки */
let contenerSlidebBrend = document.querySelector('.contener-slide__brend')
let replica = document.createElement('div')
replica.classList.add('replica')
replica.style.display = 'none'

function renderBrand(logotip) {
  const contener = document.createElement('div')
  contener.classList.add('contener-slide__brend-logo')

  const picture = document.createElement('img')
  picture.classList.add('contener-slide__brend-logo--emblem')
  picture.src = logotip

  const button = document.createElement('div')
  button.classList.add('buttone-open')

  contenerSlidebBrend.appendChild(replica)
  replica.append(contener, picture, button)
  contener.prepend(picture, button)
}
renderBrand('./img/lenovo.svg')
renderBrand('./img/samsung.svg')
renderBrand('./img/Apple.svg')

// Кнопки

/* === кнопка выдвигающие блоки === */
let buttonOpen = document.querySelector('.pressbutton')

let buttonClose = document.querySelector('.closebutton')

buttonOpen.addEventListener('click', function () {
  replica.style.display = 'grid'
  buttonOpen.style.display = 'none'
  buttonClose.style.display = 'block'
})

buttonClose.addEventListener('click', function () {
  replica.style.display = 'none'
  buttonClose.style.display = 'none'
  buttonOpen.style.display = 'block'
})

let menuOpen = document.querySelector('.header-menu__burger')
let right = document.querySelector('.right')
let mainSection = document.querySelector('.main-section')
menuOpen.addEventListener('click', function () {
  right.classList.add('right-close')
  mainSection.classList.add('main-section-open')
})

let menuClose = document.querySelector('.main-section__header-menu__burger')
menuClose.addEventListener('click', function () {
  mainSection.classList.remove('main-section-open')
  right.classList.remove('right-close')
})
/*  === кнопка обратная связь === */
let feedbackOpen = document.querySelector('.contact-menu__profile')
let feedback = document.querySelector('.feedback')
feedbackOpen.addEventListener('click', function () {
  right.classList.add('right-close')
  mainSection.classList.remove('main-section-open')
  mainSection.classList.add('main-section__close')
  feedback.classList.add('feedback-opene')
})

let feedbackClose = document.querySelector('.feedback-headere__close')
feedbackClose.addEventListener('click', function () {
  feedback.classList.remove('feedback-opene')
  right.classList.remove('right-close')
  mainSection.classList.remove('main-section__close')
})
/* === кнопка  заказать звонок === */
let callOpen = document.querySelector('.contact-menu__call')
let call = document.querySelector('.call')
callOpen.addEventListener('click', function () {
  right.classList.add('right-close')
  mainSection.classList.remove('main-section-open')
  mainSection.classList.add('main-section__close')
  call.classList.add('call-opene')
})
let callClose = document.querySelector('.call-headere__close')

callClose.addEventListener('click', function () {
  call.classList.remove('call-opene')
  right.classList.remove('right-close')
  mainSection.classList.remove('main-section__close')
})
/* === кнопка читать далее === */
let readOpen = document.querySelector('.content-body__alltext-buttone')
let contentText = document.querySelector('.content-body__text')
let сontentBodyAlltext = document.querySelector('.сontent-body__alltext')
readOpen.addEventListener('click', function () {
  contentText.classList.add('content-body__text-open')
  сontentBodyAlltext.classList.remove('сontent-body__alltext')
  сontentBodyAlltext.classList.add('сontent-body__alltext-close')
  readClose.classList.add('сontent-body__close-open')
})

let readClose = document.querySelector('.сontent-body__close')

readClose.addEventListener('click', function () {
  contentText.classList.remove('content-body__text-open')
  readClose.classList.remove('сontent-body__close-open')
  сontentBodyAlltext.classList.remove('сontent-body__alltext-close')
})
