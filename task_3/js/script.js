let money,  time;

function start() {
  do {
    money = +prompt('Ваш бюджет на месяц? ', '');
  } 
  while (isNaN(money) || money == "" || money == null);

  time = prompt('Введите дату в формате YYYY-MM-DD', '');
}

start();

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true,
};

function chooseExpanses() {
  for (let i = 0; i < 2; i++) {
    let expenseName = 
      prompt('Введите обязательную статью расходов в этом месяце', '');
    let expenseValue =
      +prompt('Во сколько обойдется?', '');
  
      if ( (typeof(expenseName) === 'string') && 
            (typeof(expenseName) != null) && (typeof(expenseValue) != null) && 
            (expenseName !== '') && (expenseValue !== '') &&
            (expenseName.length < 50) ) {
        appData.expenses[expenseName] = expenseValue;
      } else {
        console.log('Указаны некорректные данные');
        i--;
      }
  }
}

// chooseExpanses();

function detectDayBudget() {
  appData.moneyPerDay = (appData.budget / 30).toFixed(1);
  alert('Ежедневный бюджет: ' + appData.moneyPerDay);
}

// detectDayBudget();


function detectLevel() {
  if (appData.moneyPerDay <= 100) {
    console.log('Минимальный уровень достатка');
  } else if (appData.moneyPerDay > 100 && appData.moneyPerDay <= 2000) {
    console.log('Средний уровень достатка');
  } else if (appData.moneyPerDay > 2000) {
    console.log('Высокий уровень достатка');
  } else {
    console.log('Произошла ошибка');
  }
}

// detectLevel();

function checkSavings() {
  if (appData.savings === true) {
    let save = +prompt('Какова сумма накоплений?', ''),
        persent = +prompt('Под какой процент?', '');

        appData.monthIncome = save / 100 / 12 * persent;
        alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
  }
}

// checkSavings();

function chooseOptExpenses() {
  for (let i = 1; i <= 3; i++) {
    let optionalExpense = prompt('Статья необязательных расходов?', '');
    appData.optionalExpenses[i] = optionalExpense;
  }
}

chooseOptExpenses();
console.log(appData);