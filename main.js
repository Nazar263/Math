function showSection(sectionId) {
  // Сховати всі секції
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => section.classList.remove('active'));

  // Показати вибрану секцію
  document.getElementById(sectionId).classList.add('active');
}

// Встановлюємо головну секцію за замовчуванням при завантаженні сторінки
window.addEventListener("DOMContentLoaded", function() {
  showSection('home');
});

 
let firstNumber ="";
let operator ="";
let secondNumber ="";

function setNumber(number) {
document.getElementById("text_calkulator").value += number;
}
function setOperator(op) {
firstNumber= document.getElementById("text_calkulator").value;
operator=op;
document.getElementById("text_calkulator").value="";
}
function calculate () {
secondNumber = document.getElementById("text_calkulator").value;
let resultat;
switch (operator) {
case '+':
resultat=
parseFloat(firstNumber)+
parseFloat(secondNumber);
break;
case '-':
resultat=
parseFloat(firstNumber)-
parseFloat(secondNumber);
break;
case'*':
resultat=
parseFloat(firstNumber)*
parseFloat(secondNumber);
break;
case'/':
resultat=
parseFloat(firstNumber)/
parseFloat(secondNumber);
break;

default:  
  resultat="Error";

}
document.getElementById("text_calkulator").value = resultat;
}
function clearInput() {
document.getElementById("text_calkulator").value = "";
firstNumber ="";
operator ="";
secondNumber ="";
}



 
function print() {
  alert("Дякуємо за відгук!");
}

function comentUser() {
  const coment = document.getElementById("text_coment").value;
  const errorElement = document.getElementById("error");

  if (coment.trim() === "") {
    errorElement.textContent = "Поле пусте...🤷";
    return false; // Повертаємо false, щоб вказати, що є помилка
  }

  errorElement.textContent = ""; // Якщо все добре, очищаємо поле
  console.log( "Коментар: " + coment);
  return true; // Повертаємо true, щоб вказати, що все ок
}

function globalComent() {
  if (comentUser()) { // Виконуємо print() тільки якщо comentUser() поверне true
    print();
  }
}

function x2() {
  let userNumber = document.getElementById("text").value.trim();
  let sum2 = Number(userNumber) * 2;
  return sum2;
}

function printX2(sum) {
  document.getElementById("text2").value = sum;
 
}

function globalX2() {
  let result2 = x2();
  printX2(result2);
}

function x3() {
  let userNumber = document.getElementById("text").value.trim();
  let sum3 = Number(userNumber) * 3;
  return sum3;
}

function printX3(sum) {
  document.getElementById("text2").value = sum;
}

function globalX3() {
  let result3 = x3();
  printX3(result3);
}
function x4() {
  let userNumber = document.getElementById("text").value.trim();  
  let sum4 = Number(userNumber) * 4;
  return sum4;
}

function printX4(sum) {
  document.getElementById("text2").value = sum;
}

function globalX4() {
  let result4 = x4();
  printX4(result4);
}
function x5() {
  let userNumber = document.getElementById("text").value.trim();
  let sum5 = Number(userNumber) * 5;
  return sum5;
}

function printX5(sum) {
  document.getElementById("text2").value = sum;
}

function globalX5() {
  let result5 = x5();
  printX5(result5);
} 
function x6() {
  let userNumber = document.getElementById("text").value.trim();
  let sum6 = Number(userNumber) * 6;
  return sum6;
}

function printX6(sum) {
  document.getElementById("text2").value = sum;
}

function globalX6() {
  let result6 = x6();
  printX6(result6);
} 
function x7() {
  let userNumber = document.getElementById("text").value.trim();
  let sum7 = Number(userNumber) * 7;
  return sum7;
}

function printX7(sum) {
  document.getElementById("text2").value = sum;
}

function globalX7() {
  let result7 = x7();
  printX7(result7);
} 
function x8() {
  let userNumber = document.getElementById("text").value.trim();
  let sum8 = Number(userNumber) * 8;
  return sum8;
}

function printX8(sum) {
  document.getElementById("text2").value = sum;
}

function globalX8() {
  let result8 = x8();
  printX8(result8);
}
function x9() {
  let userNumber = document.getElementById("text").value.trim();  
  let sum9 = Number(userNumber) * 9;
  return sum9;
}

function printX9(sum) {
  document.getElementById("text2").value = sum;
}

function globalX9() {
  let result9 = x9();
  printX9(result9);
} 
function x10() {
  let userNumber = document.getElementById("text").value.trim();
  let sum10 = Number(userNumber) * 10;
  return sum10;
}

function printX10(sum) {
  document.getElementById("text2").value = sum;
}

function globalX10() {
  let result10 = x10();
  printX10(result10);
} 



function result() {
    let input1 = document.getElementById("test_input").value.trim();
    let input2 = document.getElementById("test_input1"); // Отримуємо сам input

    if (input1 === "") {
        input2.value = "поле пусте";
        input2.style.color = "red";
    } else if (input1 === "48") {
        input2.value = "Правильно";
        input2.style.color = "green";
    } else {
        input2.value = "не вірно";
        input2.style.color = "red";
    }
    
    }

function result1() {
    let input1 = document.getElementById("test_input2").value.trim();
    let input2 = document.getElementById("test_input3"); // Отримуємо сам input

    if (input1 === "") {
        input2.value = "поле пусте";
        input2.style.color = "red";
    } else if (input1 === "63") {
        input2.value = "Правильно";
        input2.style.color = "green";
    } else {
        input2.value = "не вірно";
        input2.style.color = "red";
    }
    
}

function result2() {
    let input1 = document.getElementById("test_input4").value.trim();
    let input2 = document.getElementById("test_input5"); // Отримуємо сам input

    if (input1 === "") {
        input2.value = "поле пусте";
        input2.style.color = "red";
    } else if (input1 === "35") {
        input2.value = "Правильно";
        input2.style.color = "green";
    } else {
        input2.value = "не вірно";
        input2.style.color = "red";
    }
    
}

function result4() {
    let input1 = document.getElementById("test_input6").value.trim();
    let input2 = document.getElementById("test_input7"); // Отримуємо сам input

    if (input1 === "") {
        input2.value = "поле пусте";
        input2.style.color = "red";
    } else if (input1 === "54") {
        input2.value = "Правильно";
        input2.style.color = "green";
    } else {
        input2.value = "не вірно";
        input2.style.color = "red";
    }
    
}
function result5() {
    let input1 = document.getElementById("test_input8").value.trim();
    let input2 = document.getElementById("test_input9"); // Отримуємо сам input

    if (input1 === "") {
        input2.value = "поле пусте";
        input2.style.color = "red";
    } else if (input1 === "32") {
        input2.value = "Правильно";
        input2.style.color = "green";
    } else {
        input2.value = "не вірно";
        input2.style.color = "red";
    }
    
}
function result6() {
    let input1 = document.getElementById("test_input10").value.trim();
    let input2 = document.getElementById("test_input11"); // Отримуємо сам input

    if (input1 === "") {
        input2.value = "поле пусте";
        input2.style.color = "red";
    } else if (input1 === "27") {
        input2.value = "Правильно";
        input2.style.color = "green";
    } else {
        input2.value = "не вірно";
        input2.style.color = "red";
    }
    
}
function result7() {
    let input1 = document.getElementById("test_input12").value.trim();
    let input2 = document.getElementById("test_input13"); // Отримуємо сам input

    if (input1 === "") {
        input2.value = "поле пусте";
        input2.style.color = "red";
    } else if (input1 === "49") {
        input2.value = "Правильно";
        input2.style.color = "green";
    } else {
        input2.value = "не вірно";
        input2.style.color = "red";
    }
    
}
function result8() {
    let input1 = document.getElementById("test_input14").value.trim();
    let input2 = document.getElementById("test_input15"); // Отримуємо сам input

    if (input1 === "") {
        input2.value = "поле пусте";
        input2.style.color = "red";
    } else if (input1 === "40") {
        input2.value = "Правильно";
        input2.style.color = "green";
    } else {
        input2.value = "не вірно";
        input2.style.color = "red";
    }
    
}
function result9() {
    let input1 = document.getElementById("test_input16").value.trim();
    let input2 = document.getElementById("test_input17"); // Отримуємо сам input

    if (input1 === "") {
        input2.value = "поле пусте";
        input2.style.color = "red";
    } else if (input1 === "28") {
        input2.value = "Правильно";
        input2.style.color = "green";
    } else {
        input2.value = "не вірно";
        input2.style.color = "red";
    }
    
}
function result10() {
    let input1 = document.getElementById("test_input18").value.trim();
    let input2 = document.getElementById("test_input19"); // Отримуємо сам input

    if (input1 === "") {
        input2.value = "поле пусте";
        input2.style.color = "red";
    } else if (input1 === "18") {
        input2.value = "Правильно";
        input2.style.color = "green";
    } else {
        input2.value = "не вірно";
        input2.style.color = "red";
    }
    
}
function result11() {
    let input1 = document.getElementById("test_input20").value.trim();
    let input2 = document.getElementById("test_input21"); // Отримуємо сам input

    if (input1 === "") {
        input2.value = "поле пусте";
        input2.style.color = "red";
    } else if (input1 === "18") {
        input2.value = "Правильно";
        input2.style.color = "green";
    } else {
        input2.value = "не вірно";
        input2.style.color = "red";
    }
    
}
function result12() {
    let input1 = document.getElementById("test_input22").value.trim();
    let input2 = document.getElementById("test_input23"); // Отримуємо сам input

    if (input1 === "") {
        input2.value = "поле пусте";
        input2.style.color = "red";
    } else if (input1 === "24") {
        input2.value = "Правильно";
        input2.style.color = "green";
    } else {
        input2.value = "не вірно";
        input2.style.color = "red";
    }
    
}
function result13() {
    let input1 = document.getElementById("test_input24").value.trim();
    let input2 = document.getElementById("test_input25"); // Отримуємо сам input

    if (input1 === "") {
        input2.value = "поле пусте";
        input2.style.color = "red";
    } else if (input1 === "45") {
        input2.value = "Правильно";
        input2.style.color = "green";
    } else {
        input2.value = "не вірно";
        input2.style.color = "red";
    }
    
}
function result14() {
    let input1 = document.getElementById("test_input26").value.trim();
    let input2 = document.getElementById("test_input27"); // Отримуємо сам input

    if (input1 === "") {
        input2.value = "поле пусте";
        input2.style.color = "red";
    } else if (input1 === "21") {
        input2.value = "Правильно";
        input2.style.color = "green";
    } else {
        input2.value = "не вірно";
        input2.style.color = "red";
    }
    
}
function result15() {
    let input1 = document.getElementById("test_input28").value.trim();
    let input2 = document.getElementById("test_input29"); // Отримуємо сам input

    if (input1 === "") {
        input2.value = "поле пусте";
        input2.style.color = "red";
    } else if (input1 === "72") {
        input2.value = "Правильно";
        input2.style.color = "green";
    } else {
        input2.value = "не вірно";
        input2.style.color = "red";
    }
    
}
function result16() {
    let input1 = document.getElementById("test_input30").value.trim();
    let input2 = document.getElementById("test_input31"); // Отримуємо сам input

    if (input1 === "") {
        input2.value = "поле пусте";
        input2.style.color = "red";
    } else if (input1 === "42") {
        input2.value = "Правильно";
        input2.style.color = "green";
    } else {
        input2.value = "не вірно";
        input2.style.color = "red";
    }
    
}
function result17() {
    let input1 = document.getElementById("test_input32").value.trim();
    let input2 = document.getElementById("test_input33"); // Отримуємо сам input

    if (input1 === "") {
        input2.value = "поле пусте";
        input2.style.color = "red";
    } else if (input1 === "40") {
        input2.value = "Правильно";
        input2.style.color = "green";
    } else {
        input2.value = "не вірно";
        input2.style.color = "red";
    }
    
}
function result18() {
    let input1 = document.getElementById("test_input34").value.trim();
    let input2 = document.getElementById("test_input35"); // Отримуємо сам input

    if (input1 === "") {
        input2.value = "поле пусте";
        input2.style.color = "red";
    } else if (input1 === "14") {
        input2.value = "Правильно";
        input2.style.color = "green";
    } else {
        input2.value = "не вірно";
        input2.style.color = "red";
    }
    
}
function result19() {
    let input1 = document.getElementById("test_input36").value.trim();
    let input2 = document.getElementById("test_input37"); // Отримуємо сам input

    if (input1 === "") {
        input2.value = "поле пусте";
        input2.style.color = "red";
    } else if (input1 === "81") {
        input2.value = "Правильно";
        input2.style.color = "green";
    } else {
        input2.value = "не вірно";
        input2.style.color = "red";
    }
    
}
function result20() {
    let input1 = document.getElementById("test_input38").value.trim();
    let input2 = document.getElementById("test_input39"); // Отримуємо сам input

    if (input1 === "") {
        input2.value = "поле пусте";
        input2.style.color = "red";
    } else if (input1 === "36") {
        input2.value = "Правильно";
        input2.style.color = "green";
    } else {
        input2.value = "не вірно";
        input2.style.color = "red";
    }
    
}


function  light_test() {
  let input1= document.getElementById("test_input").value;
  let input2= document.getElementById("test_input2").value;
  let input3= document.getElementById("test_input4").value;
  let input4= document.getElementById("test_input6").value;
  let input5= document.getElementById("test_input8").value;
  let input6= document.getElementById("test_input10").value;
  let input7= document.getElementById("test_input12").value;
  let input8= document.getElementById("test_input14").value;
  let input9= document.getElementById("test_input16").value;
  let input10= document.getElementById("test_input18").value;
  let input11= document.getElementById("test_input20").value;
  let input12= document.getElementById("test_input22").value;
  let input13= document.getElementById("test_input24").value;
  let input14= document.getElementById("test_input26").value;
  let input15= document.getElementById("test_input28").value;
  let input16= document.getElementById("test_input30").value;
  let input17= document.getElementById("test_input32").value;
  let input18= document.getElementById("test_input34").value;
  let input19= document.getElementById("test_input36").value;
  let input20= document.getElementById("test_input38").value;
  
  
  let resultat=0
    if (input1==="48") {
      resultat++
    }
    if  (input2==="63") {
      resultat++
}
       if  (input3==="35") {
      resultat++
}
if  (input4==="54") {
      resultat++
}
    if  (input5==="32") {
      resultat++
}

if  (input6==="27") {
      resultat++
}

if  (input7==="49") {
      resultat++
}

if  (input8==="40") {
      resultat++
}
    
if  (input9==="28") {
      resultat++
} 

if  (input10==="18") {
      resultat++
}

if  (input11==="18") {
      resultat++
}

if  (input12==="24") {
      resultat++
}

if  (input13==="45") {
      resultat++
}

if  (input14==="21") {
      resultat++
}

if  (input15==="72") {
      resultat++
}

if  (input16==="42") {
      resultat++
}


  if  (input17==="40") {
      resultat++
}

if  (input18==="14") {
      resultat++
}

if  (input19==="81") {
      resultat++
}

if  (input20==="36") {
      resultat++
}
alert( "кількість правельних відповідей: "+ resultat+ " з 20")
}

function clear_test(){
   document.getElementById("test_input").value="";
   document.getElementById("test_input2").value="";
   document.getElementById("test_input4").value="";
   document.getElementById("test_input6").value="";
   document.getElementById("test_input8").value="";
   document.getElementById("test_input10").value="";
   document.getElementById("test_input12").value="";
   document.getElementById("test_input14").value="";
   document.getElementById("test_input16").value="";
   document.getElementById("test_input18").value="";
   document.getElementById("test_input20").value="";
   document.getElementById("test_input22").value="";
   document.getElementById("test_input24").value="";
   document.getElementById("test_input26").value="";
   document.getElementById("test_input28").value="";
   document.getElementById("test_input30").value="";
   document.getElementById("test_input32").value="";
   document.getElementById("test_input34").value="";
   document.getElementById("test_input36").value="";
  document.getElementById("test_input38").value="";
  
  
  document.getElementById("test_input1").value="";
   document.getElementById("test_input3").value="";
   document.getElementById("test_input5").value="";
   document.getElementById("test_input7").value="";
   document.getElementById("test_input9").value="";
   document.getElementById("test_input11").value="";
   document.getElementById("test_input13").value="";
   document.getElementById("test_input15").value="";
   document.getElementById("test_input17").value="";
   document.getElementById("test_input19").value="";
   document.getElementById("test_input21").value="";
   document.getElementById("test_input23").value="";
   document.getElementById("test_input25").value="";
   document.getElementById("test_input27").value="";
   document.getElementById("test_input29").value="";
   document.getElementById("test_input31").value="";
   document.getElementById("test_input33").value="";
   document.getElementById("test_input35").value="";
   document.getElementById("test_input37").value="";
  document.getElementById("test_input39").value="";
  
 alert("Платформа очищена, вдалих резутатів...😉")
}

function global_result_test() {
   result();
   result1();
   result2();
   result4();
   result5();
   result6();
   result7();
   result8();
   result9();
   result10();
   result11();
   result12();
   result13();
   result14();
   result15();
   result16();
   result17();
   result18();
   result19();
   result20();
   
   light_test();
}