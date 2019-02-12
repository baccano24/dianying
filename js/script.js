// 核心 改变ul的left  运动
var ul = document.getElementById("header-ul");
var pages = document.querySelectorAll("#page li");
var box = document.getElementsByTagName("header")

// 隔3s ul运动一次  
var i = 0;
var timer = null;
autoPlay();
// 页码事件
for (var k = 0; k < pages.length; k++) {
    pages[k].index = k;
    pages[k].onclick = function () {
        // 向左向右?
        // 跳转页码 和 当前所在的页码
        if (this.index > i) {
            move(ul, "left", -980 * this.index)
        } else {
            move(ul, "right", -980 * this.index)
        }
        i = this.index;
        // 页码跟随变色
        // 清空所有页码的颜色  当前页码颜色高亮
        pageCss()
    }
}
// 定时器停止和开启
box.onmouseover = function () {
    clearInterval(timer)
}
box.onmouseout = function () {
    autoPlay()
}

// 开启定时器
function autoPlay() {
    timer = setInterval(function () {
        i++;
        if (i >= 10) {
            ul.style.left = "0px";// 让ul 回到初始位置
            i = 1;                // 第一张 第二张
        }
        move(ul, "left", -980 * i);
        pageCss()
    }, 3000)
}


// 页码跟随变色 i   
function pageCss() {
    for (var t = 0; t < pages.length; t++) {
        pages[t].style.background = "#fff";
    }
    pages[i === 9 ? 0 : i].style.background = "orange";
}

// 物体运动函数
function move(ele, dir, end) {
    clearInterval(ele.timer)
    // 如果向左  如果向右
    if (dir === "left") {
        ele.timer = setInterval(function () {
            ele.style.left = ele.offsetLeft - 30 + "px";
            if (ele.offsetLeft <= end) {
                clearInterval(ele.timer);
                ele.style.left = end + "px";
            }
        })
    } else {
        ele.timer = setInterval(function () {
            ele.style.left = ele.offsetLeft + 30 + "px";
            if (ele.offsetLeft >= end) {
                clearInterval(ele.timer);
                ele.style.left = end + "px";
            }
        });
    }
}

$(".tabs-bar li").click(function () {
    $(this).css("color", "#ff5f16").siblings(".tabs-bar li").css("color", "#000");
    // 兄弟元素 siblings 同级的兄弟元素 参数是限制范围
    $(".main-list").eq($(this).index()).css("display", "block").siblings(".main-list").css("display", "none")
})

$("#city").click(function () {
    $(".box").animate({ top: "0.1rem", opacity: "0" }, 1000)
    $(".city-con").animate({ opacity: 'show' }, 2000)
    $(".city-con").animate({ opacity: '1' }, 1000)
})
$(".city-con h2 span").click(function () {
    $(".city-con").animate({ opacity: "0" })
    $(".box").animate({ opacity: '1', top: "0" }, 2000)
})



var top_scorll = document.getElementById("top_scorll");
window.onscroll = function () {
    var a = document.documentElement.scrollTop;
    if (a > 600) {
        top_scorll.style.top = "0px";
    } else {
        top_scorll.style.top = "-0.7rem";
    }
}

$("footer a").click(function () {
    $(".box").animate({ top: "0.1rem", opacity: "0" }, 1000);
    setTimeout(function () { document.location.href = "wode.html" }, 1000);
})

var city = document.getElementById("city");
var city_inner = document.querySelectorAll(".city-list span");
$(".city-list span").click(function () {
    $(".city-con").animate({ opacity: "0" })
    $(".box").animate({ opacity: '1', top: "0" }, 1000)
    // $(".box #city span").html($(this));
    city.innerHTML = this.textContent;
    console.log(this.textContent)
})

// for (var i = 0; i < city_inner.length; i++) {
//     city_inner[i].onclick = function () {
//         $(".city-con").animate({ opacity: "0" }, 100)
//         $(".box").animate({ opacity: '1', top: "0" }, 1000)
//         city.innerHTML = this;
//     }
// }