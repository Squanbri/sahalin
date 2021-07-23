const company = document.querySelector('#company')
const fio = document.querySelector('#fio')
const email = document.querySelector('#email')
const phone = document.querySelector('#phone')
const city = document.querySelector('#city')
const department = document.querySelector('#department')
const selfDepartament = document.querySelector('#self-departament')
const specialty = document.querySelector('#specialty')
const count = document.querySelector('#count')
const payment = document.querySelector('#payment')
const education = document.querySelector('#education')
const experience = document.querySelector('#experience')
const toDate = document.querySelector('#to-date')
const comment = document.querySelector('#comment')
const students = document.querySelector('#students')
const send = document.querySelector('#send')
const modal = document.querySelector('#modal')

const fields = document.querySelectorAll('.quiz input')

function validation() {
  fields.forEach(field => {
    field.classList.remove('is-invalid')
  })

  const empty = []
  if(!company.value || !/\S[А-Яа-я ]/.test(company.value)) empty.push('#company')
  if(!phone.value || /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g.test(phone.value)) empty.push('#phone')
  // if(!city.value || !/\S[А-Яа-я ]/.test(city.value)) empty.push('#city')
  // if(!department.value || !/\S[А-Яа-я ]/.test(department.value)) empty.push('#department')
  // if(!specialty.value || !/\S[А-Яа-я ]/.test(specialty.value)) empty.push('#specialty')
  if(!count.value || !/^\d+$/.test(count.value)) empty.push('#count')
  // if(!payment.value) empty.push('#payment')
  // if(!education.value || !/\S[А-Яа-я ]/.test(education.value)) empty.push('#education')
  // if(!experience.value || !/\S[А-Яа-я ]/.test(experience.value)) empty.push('#experience')

  empty.forEach(el => {
    document.querySelector(el).classList.add('is-invalid')
  })


  let time = document.querySelector('[name="time"]:checked')
  switch(time.id) {
    case 'full-time':
      time = 'Полная занятость'
      break
    case 'part-time':
      time = 'Частичная занятость'
      break
    case 'flex-time':
      time = 'Гибкий график'
      break
  }

  let selDepartment = department.options[department.options.selectedIndex].textContent
  if (selDepartment === 'Свой вариант') selDepartment = selfDepartament.value

  let selExperience = experience.options[experience.options.selectedIndex].textContent

  let selStudents = students.checked ? 'Да' : 'Нет'
  
  // console.log(fio.value, email.value, phone.value)
  // console.log(city.value, selDepartment, specialty.value, count.value)
  // console.log(time, payment.value, education.value)
  // console.log(selExperience, comment.value, selStudents)

  if(empty.length === 0) {
    openModal()

    fetch('./../../php/interview.php', {
      method: 'POST',
      body: JSON.stringify({
        company: company.value,
        fio: fio.value,
        email: email.value,
        phone: phone.value,
        city: city.value,
        department: selDepartment,
        specialty: specialty.value,
        count: count.value,
        time: time,
        payment: payment.value,
        education: education.value,
        experience: selExperience,
        comment: comment.value,
        students: selStudents,
      })
    })
  }
}

const openModal  = () => modal.style.display = 'flex'
const closeModal = () => modal.style.display = 'none'

send.addEventListener('click', () => {
  validation()
})








// JQUERY

$.fias.token = 'eE5Srd9KkdDADYdabf9kTKQeiSYf64r8';
$.fias.url = 'https://kladr-api.ru/api.php';

$('#city').fias({
  oneString: true,
});

$("#phone").mask("8(999) 999-9999");

$('.quiz__item_hidden').hide()
department.addEventListener('click', e => {
  const target = department.options[department.options.selectedIndex]
  if (target.textContent === 'Свой вариант') {
    $('.quiz__item_hidden').show()
  }
  else {
    $('.quiz__item_hidden').hide()
  }
})