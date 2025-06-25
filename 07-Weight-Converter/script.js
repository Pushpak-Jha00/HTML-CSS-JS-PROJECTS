const inputElement = document.getElementById('input');
const erroeElement = document.getElementById('error');
const resultElement = document.getElementById('result');


let errorTime;
let resultTime;

function updateResult() {
 if(inputElement.value <= 0 || isNaN(inputElement.value)) {
   erroeElement.innerText = 'Please enter a valid weight';

   clearTimeout(errorTime);

   errorTime = setTimeout(() => {
     erroeElement.innerText = '';
     inputElement.value = '';
   }, 2000);
   return;
 } else{
    resultElement.innerText = (+inputElement.value / 2.2).toFixed(2);

    clearTimeout(resultTime);
  resultTime =  setTimeout(() => {
      inputElement.value = '';
      resultElement.innerText = '';
    }, 9000);
 }
  
}

inputElement.addEventListener('input', function() {
  updateResult();
})