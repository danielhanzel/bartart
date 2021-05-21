let smallScreen = 0;
let bAnimation = document.getElementsByTagName("nav")[0];
let NOAnimation = document.getElementsByClassName("navOption");
let widtH = 0;
let opacitY = 0;

function rollingIn(){
    if(smallScreen == 1){
        document.getElementsByTagName("nav")[0].style.backgroundColor="white";
        document.getElementsByTagName("nav")[0].style.opacity="1";

        time1 = setInterval(animationSSN, 1);
        function animationSSN(){
            if(widtH == 0){
                clearInterval(time1);
            }
            else{
                widtH--;
                bAnimation.style.width = widtH + "vw";
            }
        }
        setTimeout(function(){
            for(i=0; i <= 3; i++){
                NOAnimation[i].style.display="none";
            }
        },300);
        setTimeout(function(){
            for(y=0;y<=2;y++){
                document.getElementsByClassName("rolloutBar")[y].style.backgroundColor="white";
            }
        },400);
    }
    else{
        document.getElementsByTagName("nav")[0].style.backgroundColor="#8a7a5a";
        document.getElementsByTagName("nav")[0].style.opacity="0.8";
    }
}

document.getElementsByClassName("navOption")[0].addEventListener("click", function(){
    document.getElementById("homePage").style.display="flex";
    document.getElementById("aboutPage").style.display="none";
    document.getElementById("galleryPage").style.display="none";
    document.getElementById("orderContactPage").style.display="none";

    document.getElementsByTagName("nav")[0].style.removeProperty("background-color");

    if(window.innerWidth <= 430){
        rollingIn();
    }
})
document.getElementsByClassName("navOption")[1].addEventListener("click", function(){
    document.getElementById("homePage").style.display="none";
    document.getElementById("aboutPage").style.display="flex";
    document.getElementById("galleryPage").style.display="none";
    document.getElementById("orderContactPage").style.display="none";

    rollingIn();
})
document.getElementsByClassName("navOption")[2].addEventListener("click", function(){
    document.getElementById("homePage").style.display="none";
    document.getElementById("aboutPage").style.display="none";
    document.getElementById("galleryPage").style.display="flex";
    document.getElementById("orderContactPage").style.display="none";
    document.getElementsByTagName("nav")[0].style.backgroundColor="#8a7a5a";
    document.getElementsByTagName("nav")[0].style.opacity="0.8";

    rollingIn();
})
document.getElementsByClassName("navOption")[3].addEventListener("click", function(){
    document.getElementById("homePage").style.display="none";
    document.getElementById("aboutPage").style.display="none";
    document.getElementById("galleryPage").style.display="none";
    document.getElementById("orderContactPage").style.display="flex";
    document.getElementsByTagName("nav")[0].style.backgroundColor="#8a7a5a";
    document.getElementsByTagName("nav")[0].style.opacity="0.8";

    rollingIn();
})
document.getElementById("rolloutMenu").addEventListener("click", function(){
    smallScreen = 1;
    for(y=0;y<=2;y++){
        document.getElementsByClassName("rolloutBar")[y].style.backgroundColor="black";
    }
    time1 = setInterval(animationSSN, 1);
    function animationSSN(){
        if(widtH == 100){
            clearInterval(time1);
        }
        else{
            widtH++;
            bAnimation.style.width = widtH + "vw";
        }
    }
    for(i=0; i <= 3; i++){
        NOAnimation[i].style.display="block";
    }
     
})