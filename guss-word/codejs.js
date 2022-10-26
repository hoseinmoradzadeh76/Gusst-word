const message = document.querySelector(".message");
const guess = document.querySelector("input");
const button = document.querySelector("button");
const myarray = ["هندوستان","چین","ژاپن ","برزیل"," امریکا ","ایران"];
const wordd = document.querySelector(".wordd");
let inplay = false;
let scrambal = "";
let scrambald = "";
let score = 0;

button.addEventListener("click",function(){
  
    
    if (!inplay){
        inplay = true;
        button.innerHTML="حدس بزن";
        guess.classList.toggle("hidden");
        guess.value =" ";
        scrambal = creatword();
        scrambald = randomarray(scrambal.split("")).join("");
        wordd.innerHTML=scrambald;
        message.innerHTML = " ";
    }
    else {
        let tempguess = guess.value;
        score ++;
        if (tempguess === scrambal){
            inplay=false;
            message.innerHTML = "شما برنده شدی"+" "+ "کلمه درست ="+scrambal+ " "+ "امتیاز شما:"+score ;
            wordd.innerHTML=" ";
            button.innerHTML = "ورود به بازی";
            score = 0;
            guess.classList.toggle("hidden");

        }
        else{
            message.innerHTML = score+"حدس شما اشتباه است"+" ";
            
        }

    }
})

function creatword(){
    let random = Math.floor(Math.random() * myarray.length);
    let temp = myarray[random];
   
   
    
     return temp;

}

function randomarray(arr){
    for(let i=arr.length-1;i>0;i--){
        let tempw = arr[i];
        let j = Math.floor(Math.random() * (i+1));
        arr[i] = arr[j];
        arr[j] = tempw;
       
    }
    return arr;

}