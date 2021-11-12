document.getElementById("un").onclick = playPauseAudio1;


function playPauseAudio1() {


    if (document.getElementById("musica").paused) {
        document.getElementById("musica").play();
        document.getElementById("un").src = "img/lila.svg";
        document.getElementById("video").play();

    } else {
        document.getElementById("musica").pause();
        document.getElementById("un").src = "img/lila.svg";
        document.getElementById("video").pause();
        document.getElementById("un").src = "img/blau.svg";
    }
}

document.getElementById("dos").onclick = playPauseAudio2;

function playPauseAudio2() {


    if (document.getElementById("musicados").paused) {
        document.getElementById("musicados").play();
        document.getElementById("dos").src = "img/lila.svg";
    } else {
        document.getElementById("musicados").pause();
        document.getElementById("dos").src = "img/blau.svg";

    }
}


document.getElementById("tres").onclick = playPauseAudio3;

function playPauseAudio3() {


    if (document.getElementById("musicatres").paused) {
        document.getElementById("musicatres").play();
        document.getElementById("tres").src = "img/lila.svg";
    } else {
        document.getElementById("musicatres").pause();
        document.getElementById("tres").src = "img/blau.svg";
    }
}

document.getElementById("quatre").onclick = playPauseAudio4;

function playPauseAudio4() {


    if (document.getElementById("musicaquatre").paused) {
        document.getElementById("musicaquatre").play();
        document.getElementById("quatre").src = "img/lila.svg";
    } else {
        document.getElementById("musicaquatre").pause();
        document.getElementById("quatre").src = "img/blau.svg";
    }
}



document.getElementById("cinc").onclick = playPauseAudio5;

function playPauseAudio5() {


    if (document.getElementById("musicacinc").paused) {
        document.getElementById("musicacinc").play();
        document.getElementById("cinc").src = "img/blau.svg";
    } else {
        document.getElementById("musicacinc").pause();
        document.getElementById("cinc").src = "img/vermell.svg";
    }
}



document.getElementById("sis").onclick = playPauseAudio6;

function playPauseAudio6() {


    if (document.getElementById("musicasis").paused) {
        document.getElementById("musicasis").play();
        document.getElementById("sis").src = "img/blau.svg";
    } else {
        document.getElementById("musicasis").pause();
        document.getElementById("sis").src = "img/vermell.svg";
    }
}


document.getElementById("set").onclick = playPauseAudio7;

function playPauseAudio7() {


    if (document.getElementById("musicaset").paused) {
        document.getElementById("musicaset").play();
        document.getElementById("set").src = "img/blau.svg";
    } else {
        document.getElementById("musicasis").pause();
        document.getElementById("set").src = "img/vermell.svg";
    }
}


document.getElementById("vuit").onclick = playPauseAudio8;

function playPauseAudio8() {


    if (document.getElementById("musicavuit").paused) {
        document.getElementById("musicavuit").play();
        document.getElementById("vuit").src = "img/blau.svg";
    } else {
        document.getElementById("musicavuit").pause();
        document.getElementById("vuit").src = "img/vermell.svg";
    }
}


document.getElementById("nou").onclick = playPauseAudio9;

function playPauseAudio9() {


    if (document.getElementById("musicanou").paused) {
        document.getElementById("musicanou").play();
        document.getElementById("nou").src = "img/vermell.svg";
    } else {
        document.getElementById("musicanou").pause();
        document.getElementById("nou").src = "img/lila.svg";
    }
}


document.getElementById("deu").onclick = playPauseAudio10;

function playPauseAudio10() {


    if (document.getElementById("musicadeu").paused) {
        document.getElementById("musicadeu").play();
        document.getElementById("deu").src = "img/vermell.svg";
    } else {
        document.getElementById("musicadeu").pause();
        document.getElementById("deu").src = "img/lila.svg";
    }
}


document.getElementById("onze").onclick = playPauseAudio11;

function playPauseAudio11() {


    if (document.getElementById("musicaonze").paused) {
        document.getElementById("musicaonze").play();
        document.getElementById("onze").src = "img/vermell.svg";
    } else {
        document.getElementById("musicavuit").pause();
        document.getElementById("onze").src = "img/lila.svg";
    }
}


document.getElementById("dotze").onclick = playPauseAudio12;

function playPauseAudio12() {


    if (document.getElementById("musicadotze").paused) {
        document.getElementById("musicadotze").play();
        document.getElementById("dotze").src = "img/vermell.svg";
    } else {
        document.getElementById("musicavuit").pause();
        document.getElementById("dotze").src = "img/lila.svg";
    }
}



//sliderVol
document.getElementById("sliderVol1").value = document.getElementById("musica").volume;


document.getElementById("sliderVol1").oninput = canviaVolum1;


function canviaVolum1() {
    document.getElementById("musica").volume = document.getElementById("sliderVol1").value;
}
document.getElementById("sliderVol2").value =
    document.getElementById("musicados").volume;


document.getElementById("sliderVol2").oninput = canviaVolum2;


function canviaVolum2() {
    document.getElementById("musicados").volume = document.getElementById("sliderVol2").value;
}

document.getElementById("sliderVol3").value =
    document.getElementById("musicatres").volume;


document.getElementById("sliderVol3").oninput = canviaVolum3;


function canviaVolum3() {
    document.getElementById("musicatres").volume = document.getElementById("sliderVol3").value;
}

document.getElementById("sliderVol4").value =
    document.getElementById("musicaquatre").volume;


document.getElementById("sliderVol4").oninput = canviaVolum4;


function canviaVolum4() {
    document.getElementById("musicaquatre").volume = document.getElementById("sliderVol4").value;
}

document.getElementById("sliderVol5").value =
    document.getElementById("musicacinc").volume;


document.getElementById("sliderVol5").oninput = canviaVolum5;


function canviaVolum5() {
    document.getElementById("musicacinc").volume = document.getElementById("sliderVol5").value;
}

document.getElementById("sliderVol6").value =
    document.getElementById("musicasis").volume;


document.getElementById("sliderVol6").oninput = canviaVolum6;


function canviaVolum6() {
    document.getElementById("musicasis").volume = document.getElementById("sliderVol6").value;
}

document.getElementById("sliderVol7").value =
    document.getElementById("musicaset").volume;


document.getElementById("sliderVol7").oninput = canviaVolum7;


function canviaVolum7() {
    document.getElementById("musicaset").volume = document.getElementById("sliderVol7").value;
}

document.getElementById("sliderVol8").value =
    document.getElementById("musicavuit").volume;


document.getElementById("sliderVol8").oninput = canviaVolum8;


function canviaVolum8() {
    document.getElementById("musicavuit").volume = document.getElementById("sliderVol8").value;
}

document.getElementById("sliderVol9").value =
    document.getElementById("musicanou").volume;


document.getElementById("sliderVol9").oninput = canviaVolum9;


function canviaVolum9() {
    document.getElementById("musicanou").volume = document.getElementById("sliderVol9").value;
}

document.getElementById("sliderVol10").value =
    document.getElementById("musicadeu").volume;


document.getElementById("sliderVol10").oninput = canviaVolum10;


function canviaVolum10() {
    document.getElementById("musicadeu").volume = document.getElementById("sliderVol10").value;
}

document.getElementById("sliderVol11").value =
    document.getElementById("musicaonze").volume;


document.getElementById("sliderVol11").oninput = canviaVolum11;


function canviaVolum11() {
    document.getElementById("musicaonze").volume = document.getElementById("sliderVol11").value;
}

document.getElementById("sliderVol12").value =
    document.getElementById("musicadotze").volume;


document.getElementById("sliderVol12").oninput = canviaVolum12;


function canviaVolum12() {
    document.getElementById("musicadotze").volume = document.getElementById("sliderVol12").value;
}


//sliderDur
document.getElementById("sliderDur2").max = document.getElementById("musicados").duration;


document.getElementById("sliderDur2").oninput = canviaTemps2;

function canviaTemps2() {
    document.getElementById("musicados").currentTime =
        document.getElementById("sliderDur2").value;
}

document.getElementById("sliderDur3").max = document.getElementById("musicatres").duration;


document.getElementById("sliderDur3").oninput = canviaTemps3;

function canviaTemps3() {
    document.getElementById("musicatres").currentTime =
        document.getElementById("sliderDur3").value;
}

document.getElementById("sliderDur4").max = document.getElementById("musicaquatre").duration;


document.getElementById("sliderDur4").oninput = canviaTemps4;

function canviaTemps4() {
    document.getElementById("musicaquatre").currentTime =
        document.getElementById("sliderDur4").value;
}



//teclas

document.getElementById("cos").onkeydown = presionar_tecla;

function presionar_tecla() {
    tecla = event.keyCode;
    if (tecla == 49) {

                playPauseAudio1();
    }
     if (tecla == 50) {

                playPauseAudio2();
    }
     if (tecla == 51) {

                playPauseAudio3();
    }
     if (tecla == 52) {

                playPauseAudio4();
    }
     if (tecla == 65) {

                playPauseAudio5();
    }
     if (tecla == 66) {

                playPauseAudio6();
    }
     if (tecla == 67) {

                playPauseAudio7();
    }
     if (tecla == 68) {

                playPauseAudio8();
    }
     if (tecla == 69) {

                playPauseAudio9();
    }
     if (tecla == 70) {

                playPauseAudio10();
    }
     if (tecla == 71) {

                playPauseAudio11();
    }
     if (tecla == 72) {

                playPauseAudio12();
    }
}

