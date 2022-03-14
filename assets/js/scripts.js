var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;
const btn_inc = document.getElementById("add");
const btn_dec = document.getElementById("sub");


    btn_inc.addEventListener("click", function (){ 
        if((currentNumber<10)&&(currentNumber>=0)){
            currentNumber = currentNumber + 1;
            currentNumberWrapper.innerHTML= currentNumber;
            currentNumberWrapper.style.color = "black";
        }else if((currentNumber<10)&&(currentNumber<0)){
            currentNumber = currentNumber + 1;
            currentNumberWrapper.innerHTML= currentNumber;
        }
    });

    btn_dec.addEventListener("click", function(){
        currentNumber = currentNumber -1;
        currentNumberWrapper.innerHTML = currentNumber;

        //case currentNumber is under zero, the text color of currentNumberWrapper change to red
        if(currentNumber<0){
            currentNumberWrapper.style.color = "red";
        }
    });


