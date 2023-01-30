//получение HTML элементов
const firstBlock__amount = document.getElementById('firstBlock__amount');
const second__amount = document.getElementById('secondBlock__amount');
const firstSelect = document.getElementById('FirstBlock__Select');
const secondSelect = document.getElementById('Secondblock__Select');

//Данные валюты
const rates = {};

//Регулярное выражение для удаления символов, кроме . и цифр
const reg = /^\.|[^\d\.]/g;

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

    console.log(result)
}

//Перевод валюты
function convert(){

  //Удаление символов из инпута
  this.value = this.value.replace(reg, '');

  //Refactoring
}

//Слушатели изменений
firstBlock__amount.oninput = convert;
secondSelect.oninput = convert;
firstSelect.oninput = convert;

