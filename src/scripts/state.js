let firstTimeShown = true
let currentTab = ''
let timeOut

export const hoverButton = (newTab) => {
  if (newTab !== currentTab) {
    if (currentTab) {
      const content = document.getElementById(currentTab)
      content.classList.replace('opacity-100', 'opacity-0')
      timeOut = setTimeout(() => {
        content.classList.replace('flex', 'hidden')
        timeOut = null
      }, 300)
    }

    if (newTab) {
      const content = document.getElementById(newTab)

      if (firstTimeShown) {
        timeOut = setTimeout(() => {
          content.classList.replace('hidden', 'flex')
          content.classList.replace('opacity-0', 'opacity-100')
          timeOut = null
        }, 450)
      } else {
        if (timeOut) clearTimeout(timeOut)
        content.classList.replace('hidden', 'flex')
        content.classList.replace('opacity-0', 'opacity-100')
      }

      firstTimeShown = false
    } else firstTimeShown = true

    currentTab = newTab
  }
}
