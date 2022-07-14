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
    rates.BYN = result.Valute.BYN;
    rates.AUD = result.Valute.AUD;
    rates.AZD = result.Valute.AZD;
    rates.AMD = result.Valute.AMD;
    rates.BGN = result.Valute.BGN;
    rates.BRL = result.Valute.BRL;
    rates.HUF = result.Valute.HUF;
    rates.KRW = result.Valute.KRW;
    rates.DKK = result.Valute.DKK;
    rates.KZT = result.Valute.KZT;
    rates.CNY = result.Valute.CNY;
    rates.TRY = result.Valute.TRY;
    rates.UAH = result.Valute.UAH;
}

//Перевод валюты
function convert(){
  //Перевод в рубль
  if(secondSelect.value === 'RUB'){

    second__amount.value = ((parseFloat(firstBlock__amount.value)*rates[firstSelect.value].Value)*rates[firstSelect.value].Nominal).toFixed(2);
    if(firstBlock__amount.value == '') secondBlock__amount.value = '';

  }

  //Перевод из любой валюты, кроме рубля
  if(firstSelect.value != 'RUB'){

    second__amount.value = ((parseFloat(firstBlock__amount.value)*rates[firstSelect.value].Value/rates[firstSelect.value].Nominal/ rates[secondSelect.value].Value)*rates[secondSelect.value].Nominal).toFixed(2);
    if(firstBlock__amount.value == '') secondBlock__amount.value = '';

  } else {

    //Перевод ТОЛЬКО из рубля
    second__amount.value = ((parseFloat(firstBlock__amount.value) / rates[secondSelect.value].Value)*rates[secondSelect.value].Nominal).toFixed(2);
    if(firstBlock__amount.value == '') secondBlock__amount.value = '';

  }
}

//Слушатели изменений
firstBlock__amount.oninput = convert;
secondSelect.oninput = convert;
firstSelect.oninput = convert;
