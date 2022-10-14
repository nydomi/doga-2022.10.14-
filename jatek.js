var kor = 0;
let random=1;
let playerMove;

function rounds(){
    kor = document.getElementById('roundCount').value;

    if(isNaN(kor)){ //isNan megnézi hogy szám e vagy nem
        console.warn('mehet');
    }
    Math.floor(kor);
    console.log(kor);
}

let kepek = ['ko.jpg', 'papir.jpg', 'ollo.jpg'];

function dontess(){
    
    random = Math.floor(Math.random()*3)+1;
    console.log(random);
    document.getElementById('eredmeny').innerHTML=random;
    switch(random){
        case 1:
            document.getElementById('cpuImg').src=kepek[0];
            break;
        case 2:
            document.getElementById('cpuImg').src=kepek[1];
            break;
        case 3:
            document.getElementById('cpuImg').src=kepek[2];
            break;
    }
}
console.log(kor);
console.log('ends');



