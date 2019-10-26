let money = prompt('Ваш бюджет на месяц?', '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false,
};

for (let i = 1; i <= 2; i++) {
  let expenseName = 
    prompt('Введите обязательную статью расходов в этом месяце', '');
  let expenseValue =
    prompt('Во сколько обойдется?', '');
    appData.expenses[expenseName] = expenseValue;
}

alert( Number(appData.budget) / 30 );