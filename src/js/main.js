// const canvasModal = document.querySelector('canvas')
// const mainWrapper = document.querySelector('.main__wrapper')

// setTimeout(() => {
// 	canvasModal.classList.add('deactivate-canvas')
// 	mainWrapper.style.opacity = '1'
// }, 4000)

const navItems = document.querySelectorAll('.nav__item')
const boxAbout = document.querySelector('.box__about')
const boxWork = document.querySelector('.box__work')

navItems.forEach(item =>
	item.addEventListener('click', () => {
		item.classList.toggle('nav__item-active')
	})
)
