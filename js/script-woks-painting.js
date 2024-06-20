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
// const contentMain = document.querySelector('.content-main');

const illustration1 = document.getElementById('illustration-1');

const worksPaintingIllustration = Array.from(document.querySelectorAll('#works-painting-illustration section'))
const worksPaintingposter = Array.from(document.querySelectorAll('#works-painting-poster section'))

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

// 插畫
createObserver(worksPaintingIllustration[0], anchorMenu, 'flex');

worksPaintingIllustration.slice(0).forEach(section => {
    createObserver(section, rightCorner, '#000');
    createObserver(section, leftCorner, '#000');
});

worksPaintingIllustration.slice(1).forEach(section => {
    createObserver(section, anchorMenu, 'none');
});

// 海報
createObserver(worksPaintingposter[0], anchorMenu, 'flex');

worksPaintingposter.slice(0).forEach(section => {
    createObserver(section, rightCorner, '#000');
    createObserver(section, leftCorner, '#000');
});

worksPaintingposter.slice(1).forEach(section => {
    createObserver(section, anchorMenu, 'none');
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



