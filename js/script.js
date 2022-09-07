const item = document.querySelectorAll(".item");
const zoom = document.querySelector(".zoom-popup");
const zoomback = document.querySelector(".zoom-back");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");


item.forEach(function(item){
    item.onclick=function(){
        let imgUrl = this.querySelector('img').src;
        zoom.style.display = "block";
        zoomback.style.display = "block";
        zoom.querySelector('img').src = imgUrl;
    }
});

zoomback.onclick = function() {
    zoom.style.display = "none";
    zoomback.style.display = "none";
}



let x = 0;


next.onclick = function () {
     let imgUrl = item[x].querySelector('img').src;
        zoom.style.display = "block";
        zoomback.style.display = "block";
        zoom.querySelector('img').src = imgUrl;
        if (x < item.length -1){
            x++;
        } else {
            x = 0;
        }
};

prev.onclick = function () {
    let imgUrl = item[x].querySelector('img').src;
        zoom.style.display = "block";
        zoomback.style.display = "block";
        zoom.querySelector('img').src = imgUrl;
    if (x > 0) {
        x--;
    } else {
        x = item.length - 1;
    }
};