
// init
const leftBtn = document.getElementById('left-btn');
const rightBtn = document.getElementById('right-btn');
const msgBox = document.getElementById('msg-box');

// init
leftBtn.style.color = '#beb9b8';


leftBtn.onclick = function () {
    msgBox.scrollLeft -= 300;
    console.log('scrollLeft', msgBox.scrollLeft);
    // 左滑時，右邊按鈕 enable
    if (msgBox.scrollLeft > 0) {
        rightBtn.style.color = '#4d13d1';
    }
    // 左滑到底時，左邊按鈕 disable
    if (msgBox.scrollLeft === 0) {
        leftBtn.style.color = '#beb9b8';
    }
};

rightBtn.onclick = function () {
    document.getElementById('msg-box').scrollLeft += 300;
    console.log('scrollLeft', msgBox.scrollLeft);
    // 右滑時，左邊按鈕 enable
    if (msgBox.scrollLeft > 0) {
        leftBtn.style.color = '#4d13d1';
    }
    // 右滑到底時，右邊按鈕 disable
    // 計算方式：scrollWidth 為內容寬度，clientWidth 為顯示寬度，兩者相減為 滑動寬度
    // https://www.runoob.com/jsref/prop-element-scrollwidth.html
    // https://stackoverflow.com/questions/53320286/how-to-detect-if-the-end-of-horizontal-scrollbar-is-reached
    if (Math.abs(msgBox.scrollLeft) === (msgBox.scrollWidth - msgBox.clientWidth)) {
        rightBtn.style.color = '#beb9b8';
    }
};