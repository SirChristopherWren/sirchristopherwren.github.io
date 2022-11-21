//Var declaration
 
var z = 0;
var o = 0;
var b = 0;
var sanPaulAudio = document.getElementById("SanPaul-Audio")
var stileAudio = document.getElementById("Stile-Audio")
var first12 = document.getElementsByClassName("first")[0]
const backgroundAsa = ["first", "second", "third", "fourth"];
var secondo = document.getElementsByClassName("second")[0];
var fourth12 = document.getElementsByClassName("fourth")[0]




function CambioMinus() {
    z--
    $(("."+backgroundAsa[(z)])).css("visibility", "visible")
    $(("."+backgroundAsa[(z+1)])).css("visibility", "hidden")

    if(z == 2)  {
        $(".center-first").css("visibility", "hidden")
        $("#San-Audio-Button").css("visibility", "visible");
        $("#San-Text-Button").css("visibility", "visible");
        console.log("Ciao")
    }else{
        $("#San-Audio-Button").css("visibility", "hidden");
        $("#San-Text-Button").css("visibility", "hidden");
    }
}

function CambioPlus() {
    z++

    if(z == (backgroundAsa.length)) {
        z = 0
        $(("."+backgroundAsa[(z)])).css("visibility", "visible")
$(("."+backgroundAsa[((backgroundAsa.length-1))])).css("visibility", "hidden")
    } else {
        $(("."+backgroundAsa[(z)])).css("visibility", "visible")
        $(("."+backgroundAsa[(z-1)])).css("visibility", "hidden")

    }

    if(z == 2) {
        $(".center-first").css("visibility", "hidden")
        $("#San-Audio-Button").css("visibility", "visible");
        $("#San-Text-Button").css("visibility", "visible");
        console.log("Ciao")
    }else{
        $("#San-Audio-Button").css("visibility", "hidden");
        $("#San-Text-Button").css("visibility", "hidden");
        $(".center-first").css("visibility", "visible");
    }

    if(z==3) {
        backgroundSequence4();
    }
}



function Ciao() {
    console.log(backgroundAsa)
  
}

//PopUp

function PopUp() {switch(z) {
    case 0:
        FirstPop();
        break;
    case 1:
        SecondPop();
        break;
    case 2:
        ThirdPop();
        break;
    case 3:
        FourthPop()
        break;
}
}
function FirstPop() {
    console.log("ciao");
    $('.First').css("visibility", "visible")
    flag = true;
    flag2 = true; 
}
function Close() {
    $('.PopUp').css("visibility", "hidden")
}

function SecondPop() {
    $('.Second').css("visibility", "visible")
}

function SanPaul() {
    $('.Third').css("visibility", "visible")
}

function FourthPop() {
    $('.Fourth').css("visibility", "visible")
    flag1 = true;
}

//Audio

function StileAudio() {
    if(b==0) {
        stileAudio.play();
        b++
        }else {
        stileAudio.pause();
        b=0
        }
}

function SanPaulAudio() {
    if(o==0) {
        sanPaulAudio.play();
        o++
        }else {
        sanPaulAudio.pause();
        o=0
        }  
}


//First - Background Glow 

var bgImageArray = ["/images/1.png", "/images/15.png"]
secs = 4;
bgImageArray.forEach(function(img){
    new Image().src = img; 
    // caches images, avoiding white flash between background replacements
});
var flag2 = false;

function backgroundSequence() {
	window.clearTimeout();
	var k = 0;
	for (i = 0; i < bgImageArray.length; i++) {
            if(flag2){
                setTimeout(backgroundSequence, 0);
                first12.style.background = "url(./images/1.png) no-repeat center center fixed";
			    first12.style.backgroundSize ="cover";
                break;
            }else{
            setTimeout(function(){ 
                first12.style.background = "url(" + bgImageArray[k] + ") no-repeat center center fixed";
                first12.style.backgroundSize ="cover";
            if ((k + 1) === bgImageArray.length) { setTimeout(function() { backgroundSequence() }, (secs * 1000))} else { k++; }			
            }, (secs * 1000) * i)	
    }
	}
}
backgroundSequence();

//Second - 
var bgImageArray2 = ["/images/2.png", "/images/21.png"]
secs = 4;
bgImageArray2.forEach(function(img){
    new Image().src = img; 
    // caches images, avoiding white flash between background replacements
});
var flag3 = false;

function backgroundSequence2() {
	window.clearTimeout();
	var k = 0;
	for (i = 0; i < bgImageArray.length; i++) {
            if(flag3){  
                setTimeout(backgroundSequence2, 0);
                secondo.style.background = "url(./images/2.png) no-repeat center center fixed";
			    secondo.style.backgroundSize ="cover";
                break;
            }else{
            setTimeout(function(){ 
                secondo.style.background = "url(" + bgImageArray2[k] + ") no-repeat center center fixed";
                secondo.style.backgroundSize ="cover";
            if ((k + 1) === bgImageArray.length) { setTimeout(function() { backgroundSequence2() }, (secs * 1000))} else { k++; }			
            }, (secs * 1000) * i)	
    }
	}
}
backgroundSequence2();



//Fourth
var bgImageArray1 = ["/images/4.png", "/images/41.png"]
secs = 4;
bgImageArray1.forEach(function(img){
    new Image().src = img; 
    // caches images, avoiding white flash between background replacements
});
var flag1 = false;

function backgroundSequence4() {
	window.clearTimeout();
	var k = 0;
	for (i = 0; i < bgImageArray1.length; i++) {
            if(flag1){
                setTimeout(backgroundSequence4, 0);
                fourth12.style.background = "url(./images/4.png) no-repeat center center fixed";
			    fourth12.style.backgroundSize ="cover";
                break;
            }else{
            setTimeout(function(){ 
                fourth12.style.background = "url(" + bgImageArray1[k] + ") no-repeat center center fixed";
                fourth12.style.backgroundSize ="cover";
            if ((k + 1) === bgImageArray1.length) { setTimeout(function() { backgroundSequence4() }, (secs * 1000))} else { k++; }			
            }, (secs * 1000) * i)	
    }
	}
}

