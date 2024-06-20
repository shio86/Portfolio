// 選取 cover-banner 元素
var mainMenu = document.querySelector('#main-menu');
// 獲取 cover-banner 的寬度和高度
var mainMenuWidth = mainMenu.offsetWidth;
// 設置 CSS 變量 --short-side
mainMenu.style.setProperty('--main-menu-width', mainMenuWidth + 'px');
document.documentElement.style.setProperty('--main-menu-width', `${mainMenuWidth}px`)
// console.log(mainMenuWidth)


const anchorMenu = document.getElementById('anchor-menu');
const anchorMenuItem = Array.from(document.querySelectorAll('#anchor-menu .item'))
const content = document.getElementById('content');
const expertise = document.getElementById('expertise');
const leftCorner = document.getElementById('left-corner');
const contentMain = document.querySelectorAll('.content-main');

// 設定 IntersectionObserver 的選項
const options = {
    root: content,
    threshold: 0.1 // 當子層內容進入或離開視口時觸發
};

// 建立 IntersectionObserver 實例
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // 當子層內容進入視口時改變父層元素的背景顏色
            anchorMenuItem[0].style.color = '#fff';
            anchorMenuItem[1].style.color = '#fff'
            leftCorner.style.backgroundColor = '#fff';
        } else {
            // 當子層內容離開視口時恢復父層元素的背景顏色
            anchorMenuItem[0].style.color = '#000'
            anchorMenuItem[1].style.color = '#000'
            leftCorner.style.backgroundColor = '#000';
        }
    });
}, options);

// 觀察子層內容元素
observer.observe(expertise);




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

// expertise name-list
const expertiseBtn = document.querySelectorAll("#expertise a")
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



