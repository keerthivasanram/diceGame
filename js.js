const dice = document.getElementById('dice');
const roll = document.getElementById('roll');
const leftext = document.querySelector('.lefttext.text');
const rightext = document.querySelector('.righttext.text');
const bottomtext = document.querySelector('.bottomtext.text');
const att = document.getElementById("attempt");
const cou = document.getElementById("count");
const retry = document.getElementById('retry');

function tryagain(){
    leftext.textContent = "Try";
    bottomtext.textContent = " ";
    rightext.textContent = "Again!";
}

function won(){
    leftext.textContent = "You";
    bottomtext.textContent = " ";
    rightext.textContent = "Won!";
}

function gotOne(){
    leftext.textContent = "Got";
    bottomtext.textContent = " ";
    rightext.textContent = "One!";
}

function gotAnother(){
    leftext.textContent = "Got";
    bottomtext.textContent = " ";
    rightext.textContent = "Another!";
}

function lost(){
    leftext.textContent = "You";
    bottomtext.textContent = " ";
    rightext.textContent = "Lost!";
}

function reset(){
    leftext.textContent = " ";
    bottomtext.textContent = "Get 3x 🔴 in less than 10 attempts to Win!";
    rightext.textContent = " ";
    attempt = 0; 
    count = 0;   
    att.textContent = "Attempt: 0";  
    cou.textContent = "Count: 0";    
    dice.style.transform = 'rotateX(50deg) rotateY(50deg)';
}


const one = 'rotateX(0deg)';
const two = 'rotateY(90deg)';
const three = 'rotateX(90deg)';
const four = 'rotateY(270deg)';
const five = 'rotateX(270deg)';
const six = 'rotateX(180deg)';

roll.addEventListener('click', spin);
retry.addEventListener('click', reset);

let attempt = 0;
let count = 0;

function spin(){

    if(attempt <= 10 && count === 3){
        won();
    }
    else{
        if(attempt < 10 && count <3){
            const rotation = [one,two,three,four,five,six];
            const randomIndex = Math.floor(Math.random() * rotation.length);
            const randomRotation = rotation[randomIndex];

            dice.style.animation = 'rolling 0.5s';
            dice.addEventListener('animationend', () => {
            dice.style.animation = '';
        });
                if (randomRotation === one){
                    attempt++;
                    count++;
                    att.textContent = "Attempt: "+attempt;
                    cou.textContent = "Count: "+count;
                    if(count == 1){
                        gotOne();
                    }
                    else if(count ==2){
                        gotAnother();
                    }
                    else if(count ==3){
                        won();
                    }
                }else{
                    tryagain();
                    attempt++;
                    if(attempt == 10 && count <3){
                        lost();
                    }
                    att.textContent = "Attempt: "+attempt;
                }

                dice.style.transform = randomRotation;
        }else{
            lost();
        }
}

}

