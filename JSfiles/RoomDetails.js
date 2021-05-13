var first = document.querySelector('.row div');
first.classList.add("current");

function myFunction(imgs) {

    var el = document.querySelectorAll('.row div');
    for (let i = 0; i < el.length; i++) {
        el[i].classList.remove("current");
    }
    var parent = imgs.parentNode;
    parent.classList.add("current");
    var expandImg = document.getElementById("expandedImg");
    expandImg.src = imgs.src;
}