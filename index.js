let inputNum = document.querySelector('.numInput');
let resultNum = document.querySelector('.numResult');
let btn = document.querySelectorAll('.result');
let resultText = document.querySelector('.resultDiv');
let btn2 = document.querySelector('.clearResult');
let exponent = 1;
let p = document.querySelector('.resultP');
btn.forEach(function(btns) {
    btns.addEventListener('click', (ID) => {
     let idSet = ID.currentTarget.dataset.id
     
        if (idSet == 1) {
            Result1()
        }
        else if (idSet == 2) {
            Result2()
        }
    })

}) 


 Result1  = (oldNum, newNum, result) => {
    oldNum = +resultNum.value;
    newNum = +resultNum.value;
    let msg = true;
    p.textContent = +inputNum.value;
    for (;;) {
       exponent ++ 
       result = newNum * oldNum;
       newNum = result;
       
       if (+resultNum.value === 1 ) {
        alert('Dont enter 1 or 0')
        break;
     }

       
       resultText.innerHTML += `
         <p class='resultP'> ${oldNum}^${exponent}  = ${result}</p>
       `;

       if (result> +inputNum.value) {
        if (msg) {
            resultText.innerHTML += `<p class='exclamir'> This is the only possible answer!! </p>` ;
        };

        break;
    };

       if (result === +inputNum.value) {
        resultText.innerHTML += `<p class='exclamir'> This is the answer!! </p>` ;
        msg = false
       }
    
    };
    clear()
};

Result2 = (oldNum, newNum, result, Confirm) => {
   
   Confirm = confirm('Might Freeze So Wait A While And Only Show Result That Can Go Up For At Least An Exponent Of 2')
   if (Confirm) {
    oldNum = +resultNum.value;
    newNum = +resultNum.value;
    let msg = false;
    let msg2 = true;
    p.textContent = +inputNum.value;
    
    for (;;) {
       exponent ++ 
       result = newNum * oldNum;
       newNum = result;
       
       if (+resultNum.value === 1 ) {
        alert('Dont enter 1 or 0')
        break;
     }
       
     
       if (result> +inputNum.value) {
        exponent = 1;
        oldNum++; 
        result = oldNum;
        newNum = oldNum;
        console.log(result);
        
        
        
    };

    if (result === +inputNum.value) {
        if (msg === true) {
            resultText.innerHTML += `<p class='resultP'>${inputNum.value}^${1} = ${inputNum.value} </p>
            ` 
        }
        resultText.innerHTML += `<p class='exclamir'> This is the answer!! </p>` ;
        break;
       }
    
    else if (oldNum * oldNum> +inputNum.value) {
        msg = true;
        if (msg2) {
        resultText.innerHTML += `
         <p class='resultP'> ${oldNum}^${1}  = ${oldNum}</p>
       `;
        msg2 = false; 
    }

        continue;
       };
       
       resultText.innerHTML += `
         <p class='resultP'> ${oldNum}^${exponent}  = ${result}</p>
       `;
       
    };
    
};
};
    


clear = () => {
    result = 0;
    resultNum.value ++;
    exponent = 1;
};

btn2.addEventListener('click', () => {
    resultText.innerHTML = `
    <p class="resultP">00</p>
    `
});



