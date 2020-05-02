function checkCashRegister(price, cash, cid) {
  var change = cash - price;
  let sum = 0;
  cid.map(el=> sum += el[1]);
 
  if (change > sum){
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }
  else if(change == sum){
    return {status: "CLOSED", change: [...cid]};
  }
  let result = 0;
  let unchanged;
  let newArr = [["PENNY", 0], ["NICKEL", 0], ["DIME",0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED",0]];
 
  while(change >= 0.01 ){
  if (change >= 100 && newArr[8][1] < cid[8][1]) {
    result = 100;
    change = change - result;
    newArr[8][1] += result; 
  }
  else if (change >= 20 && newArr[7][1] < cid[7][1]){
    result = 20;
     change = change - result;
     newArr[7][1] += result;
  }
  else if(change >=10 && newArr[6][1] < cid[6][1]){
    result = 10;
     change = change - result;
     newArr[6][1] += result;
  }
  else if(change >= 5 && newArr[5][1] < cid[5][1] ) {
    result = 5;
     change = change - result;
     newArr[5][1] += result;
  }
  else if(change >= 1 && newArr[4][1] < cid[4][1]) {
    result = 1;
     change = change - result;
     newArr[4][1] += result;
  }
  else if (change >= 0.25 && newArr[3][1] < cid[3][1]) {
    result = 0.25;
     change = change - result;
     newArr[3][1] += result;
  }
  else if (change >= 0.1 && newArr[2][1] < cid[2][1]){
    result = 0.1;
     change = change - result;
     newArr[2][1] += result;
  }
  else if (change >= 0.05 && newArr[1][1] < cid[1][1]){
    result = 0.05;
     change = change - result;
     newArr[1][1] += result;
  }
  else if (change >= 0.01 && newArr[0][1] < cid[0][1]) {
    result = 0.01;
     change = change - result;
     newArr[0][1] += result;
  }
  if (change == unchanged) {
   return {status: "INSUFFICIENT_FUNDS", change: []}
  }
  change += 0.000000000001
  unchanged = change;
  
  
  }
  newArr = newArr.filter(el => el[1] != 0);
  return {status: "OPEN", change: [...newArr.reverse()]};
}

let result = checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
console.log(result)
