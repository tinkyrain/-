//получение HTML элементов
const firstBlock__amount = document.getElementById('firstBlock__amount');
const second__amount = document.getElementById('secondBlock__amount');
const firstSelect = document.getElementById('FirstBlock__Select');
const secondSelect = document.getElementById('Secondblock__Select');

//Данные валюты
const rates = {};

getData();

//Получение данных
async function getData(){
    const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
    const data = await response.json();
    const result = await data;

    rates.GBP = result.Valute.GBP;
    rates.USD = result.Valute.USD;
    rates.EUR = result.Valute.EUR;
    rates.JPY = result.Valute.JPY;
}

//Перевод валюты
function convert(){
  second__amount.value = ((parseFloat(firstBlock__amount.value) / rates[secondSelect.value].Value)*rates[secondSelect.value].Nominal).toFixed(4);

  if(firstBlock__amount.value == '') secondBlock__amount.value = '';
}

//Слушатели изменений
firstBlock__amount.oninput = convert;
secondSelect.oninput = convert;
