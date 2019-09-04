function checkCashRegister(price, cash, cid) {
    let denom = [
        { name: 'ONE HUNDRED', val: 100.00},
        { name: 'TWENTY', val: 20.00},
        { name: 'TEN', val: 10.00},
        { name: 'FIVE', val: 5.00},
        { name: 'ONE', val: 1.00},
        { name: 'QUARTER', val: 0.25},
        { name: 'DIME', val: 0.10},
        { name: 'NICKEL', val: 0.05},
        { name: 'PENNY', val: 0.01}
    ];
      
    let output = { status: null, change: [] };
    let change = cash - price;

    let register = cid.reduce((acc, curr) => {
        acc.total += curr[1];
        acc[curr[0]] = curr[1];
        return acc;
      }, { total: 0 });

    if (change > register.total){
        output.status = 'INSUFFICIENT_FUNDS';
        return output;
    }

    if (change === register.total){
        output.status = 'CLOSED';
        output.change = cid;
        return output
    }

    // Loop through the denomination array
    let change_arr = denom.reduce((acc, curr) => {
    let value = 0;
    // While there is money of this denom and while we have not reached the changed needed is more than the current denom
    while (register[curr.name] > 0 && change >= curr.val) {
      change -= curr.val;
      register[curr.name] -= curr.val;
      value += curr.val;

      change = Math.round(change * 100) / 100;
    }
    // Add this denomination to the output only if any was used.
    if (value > 0) {
        acc.push([ curr.name, value ]);
    }
    return acc;
  }, []); 

  if (change_arr.length < 1 || change > 0) {
    output.status = 'INSUFFICIENT_FUNDS';
    return output;
  }
  output.status = 'OPEN';
  output.change = change_arr;
  return output;
}

  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) // should return {status: "OPEN", change: [["QUARTER", 0.5]]}.
  checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) // should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
  checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) // should return {status: "INSUFFICIENT_FUNDS", change: []}.
  checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) // should return {status: "INSUFFICIENT_FUNDS", change: []}.
  checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) // should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}