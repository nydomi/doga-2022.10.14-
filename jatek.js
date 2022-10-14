var kor = 0;
let random=1;
let cpuMove;
let playerMove;

function rounds(){
    kor = document.getElementById('roundCount').value;

    if(isNaN(kor)){ //isNan megnézi hogy szám e vagy nem
        console.warn('mehet');
    }
    kor = Math.round(kor);
}
let kepek = ['ko.jpg', 'papir.jpg', 'ollo.jpg'];

function dontess(){
    
    random = Math.floor(Math.random()*3)+1;
    document.getElementById('eredmeny').innerHTML=random;
    switch(random){
        case 1:
            document.getElementById('cpuImg').src=kepek[0];
            cpuMove = "ko"
            break;
        case 2:
            document.getElementById('cpuImg').src=kepek[1];
            cpuMove = "papir"
            break;
        case 3:
            document.getElementById('cpuImg').src=kepek[2];
            cpuMove = "ollo";
            break;
    }
}
/*
    ko = 1
    papir = 2
    ollo = 3
    Tárgy | mi ellen veszít | mi ellen nyer
                1 - 2 / 3
                2 - 3 / 1
                3 - 1 / 2
*/ 

function igen(szam){
    console.log("--------------------");
    dontess()
    console.log(szam);
    switch(parseInt(szam)){
        case 1:
            playerMove = "ko"
            break;
        case 2:
            playerMove = "papir";
            break;
        case 3:
            playerMove = "ollo";
            break;
    }

    console.log("Játékos lépése: "+playerMove + " | A szama: "+ szam);
    console.log("CPU lépése: " + cpuMove +  " | A szama: " + random);

    if(playerMove == "ko" && cpuMove=="ollo"){
        console.log('Játékos nyert!');
    }
    else if(playerMove=="papir" && cpuMove=="ko"){
        console.log('Játékos nyert!');
    }
    else if(playerMove=="ollo" && cpuMove=="papir"){
        console.log('Játékos nyert!');
    }
    else if(parseInt(random)==parseInt(szam)){
        console.log("Döntetlen!");
    }
    else{
        console.log("CPU nyert!");
    }
}



