import { hoverButton } from './state'

const header = document.querySelector('header')
const dialogs = Array.from(document.querySelectorAll('.dialog'))
const menuBackDrop = document.querySelector('#menu-backdrop')

header.addEventListener('mouseleave', (event) => {
  if (event.clientY > 0 && event.clientX < window.innerWidth) {
    menuBackDrop.style.opacity = '0'
    menuBackDrop.style.visibility = 'hidden'

    header.classList.add('bg-opacity-0')
    header.classList.add('text-white')
    header.classList.replace('h-[23.5rem]', 'h-12')

    const dialog = dialogs.find(el => !el.classList.contains('hidden'))
    if (dialog) dialog.classList.add('hidden')

    hoverButton('')
  }
})
