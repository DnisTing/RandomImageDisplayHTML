var img = new Array();
img[0] = 'https://drive.google.com/thumbnail?id=1tjcTmBrqXv6Fv-G74mkXUblDD2Kp_wYB&sz=s4000'
// img[1] = 'https://drive.google.com/thumbnail?id=1tK-kcZe_zBdH4c3SZpHquC6puNIksw5f&sz=s4000'
// img[2] = 'https://drive.google.com/thumbnail?id=1-pNInXcQVwKZVthBtU-PwwcCTWNnraqE&sz=s4000'
// img[3] = 'https://drive.google.com/thumbnail?id=16E4O2RKqlLSlyXcOz1YbhVt7FKpiPb98&sz=s4000'
// img[4] = 'https://drive.google.com/thumbnail?id=1B1bqRgB8tWu0tiMzSyAr_ZtfqPexGin8&sz=s4000'
// img[5] = 'https://drive.google.com/thumbnail?id=1B8RT0QXapEHycZAASdda3xUKau8y-K_w&sz=s4000'
// img[6] = 'https://drive.google.com/thumbnail?id=1CY7mHvZ5tu7kpJL74UCwyJeFImWm0VPN&sz=s4000'
// img[7] = 'https://drive.google.com/thumbnail?id=1J7q3aINPMpTOOqPPB0sKlYL0yPW_p__s&sz=s4000'
// img[8] = 'https://drive.google.com/thumbnail?id=1LKpY1OphaMXYbU0ZhJW82dXNlF-mJ3ts&sz=s4000'
// img[9] = 'https://drive.google.com/thumbnail?id=1OfqnQpb8xv1FatwmxPBEghJHfMBcyBCY&sz=s4000'
// img[10] = 'https://drive.google.com/thumbnail?id=1QgeqP1fCoNEWBivYIrL6oTMozIrd7wSi&sz=s4000'
// img[11] = 'https://drive.google.com/thumbnail?id=1U_n7vY5HGoleryQBoWMglqINEyhsPcoQ&sz=s4000'
// img[12] = 'https://drive.google.com/thumbnail?id=1ZIIcoTetazd2g3pP0H3hEptHkPZIdtW5&sz=s4000'
// img[13] = 'https://drive.google.com/thumbnail?id=1c5xzbk2aTAxNWkteshh4uQuhX3V2GWDr&sz=s4000'
// img[14] = 'https://drive.google.com/thumbnail?id=1gELGcYqbgQ035eAwrTiHSoW5Od8fY8IV&sz=s4000'
// img[15] = 'https://drive.google.com/thumbnail?id=1jiL7tgsWNA6RfhH_s0rPJT3uSrgjTzou&sz=s4000'
// img[16] = 'https://drive.google.com/thumbnail?id=1lbGfJ_-KpLEUF1kW7h3DdKFZNR3_Gofb&sz=s4000'
// img[17] = 'https://drive.google.com/thumbnail?id=1pYonIS5GvXKPRCeyFi5Ad0cbYaa7Mla8&sz=s4000'
// img[18] = 'https://drive.google.com/thumbnail?id=1r3vlVPhsgXkoAL1_rT--c9bbq3IukONr&sz=s4000'
// img[19] = 'https://drive.google.com/thumbnail?id=1rVkIA8yT6UUEI18R3mAVf6Dmsch3PO79&sz=s4000'

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
