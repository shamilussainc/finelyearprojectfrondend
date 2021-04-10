const overlay = document.getElementById('overlay')
overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})


function openModal() {
  const model = document.getElementById('model')
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal() {
  const model = document.getElementById('model')
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}