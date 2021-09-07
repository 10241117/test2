var home_pics = [
    "https://i.imgur.com/WWvzR4d.jpg",
    "https://i.imgur.com/l9mQEJN.jpg",
    "https://i.imgur.com/Lc70buM.jpg",
    "https://i.imgur.com/9y9m9L5.jpg",
    "https://i.imgur.com/yryg94Q.jpg",
    "https://i.imgur.com/rED2m7h.jpg",
    "https://i.imgur.com/wmWAyQU.jpg",
    "https://i.imgur.com/uanhmHu.jpg",
    "https://i.imgur.com/N5ynM3r.jpg",
    "https://i.imgur.com/9zWFOto.jpg",
    "https://i.imgur.com/33ekzeP.jpg",
    "https://i.imgur.com/QLiT7Bg.jpg",
    "https://i.imgur.com/bIhH07J.jpg"
]
var video_pics = [
    "https://i.imgur.com/Gwvicpc.jpg",
    "https://i.imgur.com/MAzpdmy.jpg",
    "https://i.imgur.com/XLh5ZkS.jpg",
    "https://i.imgur.com/WxN8zi5.jpg",
    "https://i.imgur.com/GaV0wh8.jpg",
    "https://i.imgur.com/NCVvhhD.jpg",
    "https://i.imgur.com/ZuRtKzZ.jpg",
    "https://i.imgur.com/LJqkgZ7.jpg",
    "https://i.imgur.com/TeHrXkb.jpg",
    "https://i.imgur.com/plONvnp.jpg",
    "https://i.imgur.com/k0a0pde.jpg",
    "https://i.imgur.com/BdmW9bh.jpg"
]

$(document).ready(function(){
    var x = document.getElementById("random-pic");
    var pic = document.createElement("img");
    
    if(x.getAttribute("value")=="home") {
        var imgnumber = Math.floor(Math.random()*13);
        pic.src=home_pics[imgnumber];
        
    } else if(x.getAttribute("value")=="video") {
        var imgnumber = Math.floor(Math.random()*12);
        pic.src=video_pics[imgnumber];
    }
    pic.alt="頁首圖";
    x.appendChild(pic);
});
//可改善部分: 陣列改為讀取json檔