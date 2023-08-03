import { hoverButton } from './state.js'

const menuBackDrop = document.querySelector('#menu-backdrop')
const tabs = document.querySelectorAll('button.header-button')
const header = document.querySelector('header')

tabs.forEach(item => {
  const idTab = item.getAttribute('id-tab')

  item.addEventListener('mouseenter', () => {
    const { left, top, width, height } = item.getBoundingClientRect()

    menuBackDrop.style.setProperty('--left', `${left}px`)
    menuBackDrop.style.setProperty('--top', `${top}px`)
    menuBackDrop.style.setProperty('--width', `${width}px`)
    menuBackDrop.style.setProperty('--height', `${height}px`)

    menuBackDrop.style.opacity = '1'
    menuBackDrop.style.visibility = 'visible'

    header.classList.remove('bg-opacity-0')
    header.classList.remove('text-white')
    header.classList.replace('h-12', 'h-[23.5rem]')

    hoverButton(idTab)
  })
})
