let firstTimeShown = true
let currentTab = ''
let timeOut

export const hoverButton = (newTab) => {
  if (newTab !== currentTab) {
    if (currentTab) {
      const content = document.getElementById(currentTab)
      content.classList.replace('flex', 'hidden')
    }

    if (newTab) {
      const content = document.getElementById(newTab)

      if (firstTimeShown) {
        timeOut = setTimeout(() => {
          content.classList.replace('hidden', 'flex')
          timeOut = null
        }, 450)
      } else {
        if (timeOut) clearTimeout(timeOut)
        content.classList.replace('hidden', 'flex')
      }

      firstTimeShown = false
    } else firstTimeShown = true

    currentTab = newTab
  }
}
