const imgWrap = document.querySelectorAll('.novelties__img')
const container = document.querySelector('.novelties__list')

if (imgWrap) {

    window.addEventListener('resize', () => {
        setHeight()
    })

    function setHeight() {

        imgWrap.forEach((el, i) => {

            const width = (el.offsetWidth / container.offsetWidth) * 100

            if (width > 33 && width < 50) {
                el.classList.add('custom')
            }
            if (width === 100) {
                el.classList.add('default')
            }

        })

    }
    setHeight()
}
