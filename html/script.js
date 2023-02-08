function navReveal() { 
    document.getElementById('menu').style.right = "0"
}
function navHide() { 
    document.getElementById('menu').style.right = "-500px"
}
function galleryOpen() {
    if(document.getElementById('open').style.display == "none") {
    document.getElementById('open').style.display = "grid";
    document.getElementById('arrow').src = 'img/pics_me/arrowups.jpg';
    } else {
    document.getElementById('open').style.display = "none";
    document.getElementById('arrow').src = 'img/pics_me/arrowfore.png';
    }
}

function videoOpen() {
    if(document.getElementById('video').style.display == "none") {
    document.getElementById('video').style.display = "grid";
    document.getElementById('arrow1').src = 'img/pics_me/arrowups.jpg';
    } else {
    document.getElementById('video').style.display = "none";
    document.getElementById('arrow1').src = 'img/pics_me/arrowfore.png';
    }
}