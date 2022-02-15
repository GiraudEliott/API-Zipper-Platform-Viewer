


window.onscroll = function () {
    myFunction()
  }
  
  var navbar = document.getElementById('navbar')
  var sticky = navbar.offsetTop
  
  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add('sticky')
    } else {
      navbar.classList.remove('sticky')
    }
  }
  
  let inner = document.querySelector('.inner')
  
  function setCoords(e, type) {
    let idX = type + 'X'
    let idY = type + 'Y'
  
    document.getElementById(idX).innerText = e[idX]
    document.getElementById(idY).innerText = e[idY]
  }
  
  function update(e) {
    setCoords(e, 'screen')
  }
  
  inner.addEventListener('mouseenter', update, false)
  inner.addEventListener('mousemove', update, false)
  inner.addEventListener('mouseleave', update, false)
  
  const cursor = document.querySelector('.cursor')
  
  document.addEventListener('mousemove', (e) => {
    cursor.setAttribute(
      'style',
      'top: ' + (e.pageY - 10) + 'px; left: ' + (e.pageX - 10) + 'px;'
    )
  })
  
  let credit = document.getElementById('credit')
  let block2 = document.getElementById('block2')
  let enieme = document.getElementById('enieme')
  
  let scan2 = document.getElementById('scan2')
  let scan3 = document.getElementById('scan3')
  let scan4 = document.getElementById('scan4')
  let scan5 = document.getElementById('scan5')
  
  let scann2 = document.getElementById('scann2')
  let scann3 = document.getElementById('scann3')
  let scann4 = document.getElementById('scann4')
  let scann5 = document.getElementById('scann5')
  let scann6 = document.getElementById('scann6')
  let scann7 = document.getElementById('scann7')
  let scann8 = document.getElementById('scann8')
  let scann9 = document.getElementById('scann9')
  let scann10 = document.getElementById('scann10')

  let scannn1 = document.getElementById('scannn1')
  let scannn2 = document.getElementById('scannn2')
  let scannn3 = document.getElementById('scannn3')
  let scannn4 = document.getElementById('scannn4')
  let scannn5 = document.getElementById('scannn5')
  let scroll = document.getElementById('scroll')
  
  let back = document.getElementById('back')
  
  window.addEventListener('scroll', function () {
    let value = window.scrollY
  
    enieme.style.marginLeft = value * 1 + 'px'
    credit.style.marginLeft = value * 1 + 'px'
    block2.style.marginLeft = value * 1 + 'px'
  
    scan2.style.marginRight = value * 0.1 + 'px'
    scan3.style.marginRight = value * 0.2 + 'px'
    scan4.style.marginRight = value * 0.3 + 'px'
    scan5.style.marginRight = value * 0.4 + 'px'
  
    scann2.style.marginLeft = value * -1 + 'px'
    scann5.style.marginLeft = value * -1 + 'px'
  
    scann3.style.marginLeft = value * -1 + 'px'
    scann6.style.marginLeft = value * -1 + 'px'
  
    scann4.style.marginLeft = value * -1 + 'px'
    scann7.style.marginLeft = value * -1 + 'px'
  
    scann8.style.marginLeft = value * 1 + 'px'
    scann9.style.marginLeft = value * 1 + 'px'
    scann10.style.marginLeft = value * 1 + 'px'
  
    scannn2.style.bottom = value * 0.25 + 'px'
    scannn3.style.bottom = value * 0.5 + 'px'
    scannn4.style.bottom = value * 0.75 + 'px'
    scannn5.style.bottom = value * 1 + 'px'
  
    scroll.style.marginLeft = value * 1 + 'px'
  
    back.style.marginLeft = value * -0.5 + 'px'
  })
  