const burgerBtn = document.querySelector('.header-btn')
const headerLinks = document.querySelector('.navbar-links')
const headerLogo = document.querySelector('.header-logo')
const headerWrapper = document.querySelector('.header__wrapper')
const headerPatern = document.querySelector('.header-burger__patern')

const btnDelay = () => {
  burgerBtn.style.pointerEvents = 'none'
  setTimeout(() => burgerBtn.style.pointerEvents = 'all', 500)
}

burgerBtn.addEventListener('click', () => {
  const hight = headerWrapper.style.height
  btnDelay()
  
  if(hight) {
    headerWrapper.style.height = ''
    headerWrapper.classList.remove('burger-active')
    document.documentElement.style.overflow = 'auto'
    
    headerPatern.style.opacity = 0
    
    anime({
      targets: headerLinks,
      duration: 0,
      easing: 'linear',
      translateY: 0,
    });
  }
  else {
    document.documentElement.style.overflow = 'hidden'
    headerWrapper.style.height = '100vh'
    headerWrapper.classList.add('burger-active')
    
    anime({
      targets: headerLinks,
      duration: 200,
      easing: 'linear',
      translateY: 400,
      delay: 200
    });
    
    anime({
      targets: headerPatern,
      duration: 200,
      easing: 'linear',
      opacity: 1,
      delay: 400
    });
  }
})

const btns = document.querySelectorAll('.btn')
if(btns) {
  btns.forEach(btn => {
    btn.addEventListener('mouseover', () => {
      anime({
        targets: btn,
        duration: 200,
        easing: 'linear',
        scale: 1.03
      });
    })
  
    btn.addEventListener('mouseout', () => {
      anime({
        targets: btn,
        duration: 200,
        easing: 'linear',
        scale: 1
      });
    })
  })
}

const links = document.querySelectorAll('.section-links__item, .footer-links__item')
if(links) {
  links.forEach(link => {
    link.addEventListener('mouseover', () => {
      anime({
        targets: link,
        duration: 200,
        easing: 'linear',
        translateY: -4
      });
    })
  
    link.addEventListener('mouseout', () => {
      anime({
        targets: link,
        duration: 200,
        easing: 'linear',
        translateY: 0
      });
    })
  })
}