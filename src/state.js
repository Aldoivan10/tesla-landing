let firstTimeShown = true
let currentTab = ''
let timeOut

export const hoverButton = (newTab) =>
{
    if(newTab !== currentTab)
    {
        if(currentTab)
        {
            const content = document.getElementById(currentTab)

            content.classList.remove('flex')
            content.classList.add('hidden')
        }

        if(newTab)
        {
            const content = document.getElementById(newTab)

            if(firstTimeShown)
            {
                timeOut = setTimeout(() => 
                {  
                    content.classList.remove('hidden')
                    content.classList.add('flex')
                    timeOut = null
                }, 450)
            }
            else
            {
                if(timeOut) clearTimeout(timeOut)
                content.classList.remove('hidden')
                content.classList.add('flex')
            }

            firstTimeShown = false
        }
        else firstTimeShown = true

        currentTab = newTab
    }
}