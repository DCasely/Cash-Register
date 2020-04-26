function checkCashRegister(price, cash, cid) {
  // CREATE A FUNCTION TO GET RID OF JS INACCURACIES
  function monetize(x) {
    // return parseFloat(x.toFixed(2));
    return Math.round(x * 100) / 100;
  }

  // Create a Cash Register Object with all Currency Units.
  // KEY = Currency Unit, VALUE = Count
  let cashRegister = {};
  let cashRegisterStatus = {};

  // LOAD UP "CURRENCY UNITS" AND "AMOUNTS" INTO "cashRegister"
  for (let i = 0; i < cid.length; i++) {
    cashRegister[cid[i][0]] = cid[i][1];
  }

  // TOTAL UP THE AMOUNT OF FUNDS INTO A VARIABLE
  let totalFunds = 0;

  for (let cash of Object.values(cashRegister)) {
    totalFunds += cash;
  }

  // MONETIZE KEY VARIABLES
  totalFunds = monetize(totalFunds);
  cash = monetize(cash);
  price = monetize(price);

  let changeDue = monetize(cash - price);
  changeDue = monetize(changeDue);

  // "INSUFFICIENT FUNDS" status if inadequate funds in drawer or exact change cannot be provided.
  if (totalFunds < changeDue) {
    cashRegisterStatus.status = 'INSUFFICIENT_FUNDS';
    cashRegisterStatus.change = [];
    return cashRegisterStatus;
  }

  cashRegisterStatus = {
    status: 'status',
    change: [
      ['PENNY', 0],
      ['NICKEL', 0],
      ['DIME', 0],
      ['QUARTER', 0],
      ['ONE', 0],
      ['FIVE', 0],
      ['TEN', 0],
      ['TWENTY', 0],
      ['ONE HUNDRED', 0],
    ],
  };

  // changeDue Greater or Equal to 100
  while (changeDue >= monetize(100) && cashRegister['ONE HUNDRED'] >= 100) {
    cashRegister['ONE HUNDRED'] -= monetize(100);
    changeDue -= monetize(100);
    changeDue = monetize(changeDue);

    cashRegisterStatus.change[8][1] += monetize(100);
  }
  // changeDue Greater or Equal to 20
  while (changeDue >= monetize(20) && cashRegister['TWENTY'] >= 20) {
    cashRegister['TWENTY'] -= monetize(20);
    changeDue -= monetize(20);
    changeDue = monetize(changeDue);

    cashRegisterStatus.change[7][1] += monetize(20);
  }
  // changeDue Greater or Equal to 10
  while (changeDue >= monetize(10) && cashRegister['TEN'] >= 10) {
    cashRegister['TEN'] -= monetize(10);
    changeDue -= monetize(10);
    changeDue = monetize(changeDue);

    cashRegisterStatus.change[6][1] += monetize(10);
  }
  // changeDue Greater or Equal to 5
  while (changeDue >= monetize(5) && cashRegister['FIVE'] >= 5) {
    cashRegister['FIVE'] -= monetize(5);
    changeDue -= monetize(5);
    changeDue = monetize(changeDue);

    cashRegisterStatus.change[5][1] += monetize(5);
  }
  // changeDue Greater or Equal to 1
  while (changeDue >= monetize(1) && cashRegister['ONE'] >= 1) {
    cashRegister['ONE'] -= monetize(1);
    changeDue -= monetize(1);
    changeDue = monetize(changeDue);

    cashRegisterStatus.change[4][1] += monetize(1);
  }
  // changeDue Greater or Equal to 0.25
  while (changeDue >= monetize(0.25) && cashRegister['QUARTER'] >= 0.25) {
    cashRegister['QUARTER'] -= monetize(0.25);
    changeDue -= monetize(0.25);
    changeDue = monetize(changeDue);

    cashRegisterStatus.change[3][1] += monetize(0.25);
  }
  // changeDue Greater or Equal to 0.10
  while (changeDue >= monetize(0.1) && cashRegister['DIME'] >= 0.1) {
    cashRegister['DIME'] -= monetize(0.1);
    changeDue -= monetize(0.1);
    changeDue = monetize(changeDue);

    cashRegisterStatus.change[2][1] += monetize(0.1);
  }
  // changeDue Greater or Equal to 0.05
  while (changeDue >= monetize(0.05) && cashRegister['NICKEL'] >= 0.05) {
    cashRegister['NICKEL'] -= monetize(0.05);
    changeDue -= monetize(0.05);
    changeDue = monetize(changeDue);

    cashRegisterStatus.change[1][1] += monetize(0.05);
  }
  // changeDue Greater or Equal to 0.01
  while (changeDue >= monetize(0.01) && cashRegister['PENNY'] >= 0.01) {
    cashRegister['PENNY'] -= monetize(0.01);
    changeDue -= monetize(0.01);
    changeDue = monetize(changeDue);

    cashRegisterStatus.change[0][1] += monetize(0.01);
  }

  changeDue = monetize(changeDue);

  // CREATE THE CONDITIONS TO TEST WHETHER changeDue WAS SATISFIED.

  // "CLOSED" status if exact change was provided and cash drawer hits 0
  if (totalFunds === changeDue) {
    cashRegisterStatus.status = 'CLOSED';
    return cashRegisterStatus;
  }
  // "OPEN" status
  else {
    cashRegisterStatus.status = 'OPEN';

    let values = cashRegisterStatus.change;
    let changeGiven = [];

    for (let i = values.length - 1; i >= 0; i--) {
      if (values[i][1] > 0) {
        changeGiven.push(values[i]);
      }
    }

    cashRegisterStatus.change = changeGiven;

    return cashRegisterStatus;
  }
}

// TEST THE FUNCTION
// console.log(
//   checkCashRegister(19.5, 20, [
//     ['PENNY', 1.01],
//     ['NICKEL', 2.05],
//     ['DIME', 3.1],
//     ['QUARTER', 4.25],
//     ['ONE', 90],
//     ['FIVE', 55],
//     ['TEN', 20],
//     ['TWENTY', 60],
//     ['ONE HUNDRED', 100],
//   ])
// );

// console.log(
//   checkCashRegister(3.26, 100, [
//     ['PENNY', 1.01],
//     ['NICKEL', 2.05],
//     ['DIME', 3.1],
//     ['QUARTER', 4.25],
//     ['ONE', 90],
//     ['FIVE', 55],
//     ['TEN', 20],
//     ['TWENTY', 60],
//     ['ONE HUNDRED', 100],
//   ])
// );

function checkCashRegister(price, cash, cid) {
  // CREATE A FUNCTION TO GET RID OF JS INACCURACIES
  function monetize(x) {
    // return parseFloat(x.toFixed(2));
    return Math.round(x * 100) / 100;
  }

  // Create a Cash Register Object with all Currency Units.
  // KEY = Currency Unit, VALUE = Count
  let cashRegister = {};
  let cashRegisterStatus = {};

  // LOAD UP "CURRENCY UNITS" AND "AMOUNTS" INTO "cashRegister"
  for (let i = 0; i < cid.length; i++) {
    cashRegister[cid[i][0]] = cid[i][1];
  }

  // TOTAL UP THE AMOUNT OF FUNDS INTO A VARIABLE
  let totalFunds = 0;

  for (let cash of Object.values(cashRegister)) {
    totalFunds += cash;
  }

  // MONETIZE KEY VARIABLES
  totalFunds = monetize(totalFunds);
  cash = monetize(cash);
  price = monetize(price);

  let changeDue = monetize(cash - price);
  changeDue = monetize(changeDue);

  // "INSUFFICIENT FUNDS" status if inadequate funds in drawer or exact change cannot be provided.
  if (totalFunds < changeDue) {
    cashRegisterStatus.status = 'INSUFFICIENT_FUNDS';
    cashRegisterStatus.change = [];
    return cashRegisterStatus;
  }

  cashRegisterStatus = {
    status: 'status',
    change: [
      ['PENNY', 0],
      ['NICKEL', 0],
      ['DIME', 0],
      ['QUARTER', 0],
      ['ONE', 0],
      ['FIVE', 0],
      ['TEN', 0],
      ['TWENTY', 0],
      ['ONE HUNDRED', 0],
    ],
  };

  // changeDue Greater or Equal to 100
  while (changeDue >= monetize(100) && cashRegister['ONE HUNDRED'] >= 100) {
    cashRegister['ONE HUNDRED'] -= monetize(100);
    changeDue -= monetize(100);
    changeDue = monetize(changeDue);

    cashRegisterStatus.change[8][1] += monetize(100);
  }
  // changeDue Greater or Equal to 20
  while (changeDue >= monetize(20) && cashRegister['TWENTY'] >= 20) {
    cashRegister['TWENTY'] -= monetize(20);
    changeDue -= monetize(20);
    changeDue = monetize(changeDue);

    cashRegisterStatus.change[7][1] += monetize(20);
  }
  // changeDue Greater or Equal to 10
  while (changeDue >= monetize(10) && cashRegister['TEN'] >= 10) {
    cashRegister['TEN'] -= monetize(10);
    changeDue -= monetize(10);
    changeDue = monetize(changeDue);

    cashRegisterStatus.change[6][1] += monetize(10);
  }
  // changeDue Greater or Equal to 5
  while (changeDue >= monetize(5) && cashRegister['FIVE'] >= 5) {
    cashRegister['FIVE'] -= monetize(5);
    changeDue -= monetize(5);
    changeDue = monetize(changeDue);

    cashRegisterStatus.change[5][1] += monetize(5);
  }
  // changeDue Greater or Equal to 1
  while (changeDue >= monetize(1) && cashRegister['ONE'] >= 1) {
    cashRegister['ONE'] -= monetize(1);
    changeDue -= monetize(1);
    changeDue = monetize(changeDue);

    cashRegisterStatus.change[4][1] += monetize(1);
  }
  // changeDue Greater or Equal to 0.25
  while (changeDue >= monetize(0.25) && cashRegister['QUARTER'] >= 0.25) {
    cashRegister['QUARTER'] -= monetize(0.25);
    changeDue -= monetize(0.25);
    changeDue = monetize(changeDue);

    cashRegisterStatus.change[3][1] += monetize(0.25);
  }
  // changeDue Greater or Equal to 0.10
  while (changeDue >= monetize(0.1) && cashRegister['DIME'] >= 0.1) {
    cashRegister['DIME'] -= monetize(0.1);
    changeDue -= monetize(0.1);
    changeDue = monetize(changeDue);

    cashRegisterStatus.change[2][1] += monetize(0.1);
  }
  // changeDue Greater or Equal to 0.05
  while (changeDue >= monetize(0.05) && cashRegister['NICKEL'] >= 0.05) {
    cashRegister['NICKEL'] -= monetize(0.05);
    changeDue -= monetize(0.05);
    changeDue = monetize(changeDue);

    cashRegisterStatus.change[1][1] += monetize(0.05);
  }
  // changeDue Greater or Equal to 0.01
  while (changeDue >= monetize(0.01) && cashRegister['PENNY'] >= 0.01) {
    cashRegister['PENNY'] -= monetize(0.01);
    changeDue -= monetize(0.01);
    changeDue = monetize(changeDue);

    cashRegisterStatus.change[0][1] += monetize(0.01);
  }

  changeDue = monetize(changeDue);

  // CREATE THE CONDITIONS TO TEST WHETHER changeDue WAS SATISFIED.

  // "CLOSED" status if exact change was provided and cash drawer hits 0
  if (totalFunds === changeDue) {
    cashRegisterStatus.status = 'CLOSED';
    return cashRegisterStatus;
  }
  // "OPEN" status
  else {
    cashRegisterStatus.status = 'OPEN';

    let values = cashRegisterStatus.change;
    let changeGiven = [];

    for (let i = values.length - 1; i >= 0; i--) {
      if (values[i][1] > 0) {
        changeGiven.push(values[i]);
      }
    }

    cashRegisterStatus.change = changeGiven;

    return cashRegisterStatus;
  }
}

// TEST THE FUNCTION
// console.log(
//   checkCashRegister(19.5, 20, [
//     ['PENNY', 1.01],
//     ['NICKEL', 2.05],
//     ['DIME', 3.1],
//     ['QUARTER', 4.25],
//     ['ONE', 90],
//     ['FIVE', 55],
//     ['TEN', 20],
//     ['TWENTY', 60],
//     ['ONE HUNDRED', 100],
//   ])
// );

// console.log(
//     checkCashRegister(3.26, 100, [
//         ['PENNY', 1.01],
//         ['NICKEL', 2.05],
//         ['DIME', 3.1],
//         ['QUARTER', 4.25],
//         ['ONE', 90],
//         ['FIVE', 55],
//         ['TEN', 20],
//         ['TWENTY', 60],
//         ['ONE HUNDRED', 100],
//     ])
// );

function checkCashRegister(price, cash, cid) {
  // CREATE A FUNCTION TO GET RID OF JS INACCURACIES
  function monetize(x) {
    // return parseFloat(x.toFixed(2));
    return Math.round(x * 100) / 100;
  }

  // Create a Cash Register Object with all Currency Units.
  // KEY = Currency Unit, VALUE = Count
  let cashRegister = {};
  let cashRegisterStatus = {};

  // LOAD UP "CURRENCY UNITS" AND "AMOUNTS" INTO "cashRegister"
  for (let i = 0; i < cid.length; i++) {
    cashRegister[cid[i][0]] = cid[i][1];
  }

  // TOTAL UP THE AMOUNT OF FUNDS INTO A VARIABLE
  let totalFunds = 0;

  for (let cash of Object.values(cashRegister)) {
    totalFunds += cash;
  }

  // MONETIZE KEY VARIABLES
  totalFunds = monetize(totalFunds);
  cash = monetize(cash);
  price = monetize(price);

  let changeDue = monetize(cash - price);
  changeDue = monetize(changeDue);

  // "INSUFFICIENT FUNDS" status if inadequate funds in drawer or exact change cannot be provided.
  if (totalFunds < changeDue) {
    cashRegisterStatus.status = 'INSUFFICIENT_FUNDS';
    cashRegisterStatus.change = [];
    return cashRegisterStatus;
  }

  cashRegisterStatus = {
    status: 'status',
    change: [
      ['PENNY', 0],
      ['NICKEL', 0],
      ['DIME', 0],
      ['QUARTER', 0],
      ['ONE', 0],
      ['FIVE', 0],
      ['TEN', 0],
      ['TWENTY', 0],
      ['ONE HUNDRED', 0],
    ],
  };

  // changeDue Greater or Equal to 100
  while (changeDue >= monetize(100) && cashRegister['ONE HUNDRED'] >= 100) {
    cashRegister['ONE HUNDRED'] -= monetize(100);
    changeDue -= monetize(100);
    changeDue = monetize(changeDue);

    cashRegisterStatus.change[8][1] += monetize(100);
  }
  // changeDue Greater or Equal to 20
  while (changeDue >= monetize(20) && cashRegister['TWENTY'] >= 20) {
    cashRegister['TWENTY'] -= monetize(20);
    changeDue -= monetize(20);
    changeDue = monetize(changeDue);

    cashRegisterStatus.change[7][1] += monetize(20);
  }
  // changeDue Greater or Equal to 10
  while (changeDue >= monetize(10) && cashRegister['TEN'] >= 10) {
    cashRegister['TEN'] -= monetize(10);
    changeDue -= monetize(10);
    changeDue = monetize(changeDue);

    cashRegisterStatus.change[6][1] += monetize(10);
  }
  // changeDue Greater or Equal to 5
  while (changeDue >= monetize(5) && cashRegister['FIVE'] >= 5) {
    cashRegister['FIVE'] -= monetize(5);
    changeDue -= monetize(5);
    changeDue = monetize(changeDue);

    cashRegisterStatus.change[5][1] += monetize(5);
  }
  // changeDue Greater or Equal to 1
  while (changeDue >= monetize(1) && cashRegister['ONE'] >= 1) {
    cashRegister['ONE'] -= monetize(1);
    changeDue -= monetize(1);
    changeDue = monetize(changeDue);

    cashRegisterStatus.change[4][1] += monetize(1);
  }
  // changeDue Greater or Equal to 0.25
  while (changeDue >= monetize(0.25) && cashRegister['QUARTER'] >= 0.25) {
    cashRegister['QUARTER'] -= monetize(0.25);
    changeDue -= monetize(0.25);
    changeDue = monetize(changeDue);

    cashRegisterStatus.change[3][1] += monetize(0.25);
  }
  // changeDue Greater or Equal to 0.10
  while (changeDue >= monetize(0.1) && cashRegister['DIME'] >= 0.1) {
    cashRegister['DIME'] -= monetize(0.1);
    changeDue -= monetize(0.1);
    changeDue = monetize(changeDue);

    cashRegisterStatus.change[2][1] += monetize(0.1);
  }
  // changeDue Greater or Equal to 0.05
  while (changeDue >= monetize(0.05) && cashRegister['NICKEL'] >= 0.05) {
    cashRegister['NICKEL'] -= monetize(0.05);
    changeDue -= monetize(0.05);
    changeDue = monetize(changeDue);

    cashRegisterStatus.change[1][1] += monetize(0.05);
  }
  // changeDue Greater or Equal to 0.01
  while (changeDue >= monetize(0.01) && cashRegister['PENNY'] >= 0.01) {
    cashRegister['PENNY'] -= monetize(0.01);
    changeDue -= monetize(0.01);
    changeDue = monetize(changeDue);

    cashRegisterStatus.change[0][1] += monetize(0.01);
  }

  changeDue = monetize(changeDue);

  // CREATE THE CONDITIONS TO TEST WHETHER changeDue WAS SATISFIED.

  // "CLOSED" status if exact change was provided and cash drawer hits 0
  if (totalFunds === changeDue) {
    cashRegisterStatus.status = 'CLOSED';
    return cashRegisterStatus;
  }
  // "OPEN" status
  else {
    cashRegisterStatus.status = 'OPEN';

    let values = cashRegisterStatus.change;
    let changeGiven = [];

    for (let i = values.length - 1; i >= 0; i--) {
      if (values[i][1] > 0) {
        changeGiven.push(values[i]);
      }
    }

    cashRegisterStatus.change = changeGiven;

    return cashRegisterStatus;
  }
}

// TEST THE FUNCTION
// console.log(
//   checkCashRegister(19.5, 20, [
//     ['PENNY', 1.01],
//     ['NICKEL', 2.05],
//     ['DIME', 3.1],
//     ['QUARTER', 4.25],
//     ['ONE', 90],
//     ['FIVE', 55],
//     ['TEN', 20],
//     ['TWENTY', 60],
//     ['ONE HUNDRED', 100],
//   ])
// );

console.log(
  checkCashRegister(19.5, 20, [
    ['PENNY', 0.01],
    ['NICKEL', 0],
    ['DIME', 0],
    ['QUARTER', 0],
    ['ONE', 1],
    ['FIVE', 0],
    ['TEN', 0],
    ['TWENTY', 0],
    ['ONE HUNDRED', 0],
  ])
);
