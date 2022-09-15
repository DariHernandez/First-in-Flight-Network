const header_btn_display = document.querySelector ("#header .btn.display")
const header_btn_close = document.querySelector ("#header .btn.close")
const header = document.querySelector('#header')

console.log (header_btn_display)

header_btn_display.addEventListener ("click", function (e) {
    header.classList.remove ("clossed")
})

header_btn_close.addEventListener ("click", function (e) {
    header.classList.add ("clossed")
})