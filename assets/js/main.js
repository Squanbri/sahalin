const mainHeader = document.querySelector('.section-main__header')
const mainText = document.querySelector('.section-main__text')
const mainButtons = document.querySelector('.section-main__buttons')
const mainLinks = document.querySelector('.section-links')
const header = document.querySelector('.header')
const linksMess = document.querySelectorAll('.section-links__img')

window.addEventListener('scroll', () => {
  const scrollHeight = window.pageYOffset

  if (scrollHeight < 400)  linksMess.forEach(el => el.classList.remove('section-links__item_active'))
  if (scrollHeight > 400)  linksMess.forEach(el => el.classList.add('section-links__item_active'))
  if (scrollHeight > 900)  linksMess.forEach(el => el.classList.remove('section-links__item_active'))
  if (scrollHeight > 1500) linksMess.forEach(el => el.classList.add('section-links__item_active'))
  if (scrollHeight > 2300) linksMess.forEach(el => el.classList.remove('section-links__item_active'))
  if (scrollHeight > 2800) linksMess.forEach(el => el.classList.add('section-links__item_active'))
  if (scrollHeight > 3000) linksMess.forEach(el => el.style.position = 'absolute')
  
})

mainHeader.style.transform = 'translateY(50px)'
mainHeader.style.opacity = 0
anime({
  targets: mainHeader,
  translateY: 0,
  duration: 400,
  easing: 'linear',
  opacity: 1,
  delay: 400
});

mainText.style.transform = 'translateY(30px)'
mainText.style.opacity = 0
anime({
  targets: mainText,
  translateY: 0,
  duration: 400,
  easing: 'linear',
  opacity: 1,
  delay: 800
});

mainButtons.style.transform = 'translateY(10px)'
mainButtons.style.opacity = 0
anime({
  targets: mainButtons,
  translateY: 0,
  duration: 400,
  easing: 'linear',
  opacity: 1,
  delay: 1200
});

header.style.transform = 'translateY(-150px)'
anime({
  targets: header,
  translateY: 0,
  duration: 400,
  easing: 'linear',
  delay: 1600
});

mainLinks.style.opacity = 0
anime({
  targets: mainLinks,
  duration: 400,
  easing: 'linear',
  delay: 2000,
  opacity: 1,
});