let money = +prompt('Ваш бюджет на месяц?', '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false,
};

// цикл for
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

// цикл while
// let i = 0;
// while(i < 2) {
//   let expenseName = 
//   prompt('Введите обязательную статью расходов в этом месяце', '');
// let expenseValue =
//   +prompt('Во сколько обойдется?', '');
//   if ( (typeof(expenseName) === 'string') && 
//         (typeof(expenseName) != null) && (typeof(expenseValue) != null) && 
//         (expenseName !== '') && (expenseValue !== '') &&
//         (expenseName.length < 50) ) {
//     appData.expenses[expenseName] = expenseValue;
//     i++;
//   } else {
//     console.log('Указаны некорректные данные');
//   }
// }

// цикл do-while
// let i = 0;
// do {
//   let expenseName = 
//   prompt('Введите обязательную статью расходов в этом месяце', '');
// let expenseValue =
//   +prompt('Во сколько обойдется?', '');
//   if ( (typeof(expenseName) === 'string') && 
//         (typeof(expenseName) != null) && (typeof(expenseValue) != null) && 
//         (expenseName !== '') && (expenseValue !== '') &&
//         (expenseName.length < 50) ) {
//     appData.expenses[expenseName] = expenseValue;
//     i++;
//   } else {
//     console.log('Указаны некорректные данные');
//   }
// } while(i < 2);

appData.moneyPerDay = appData.budget / 30;

alert('Ежедневный бюджет' + appData.moneyPerDay);

if (appData.moneyPerDay <= 100) {
  console.log('Минимальный уровень достатка');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay <= 2000) {
  console.log('Средний уровень достатка');
} else if (appData.moneyPerDay > 2000) {
  console.log('Высокий уровень достатка');
} else {
  console.log('Произошла ошибка');
}