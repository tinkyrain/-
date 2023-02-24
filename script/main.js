//получение HTML элементов
const firstBlock__amount = document.getElementById('firstBlock__amount');
const second__amount = document.getElementById('secondBlock__amount');
const firstSelect = document.getElementById('FirstBlock__Select');
const secondSelect = document.getElementById('Secondblock__Select');

//Данные валюты
const rates = {};

//Регулярное выражение для удаления символов, кроме . и цифр
const reg = /^\.|[^\d\.]/g;

//Получение данных
async function getData(){
    const API = 'https://www.cbr-xml-daily.ru/daily_json.js';
    //Получение данных с API
    const response = await fetch(API);
    const data = await response.json();
    const result = await data;

    //Занесение данных о валюте в rates
    rates.GBP = result.Valute.GBP;
    rates.USD = result.Valute.USD;
    rates.EUR = result.Valute.EUR;
    rates.JPY = result.Valute.JPY;
}

function fromRub(){
  second__amount.value = ((parseFloat(firstBlock__amount.value) / rates[secondSelect.value].Value)).toFixed(2);
  if(!firstBlock__amount.value.trim()) secondBlock__amount.value = '';
}

function otherRates(){
  second__amount.value = ((parseFloat(firstBlock__amount.value)*rates[firstSelect.value].Value/rates[firstSelect.value].Nominal/ rates[secondSelect.value].Value)*rates[secondSelect.value].Nominal).toFixed(2);
  if(!firstBlock__amount.value.trim()) secondBlock__amount.value = '';
}

function inRub(){
  second__amount.value = ((parseFloat(firstBlock__amount.value)*rates[firstSelect.value].Value)*rates[firstSelect.value].Nominal).toFixed(2);
  if(!firstBlock__amount.value.trim()) secondBlock__amount.value = '';
}

//Перевод валюты
function convert(){
  //Удаление всех букв в input
  firstBlock__amount.value = firstBlock__amount.value.replace(reg, '');
  second__amount.value = second__amount.value.replace(reg, '');
  
  if(firstSelect.value == 'RUB' && secondSelect.value == 'RUB'){
    secondBlock__amount.value = firstBlock__amount.value; 
    return ;
  }
  if(firstSelect.value == 'RUB'){
    fromRub();
    return ;
  }
  if(secondSelect.value == 'RUB'){
    inRub();
    return ;
  }
  if(firstSelect.value != 'RUB'){
    otherRates();
    return ;
  }
}

getData();

//Слушатели изменений
firstBlock__amount.oninput = convert;
secondSelect.oninput = convert;
firstSelect.oninput = convert;