function checkCashRegister(price, cash, cid) {
    var change;
    let register = cid.reduce((acc, curr) => {
        acc.total += curr[1];
        acc[curr[0]] = curr[1];
        return acc;
      }, { total: 0 });
        console.log(register)
        
    return change;
  }
  
  // Example cash-in-drawer array:
  // [["PENNY", 1.01],
  // ["NICKEL", 2.05],
  // ["DIME", 3.1],
  // ["QUARTER", 4.25],
  // ["ONE", 90],
  // ["FIVE", 55],
  // ["TEN", 20],
  // ["TWENTY", 60],
  // ["ONE HUNDRED", 100]]
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);