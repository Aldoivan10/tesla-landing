let firstTimeShown = true
let currentTab = ''
let timeOut

export const hoverButton = (newTab) => {
  if (newTab !== currentTab) {
    if (currentTab) hideTab(currentTab)

    if (newTab) {
      showTab(newTab, firstTimeShown)
      firstTimeShown = false
    } else firstTimeShown = true

    currentTab = newTab
  }
}

function hideTab (tab) {
  const content = document.getElementById(tab)
  content.classList.replace('opacity-100', 'opacity-0')
  timeOut = setTimeout(() => {
    content.classList.replace('flex', 'hidden')
    timeOut = null
  }, 300)
}

function showTab (tab, firstTimeShown) {
  const content = document.getElementById(tab)
  const divs = content.querySelectorAll('.d-content')
  const leftDiv = divs[0]
  const rightDiv = divs[1]

  timeOut = setTimeout(() => {
    rightDiv.classList.replace('hidden', 'flex')
    rightDiv.classList.replace('opacity-0', 'opacity-100')
    timeOut = null
  }, 300)

  /* if (firstTimeShown) {

  } else {
    if (timeOut) clearTimeout(timeOut)
    content.classList.replace('hidden', 'flex')
    content.classList.replace('opacity-0', 'opacity-100')
  } */
}
