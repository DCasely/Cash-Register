function checkCashRegister(price, cash, cid) {
  // CREATE A FUNCTION TO GET RID OF JS INACCURACIES
  function monetize(x) {
    // return parseFloat(x.toFixed(2));
    return Math.round(x * 100) / 100;
  }

  // Create a Cash Register Object with all Currency Units.
  // KEY = Currency Unit, VALUE = Count
  let cashRegister = {};
  let cashRegisterStatus = {
    status: 'closed',
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

  for (let i = 0; i < cid.length; i++) {
    cashRegister[cid[i][0]] = cid[i][1];
  }

  cash = monetize(cash);
  price = monetize(price);

  let changeDue = monetize(cash - price);

  // changeDue Greater or Equal to 100
  while (changeDue >= monetize(100)) {
    cashRegister['ONE HUNDRED'] -= monetize(100);
    changeDue -= monetize(100);
    changeDue = monetize(changeDue);

    cashRegisterStatus.change[8][1] += monetize(100);
  }
  // changeDue Greater or Equal to 20
  while (changeDue >= monetize(20)) {
    cashRegister['TWENTY'] -= monetize(20);
    changeDue -= monetize(20);
    changeDue = monetize(changeDue);

    cashRegisterStatus.change[7][1] += monetize(20);
  }
  // changeDue Greater or Equal to 10
  while (changeDue >= monetize(10)) {
    cashRegister['TEN'] -= monetize(10);
    changeDue -= monetize(10);
    changeDue = monetize(changeDue);

    cashRegisterStatus.change[6][1] += monetize(10);
  }
  // changeDue Greater or Equal to 5
  while (changeDue >= monetize(5)) {
    cashRegister['FIVE'] -= monetize(5);
    changeDue -= monetize(5);
    changeDue = monetize(changeDue);

    cashRegisterStatus.change[5][1] += monetize(5);
  }
  // changeDue Greater or Equal to 1
  while (changeDue >= monetize(1)) {
    cashRegister['ONE'] -= monetize(1);
    changeDue -= monetize(1);
    changeDue = monetize(changeDue);

    cashRegisterStatus.change[4][1] += monetize(1);
  }
  // changeDue Greater or Equal to 0.25
  while (changeDue >= monetize(0.25)) {
    cashRegister['QUARTER'] -= monetize(0.25);
    changeDue -= monetize(0.25);
    changeDue = monetize(changeDue);

    cashRegisterStatus.change[3][1] += monetize(0.25);
  }
  // changeDue Greater or Equal to 0.10
  while (changeDue >= monetize(0.1)) {
    cashRegister['DIME'] -= monetize(0.1);
    changeDue -= monetize(0.1);
    changeDue = monetize(changeDue);

    cashRegisterStatus.change[2][1] += monetize(0.1);
  }
  // changeDue Greater or Equal to 0.05
  while (changeDue >= monetize(0.05)) {
    cashRegister['NICKEL'] -= monetize(0.05);
    changeDue -= monetize(0.05);
    changeDue = monetize(changeDue);

    cashRegisterStatus.change[1][1] += monetize(0.05);
  }
  // changeDue Greater or Equal to 0.01
  while (changeDue >= monetize(0.01)) {
    cashRegister['PENNY'] -= monetize(0.01);
    changeDue -= monetize(0.01);
    changeDue = monetize(changeDue);

    cashRegisterStatus.change[0][1] += monetize(0.01);
  }

  changeDue = monetize(changeDue);

  return cashRegisterStatus.change[0];

  // CREATE THE CONDITIONS TO TEST WHETHER changeDue WAS SATISFIED.
  //   if (changeDue > 0) {
  //     cashRegisterStatus.status = 'OPEN';
  //     return cashRegisterStatus;
  //   } else {
  //     cashRegisterStatus.status = 'CLOSED';
  //     return cashRegisterStatus;
  //   }
}

// TEST THE FUNCTION
console.log(
  checkCashRegister(19.57, 19.6, [
    ['PENNY', 1.01],
    ['NICKEL', 2.05],
    ['DIME', 3.1],
    ['QUARTER', 4.25],
    ['ONE', 90],
    ['FIVE', 55],
    ['TEN', 20],
    ['TWENTY', 60],
    ['ONE HUNDRED', 100],
  ])
);
