// 選取 cover-banner 元素
var mainMenu = document.querySelector('#main-menu');
// 獲取 cover-banner 的寬度和高度
var mainMenuWidth = mainMenu.offsetWidth;
// 設置 CSS 變量 --short-side
mainMenu.style.setProperty('--main-menu-width', mainMenuWidth + 'px');
document.documentElement.style.setProperty('--main-menu-width', `${mainMenuWidth}px`)
// console.log(mainMenuWidth)

// 滑動
// menu
const menuBtn = document.querySelectorAll("#menu a")
// console.log(btnExpertise)
menuBtn.forEach((e) => {
    // console.log(e)
    e.addEventListener("click", () => {
        var sectionId = e.getAttribute("data-id")
        // console.log(sectionId)
        var sectionhref = document.querySelector(sectionId)
        sectionhref.scrollIntoView({ behavior: "smooth" })
    })
})

