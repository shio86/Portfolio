// 選取 cover-banner 元素
var mainMenu = document.querySelector('#main-menu');
// 獲取 cover-banner 的寬度和高度
var mainMenuWidth = mainMenu.offsetWidth;
// 設置 CSS 變量 --short-side
mainMenu.style.setProperty('--main-menu-width', mainMenuWidth + 'px');
document.documentElement.style.setProperty('--main-menu-width', `${mainMenuWidth}px`)
// console.log(mainMenuWidth)



// 角落陰影變色
// 獲取父層和子層元素
const anchorMenu = document.getElementById('anchor-menu');
const anchorMenuItem = Array.from(document.querySelectorAll('#anchor-menu .item'))
const content = document.getElementById('content');

const worksGraphicLogoCover = document.getElementById('works-graphic-logo-cover');
const ethergifts = document.getElementById('ethergifts');
const leogifts = document.getElementById('leogifts');
const leotech = document.getElementById('leotech');
const chiwuhaiexpress = document.getElementById('chiwuhaiexpress');

const leftCorner = document.getElementById('left-corner');
const rightCorner = document.getElementById('right-corner');

// 創建和設定 IntersectionObserver 的函數
function createObserver(target, parentElement, enterColor) {
    const options = {
        root: content,
        threshold: 0.1 // 當子層內容進入或離開視口時觸發
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 當子層內容進入視口時改變父層元素的背景顏色
                parentElement.style.backgroundColor = enterColor;
            } 

            if (entry.isIntersecting) {
                // 當子層內容進入視口時改變父層元素的背景顏色
                parentElement.style.display = enterColor;
            } 
        });
    }, options);

    observer.observe(target);
}

// 定義不同的目標元素、父層元素及顏色
createObserver(worksGraphicLogoCover, leftCorner, '#000');
createObserver(worksGraphicLogoCover, rightCorner, '#000');
createObserver(worksGraphicLogoCover, anchorMenu, 'flex');

createObserver(ethergifts, leftCorner, '#B6E0D5');
createObserver(ethergifts, rightCorner, '#fff');
createObserver(ethergifts, anchorMenu, 'none');

createObserver(leogifts, leftCorner, '#A0B3B5');
createObserver(leogifts, rightCorner, '#fff');
createObserver(leogifts, anchorMenu, 'none');

createObserver(leotech, leftCorner, '#777777');
createObserver(leotech, rightCorner, '#fff');
createObserver(leotech, anchorMenu, 'none');

createObserver(chiwuhaiexpress, leftCorner, '#2F7793');
createObserver(chiwuhaiexpress, rightCorner, '#fff');
createObserver(chiwuhaiexpress, anchorMenu, 'none');

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

// anchor
const anchorBtn = document.querySelectorAll("#anchor-menu a")
anchorBtn.forEach((e) => {
    e.addEventListener("click", () => {
        var sectionId = e.getAttribute("data-id")
        var sectionhref = document.querySelector(sectionId)
        sectionhref.scrollIntoView({ behavior: "smooth" })
    })
})

// expertise name-list
const expertiseBtn = document.querySelectorAll("#works-graphic-logo-cover ul a")
expertiseBtn.forEach((e) => {
    e.addEventListener("click", () => {
        var sectionId = e.getAttribute("data-id")
        var sectionhref = document.querySelector(sectionId)
        sectionhref.scrollIntoView({ behavior: "smooth", block: "end" })
    })
})



