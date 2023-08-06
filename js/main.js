const dropMenu = document.querySelectorAll('.nav-menu-drop')
const btnDrop = document.querySelectorAll('.nav-item-drop')
const btnOpen = document.querySelectorAll('.icon')
const nav = document.querySelector('nav')
const navMenu = document.querySelectorAll('.nav-menu')
const main = document.querySelector('main')
const ilustration = document.querySelector('.ilustration')

window.addEventListener('resize', () => {
    let widthScreen = window.innerWidth

    if(widthScreen > 800){
        dropMenu.forEach(element => {
            element.classList.add('position-abs')
        })
        ilustration.src = "./images/image-hero-desktop.png"
    }else{
        ilustration.src = "./images/image-hero-mobile.png"
    }
})

btnOpen.forEach(btn=> {
    btn.addEventListener("click", () => {
        nav.classList.toggle('active')
        main.classList.toggle('active')
        })
})

btnDrop.forEach((element, index) => {
    element.addEventListener('click', () => {
        let widthScreen = window.innerWidth
        
        dropMenu[index].classList.toggle('active')     
        if(widthScreen < 800){
            dropMenu[index].classList.remove('position-abs')
        }
        
    })

})