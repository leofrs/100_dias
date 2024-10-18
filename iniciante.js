// 1
const fiveNumbersList = [1, 2, 3, 4, 5];
// console.log(fiveNumbersList);

//2
fiveNumbersList.push(6);
console.log(fiveNumbersList);

//3
fiveNumbersList.splice(2, 1);
console.log(fiveNumbersList);

//4
fiveNumbersList.reverse();
console.log(fiveNumbersList);

//5
const stringList = ["Leo", "Emmily"];
for (let i = 0; i < stringList.length; i++) {
  const element = stringList[i];
  console.log(`O elemento na posição ${i}, tem ${element.length} letras`);
}
