const toggler = document.querySelector(".toggler")
const nav = document.querySelector(".nav")


toggler.addEventListener("click" , () => {
    const currentSrc = toggler.getAttribute("src")
    const burgerIcon = 'images/icon-hamburger.svg'
    const closeIcon = 'images/icon-close.svg'
    if (currentSrc === burgerIcon ) {
        toggler.setAttribute("src" , closeIcon )
    }else {
        toggler.setAttribute('src', burgerIcon);

    }

    nav.classList.toggle("show")

    
}  )



