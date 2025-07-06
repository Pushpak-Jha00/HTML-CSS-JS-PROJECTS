const currencyFirstEl = document.getElementById('currency');

const worthFirstEl = document.getElementById('worth-first');

const currencySecondEl = document.getElementById('currency-second');

const worthSecondEl = document.getElementById('worth-second')

const exchangeRateEl = document.getElementById('exchange-rate');

updateRate();

async function updateRate(){
 const response = await fetch(`https://v6.exchangerate-api.com/v6/344295bd5942c5eb1772d6b7/latest/${currencyFirstEl.value}`);
 
 const data = await response.json();
//  console.log(data);

 const conversionRates = data.conversion_rates;

Object.keys(conversionRates).forEach(code => {
  const option = document.createElement('option');
  option.value = code;
  option.textContent = code;
  currencyFirstEl.appendChild(option);
});

Object.keys(conversionRates).forEach(code => {
  const option = document.createElement('option');
  option.value = code;
  option.textContent = code;
  currencySecondEl.appendChild(option);
});

 const rate = data.conversion_rates[currencySecondEl.value];

 exchangeRateEl.innerText = `1 ${currencyFirstEl.value} = ${rate}  ${currencySecondEl.value}`

worthSecondEl.value = (worthFirstEl.value * rate).toFixed(2);
 

}

currencyFirstEl.addEventListener('change' , updateRate);
currencySecondEl.addEventListener('change', updateRate);

worthFirstEl.addEventListener('change', updateRate);