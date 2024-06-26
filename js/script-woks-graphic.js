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

const ethergifts = document.getElementById('ethergifts');
const leogifts = document.getElementById('leogifts');
const leotech = document.getElementById('leotech');
const chiwuhaiexpress = document.getElementById('chiwuhaiexpress');
const personalcard = document.getElementById('personalcard');
const logoRelatedWorks = document.getElementById('logo-related-works');
const mike = document.getElementById('mike');
const kanono = document.getElementById('kanono');

const worksGraphicLogoSection = Array.from(document.querySelectorAll('#works-graphic-logo section'))
const worksGraphicStandardSection = Array.from(document.querySelectorAll('#works-graphic-standard section'))
const worksGraphicBannerSection = Array.from(document.querySelectorAll('#works-graphic-banner section'))
const worksGraphicAnybearsSection = Array.from(document.querySelectorAll('#works-graphic-anybears section'))
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

createObserver(worksGraphicLogoSection[0], leftCorner, '#000');
createObserver(worksGraphicLogoSection[0], rightCorner, '#000');
createObserver(worksGraphicLogoSection[0], anchorMenu, 'flex');

createObserver(worksGraphicStandardSection[0], leftCorner, '#000');
createObserver(worksGraphicStandardSection[0], rightCorner, '#000');
createObserver(worksGraphicStandardSection[0], anchorMenu, 'flex');

createObserver(worksGraphicBannerSection[0], leftCorner, '#000');
createObserver(worksGraphicBannerSection[0], rightCorner, '#000');
createObserver(worksGraphicBannerSection[0], anchorMenu, 'flex');

createObserver(worksGraphicAnybearsSection[0], leftCorner, '#000');
createObserver(worksGraphicAnybearsSection[0], rightCorner, '#000');
createObserver(worksGraphicAnybearsSection[0], anchorMenu, 'flex');

createObserver(ethergifts, leftCorner, '#B6E0D5');
createObserver(leogifts, leftCorner, '#A0B3B5');
createObserver(leotech, leftCorner, '#777777');
createObserver(chiwuhaiexpress, leftCorner, '#2F7793');
createObserver(personalcard, leftCorner, '#1A1A1A');
createObserver(logoRelatedWorks, leftCorner, '#000');
createObserver(logoRelatedWorks, rightCorner, '#000');

createObserver(mike, leftCorner, '#80756F');
createObserver(kanono, leftCorner, '#C5B1DA');

worksGraphicLogoSection.slice(1).forEach(section => {
    createObserver(section, anchorMenu, 'none');
});
worksGraphicLogoSection.slice(1, 6).forEach(section => {
    createObserver(section, rightCorner, '#fff');
});

worksGraphicStandardSection.slice(1).forEach(section => {
    createObserver(section, anchorMenu, 'none');
    createObserver(section, rightCorner, '#fff');
});

worksGraphicBannerSection.slice(1).forEach(section => {
    createObserver(section, anchorMenu, 'none');
    createObserver(section, leftCorner, '#000');
    createObserver(section, rightCorner, '#000');
});

worksGraphicAnybearsSection.slice(1).forEach(section => {
    createObserver(section, anchorMenu, 'none');
    createObserver(section, leftCorner, '#000');
    createObserver(section, rightCorner, '#000');
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

topBtn.addEventListener('click', function () {
    contentMain.forEach(element => {
        element.scrollTo({
            top: 0,
            behavior: 'smooth' // 添加平滑滾動效果
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



