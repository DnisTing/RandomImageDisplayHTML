var img = new Array();
img[0] = 'https://drive.google.com/thumbnail?id=1tjcTmBrqXv6Fv-G74mkXUblDD2Kp_wYB&sz=s4000'
img[1] = 'https://drive.google.com/thumbnail?id=1my1BFs_Nr2cPD0DkDKiCmpok_gH4963j&sz=s4000'
img[2] = 'https://drive.google.com/thumbnail?id=1j7uQjq_d3WN6Axz1rZpUjv0owqzin2aT&sz=s4000'
img[3] = 'https://drive.google.com/thumbnail?id=16vUsdJX4leKzAuNy_6nltiJGdqRgr2O4&sz=s4000'
img[4] = 'https://drive.google.com/thumbnail?id=1_yLFoYDClmn9mnI9he48nxv5psafOl5e&sz=s4000'
img[5] = 'https://drive.google.com/thumbnail?id=11wJJsqQzHpQbvj5xQ70W7ATRpxOYSWdU&sz=s4000'
img[6] = 'https://drive.google.com/thumbnail?id=1yxfqh2P-e-q9DM7ewX5ZCK1horoEjqEv&sz=s4000'
img[7] = 'https://drive.google.com/thumbnail?id=1xLFopfpHPBIrRYD1z9rnG-pxcasNKOg1&sz=s4000'
img[8] = 'https://drive.google.com/thumbnail?id=1o1w4J-1bcmvUqLfAQ2977yAxf653Ud06&sz=s4000'
img[9] = 'https://drive.google.com/thumbnail?id=193cgCk5w0rVzzligAJHFZVWnafe7CcJ_&sz=s4000'
img[10] = 'https://drive.google.com/thumbnail?id=1pM2lyXw1Vfwwt2deN09ItxBsWqmlJa2O&sz=s4000'
img[11] = 'https://drive.google.com/thumbnail?id=1tAEa7SrvwWnjoeO4F_7xSrEcYmkZYS7S&sz=s4000'
img[12] = 'https://drive.google.com/thumbnail?id=1551WCLHc-cs5YgIlT5FcRI5_enTf4mhU&sz=s4000'
img[13] = 'https://drive.google.com/thumbnail?id=1N7wh2ZLFjIn5Cjy1loPD__7hBXhic_mM&sz=s4000'
img[14] = 'https://drive.google.com/thumbnail?id=1dQs2xCaoiS3ZPnRcYxWS8rzyC3kDlT9b&sz=s4000'
img[15] = 'https://drive.google.com/thumbnail?id=18ci9IHjCJ5OqZiX-lbINj246Mm3HMT46&sz=s4000'
img[16] = 'https://drive.google.com/thumbnail?id=1ZLLf0AnO1TnCqcys0AffEKAWTaa12TFd&sz=s4000'
img[17] = 'https://drive.google.com/thumbnail?id=16m6oKgCgNmbHKcONQ34vyxybq3M6_Urw&sz=s4000'
img[18] = 'https://drive.google.com/thumbnail?id=1My1aQ6B0ca0Qab-jUpZ2iYVSMZFWA-Xf&sz=s4000'
img[19] = 'https://drive.google.com/thumbnail?id=1Z3lF0RyW83-UnpXudBk5u1vcte0zRqm_&sz=s4000'

var i;
var p = img.length;
var preBuffer = new Array();
for (i = 0; i < p; i++) {
    preBuffer[i] = new Image();
    preBuffer[i].src = img[i];
}

var randomImg = Math.round(Math.random() * (p - 1));
function showImage() {
    document.write('<img border= "0" src="' + img[randomImg] + '"/>');
}

let pop = document.getElementById("popup");
function openPop() {
    popup.classList.add("open-pop");
}
function closePop() {
    popup.classList.remove("open-pop");
}

function playPause(btnOpt){
    var play = document.getElementById("playAud");
    var pause = document.getElementById("pauseAud");
    var song = document.getElementById("aud");
    if(song.paused){
        song.play();
        pause.style.display = '';
        play.style.display = 'none';
    }else{
        song.pause();
        pause.style.display = 'none';
        play.style.display = '';
    }
}
