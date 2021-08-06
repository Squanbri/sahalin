document.addEventListener("DOMContentLoaded", () => {
  const municipalitiesLinks = document.querySelectorAll('.municipalities-list__link')
  const comeBack = document.querySelector('.come-back__link')
  
  municipalitiesLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
      const arrow = link.querySelector('svg')
      anime({
        targets: arrow,
        duration: 200,
        easing: 'linear',
        translateX: 20,
        scale: 1.05
      });
    })
  
    link.addEventListener('mouseleave', () => {
      const arrow = link.querySelector('svg')
      anime({
        targets: arrow,
        duration: 200,
        easing: 'linear',
        translateX: 0,
        scale: 1.05
      });
    })
  })
  
  comeBack.addEventListener('mouseover', () => {
    const arrow = comeBack.querySelector('img')
    anime({
      targets: arrow,
      duration: 100,
      easing: 'linear',
      translateX: -10,
    });
  })
  comeBack.addEventListener('mouseleave', () => {
    const arrow = comeBack.querySelector('img')
    anime({
      targets: arrow,
      duration: 100,
      easing: 'linear',
      translateX: 0,
    });
  })
  
  const links = document.querySelectorAll('.section-links__item, .footer-links__item')
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
});