const toVoteBtn  = document.querySelectorAll('.candidate-item__btn')
const modalVote  = document.querySelector('#modal-vote')
const body       = document.body
const currWidth  = window.innerWidth
const candidates = document.querySelectorAll('.candidate-item')
const closeBtn   = document.querySelectorAll('.candidate-item__close-btn')
const toUpBtn    = document.querySelector('.candidate-list__to-top')

const facebookBtn = document.querySelector(".facebook-btn");
const odnoklasnikiBtn = document.querySelector(".odnoklasniki-btn");
const vkontakteBtn = document.querySelector(".vkontakte-btn");

const showModal  = () => {
  modalVote.style.display = 'flex'
  body.style.top = `-${window.scrollY}px`
  body.style.position = 'fixed'
}
const closeModal = (isVoted) => {
  modalVote.style.display = 'none'
  if (!isVoted) window.location.reload()
  const scrollY = body.style.top
  body.style.position = ''
  body.style.top = ''
  window.scrollTo(0, parseInt(scrollY || '0') * -1)
}

toVoteBtn.forEach(el => el.addEventListener('click', () => {
  const name = el.getAttribute('data-name')
  el.hasAttribute('data-voted') ? getFailVote() : getSuccessVote(name)
}))

// anime({
//   targets: headerLinks,
//   duration: 0,
//   easing: 'linear',
//   translateY: 0,
// });

if (currWidth <= 991) {
  candidates.forEach(candidate => {
    candidate.addEventListener('click', () => {
      const btnClose = candidate.querySelector('.candidate-item__close-btn')
      const gradient = candidate.querySelector('.candidate-item__grad')
      
      anime({
        targets: candidate,
        duration: 2000,
        easing: 'linear',
        height: '100%',
      });
      
      candidate.classList.add('candidate-item_active')
      btnClose.style.display = 'block'
      gradient.classList.remove('candidate-item__gradient')
    })
  })
  closeBtn.forEach(el => {
    el.addEventListener('click', event => {
      event.stopPropagation()
      el.parentNode.classList.remove('candidate-item_active')
      el.style.display = 'none'
      el.parentNode.childNodes[1 ].classList.add('candidate-item__gradient')
    })
  })
  toUpBtn.addEventListener('click', () => {
    window.scrollTo(0, 0)
  })
  window.addEventListener('scroll', () => {
    const scrollHeight = window.pageYOffset
  
    if (scrollHeight < 500 || scrollHeight > document.body.scrollHeight - 800)  toUpBtn.style.display = 'none'
    else toUpBtn.style.display = 'block'
  })
}

function getSuccessVote(name) {
  modalVote.innerHTML = `
    <div class="modal__container">
      <img src="https://www.65.amstroy.info/themes/alley/assets/images/pattern.svg" class="modal__patern">
      <button onclick="closeModal(false)">&#10006;</button>
      <h4>Спасибо!</h4>
      <p>Вы проголосовали за кандидата:<br>${name}<br>и приняли активное участи в жизни области</p>
      <span>Поддержите проект в соц. сетях</span>
      <div class="modal__links">
        <a href="#"><img src="https://www.65.amstroy.info/themes/alley/assets/icons/od.png" alt="Одноклассники"></a>
        <a href="#"><img src="https://www.65.amstroy.info/themes/alley/assets/icons/fb.png" alt="Фейсбук"></a>
        <a href="#"><img src="https://www.65.amstroy.info/themes/alley/assets/icons/vk.png" alt="Вконтакте"></a>
      </div>
    </div>
  `
  showModal()
}

function getFailVote() {
  modalVote.innerHTML = `
    <div class="modal__container">
      <img src="https://www.65.amstroy.info/themes/alley/assets/images/pattern.svg" class="modal__patern">
      <button onclick="closeModal(true)">&#10006;</button>
      <h4>Предупреждение</h4>
      <p>Вы уже проголосовали за одного из кандидатов,<br>повторное голосование невозможно</p>
      <span>Поддержите проект в соц. сетях</span>
      <div class="modal__links">
        <a href="#"><img src="https://www.65.amstroy.info/themes/alley/assets/icons/od.png" alt="Одноклассники"></a>
        <a href="#"><img src="https://www.65.amstroy.info/themes/alley/assets/icons/fb.png" alt="Фейсбук"></a>
        <a href="#"><img src="https://www.65.amstroy.info/themes/alley/assets/icons/vk.png" alt="Вконтакте"></a>
      </div>
    </div>
  `
  showModal()
}















