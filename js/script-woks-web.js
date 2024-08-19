// 選取 cover-banner 元素
var mainMenu = document.querySelector('#main-menu');
// 獲取 cover-banner 的寬度和高度
var mainMenuWidth = mainMenu.offsetWidth;
// 設置 CSS 變量 --short-side
mainMenu.style.setProperty('--main-menu-width', mainMenuWidth + 'px');
document.documentElement.style.setProperty('--main-menu-width', `${mainMenuWidth}px`)
// console.log(mainMenuWidth)



// 角落陰影變色
const anchorMenu = document.getElementById('anchor-menu');
const anchorMenuItem = Array.from(document.querySelectorAll('#anchor-menu .item'))
const content = document.getElementById('content');
// const contentMain = document.querySelector('.content-main');

const lumeWeb = document.getElementById('lume-web');
const gradientLume = 'linear-gradient(220deg, rgba(238, 179, 208, .3), rgba(137, 209, 239, .3), rgba(164, 213, 190, .3))'
const portfolioWeb = document.getElementById('portfolio-web');
const fmbsshopWeb = document.getElementById('fmbsshop-web');
const fmbsleaveWeb = document.getElementById('fmbsleave-web');

const worksUiuxfrontendSection = Array.from(document.querySelectorAll('#works-uiuxfrontend section'))
const contentMain = document.querySelectorAll('.content-main');

const leftCorner = document.getElementById('left-corner');
const rightCorner = document.getElementById('right-corner');

function createObserver(target, parentElement, enterColor) {
    const options = {
        root: content,
        threshold: 0.1 // 當子層內容進入或離開視口時觸發
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 當子層內容進入視口時改變父層元素的背景顏色
                parentElement.style.background = enterColor;
            }

            if (entry.isIntersecting) {
                // 當子層內容進入視口時改變父層元素的背景顏色
                parentElement.style.display = enterColor;
            }
        });
    }, options);

    observer.observe(target);
}

createObserver(worksUiuxfrontendSection[0], leftCorner, '#000');
createObserver(worksUiuxfrontendSection[0], rightCorner, '#000');

createObserver(lumeWeb, leftCorner, gradientLume);
createObserver(portfolioWeb, leftCorner, "#2C2C2C");
createObserver(fmbsshopWeb, leftCorner, "#A0B1CC");
createObserver(fmbsleaveWeb, leftCorner, "#7AB0CF");


worksUiuxfrontendSection.slice(1).forEach(section => {
    createObserver(section, rightCorner, '#fff');
});



// 滑動
// menu
const menuBtn = document.querySelectorAll("#menu a")
menuBtn.forEach((e) => {
    e.addEventListener("click", () => {
        var sectionId = e.getAttribute("data-id")
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

// top-btn
const topBtn = document.getElementById("top-btn");
let scrollTimeout;

contentMain.forEach(element => {
    element.addEventListener('mousemove', function () {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }

        topBtn.classList.add('show');

        scrollTimeout = setTimeout(function () {
            topBtn.classList.remove('show');
        }, 1500);
    });
});

topBtn.addEventListener('click', function () {
    contentMain.forEach(element => {
        element.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// works-cover a
const expertiseBtn = document.querySelectorAll(".works-cover ul a")
expertiseBtn.forEach((e) => {
    e.addEventListener("click", () => {
        var sectionId = e.getAttribute("data-id")
        var sectionhref = document.querySelector(sectionId)
        sectionhref.scrollIntoView({ behavior: "smooth", block: "end" })
    })
})

// breadcrumbs a
const breadcrumbsBtn = document.querySelectorAll(".breadcrumbs a")
breadcrumbsBtn.forEach((e) => {
    e.addEventListener("click", () => {
        var sectionId = e.getAttribute("data-id")
        var sectionhref = document.querySelector(sectionId)
        sectionhref.scrollIntoView({ behavior: "smooth", block: "end" })
    })
})



