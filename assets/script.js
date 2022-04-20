
let btn_next = document.getElementById("next");
let btn_back = document.getElementById("back");

btn_next.addEventListener('click', next());

function next(item) {
    let div = document.getElementById(item);

    if (item == 'content') {
        div.style.display = "none";
        document.getElementById("pergunta1").style.display = "block";
    } else if (item == 'pergunta1') {
        div.style.display = "none";
        document.getElementById("pergunta2").style.display = "block";
    } else if (item == 'pergunta2') {
        div.style.display = "none";
        document.getElementById("pergunta3").style.display = "block";
    }  else if (item == 'pergunta3') {
        div.style.display = "none";
        document.getElementById("pergunta4").style.display = "block";
    } else if (item == 'pergunta4') {
        div.style.display = "none";
        document.getElementById("final").style.display = "block";
    }
};

function back(item) {
    let div = document.getElementById(item);

    if (item == 'pergunta1') {
        div.style.display = "none";
        document.getElementById("content").style.display = "block";
    } else if (item == 'pergunta2') {
        div.style.display = "none";
        document.getElementById("pergunta1").style.display = "block";
    } else if (item == 'pergunta3') {
        div.style.display = "none";
        document.getElementById("pergunta2").style.display = "block";
    }  else if (item == 'pergunta4') {
        div.style.display = "none";
        document.getElementById("pergunta3").style.display = "block";
    } 
}

function teste(num) {
    if (num == 1) {
        let btn = document.getElementById("btn1");
        btn.style.backgroundColor = "green"
    }
    if (num == 2) {
        let btn = document.getElementById("btn2");
        btn.style.backgroundColor = "red";
    }
    if (num == 3) {
        let btn = document.getElementById("btn3");
        btn.style.backgroundColor = "red";
    }
    if (num == 4) {
        let btn = document.getElementById("btn4");
        btn.style.backgroundColor = "red";
    }
    if (num == 5) {
        let btn = document.getElementById("btn5");
        btn.style.backgroundColor = "green"
    }
    if (num == 6) {
        let btn = document.getElementById("btn6");
        btn.style.backgroundColor = "red";
    }
    if (num == 7) {
        let btn = document.getElementById("btn7");
        btn.style.backgroundColor = "red";
    }
    if (num == 8) {
        let btn = document.getElementById("btn8");
        btn.style.backgroundColor = "red";
    }
    if (num == 9) {
        let btn = document.getElementById("btn9");
        btn.style.backgroundColor = "green"
    }
    if (num == 10) {
        let btn = document.getElementById("btn10");
        btn.style.backgroundColor = "red";
    }
    if (num == 11) {
        let btn = document.getElementById("btn11");
        btn.style.backgroundColor = "red";
    }
    if (num == 12) {
        let btn = document.getElementById("btn12");
        btn.style.backgroundColor = "red";
    }
    if (num == 13) {
        let btn = document.getElementById("btn13");
        btn.style.backgroundColor = "green"
    }
    if (num == 14) {
        let btn = document.getElementById("btn14");
        btn.style.backgroundColor = "red";
    }
    if (num == 15) {
        let btn = document.getElementById("btn15");
        btn.style.backgroundColor = "red";
    }
    if (num == 16) {
        let btn = document.getElementById("btn16");
        btn.style.backgroundColor = "red";
    }
}