// Task 1: daweret for loop 0-dan 100-mde console.log-shi dabewdet index i
console.log("Task 1:");
// daiwkebs for tsikls i sawkisi mnishvnelobit, sanam i ar iqneba 100-ze naklebi an toli, gazrdis ertit kovel ganmeorebashi 
for (let i = 0; i <= 100; i++) {
    // dabewdavs i-is mnishvnelobas console.log(i);
    console.log(i);
}

// Task 2: daweret  while loop 0-dan 50-mde da dabewdet index i
console.log("\nTask 2:");
//  a cvladis inicilizacia j-ti 0 mnishvnelobit
let j = 0;
// daiwkebs while loop, da gagrzeldeba sanam j ar iqneba naklebi an toli 50
while (j <= 50) {
    // dabewdavs j mnishvnelobas console.log(j);
    console.log(j);
    // j-is gazrda 1-it 
    j++;
}

// Task 3: shekmenit 5 elementiani masivi da sheasrulet masze skhvadaskhva operatsiebi
console.log("\nTask 3:");
// shekmenit masivi 5 satwkisi elementit
let namesArray = ["Alice", "Bob", "Charlie", "David", "Eve"];
// namdvili masivis amobewdva console.log-shi
console.log("Original Array:", namesArray);

//  pop() metodis gamokenebit vshlit bolo elements
namesArray.pop();
//dabechdavs  masivs pop() metodis gamokenebis shemdeg
console.log("After pop:", namesArray);

// vikenebt shift() metods rom waishalos pirveli elementi
namesArray.shift();
// bewdavs masivs shift() metodis gamokenebis shemdeg
console.log("After shift:", namesArray);

// unshift() metodis gamokenebit vamatebt elements masivis dasawkisshi
namesArray.unshift("Zoe");
// Print the array after using unshift() method
console.log("After unshift:", namesArray);

// Using push() metods vikeneb rom davamato elementi masivis bolos
namesArray.push("Frank");
// masivs bewdavs  push() methodis gamokenebis shemdeg
console.log("After push:", namesArray);

// sakhelis damateba konkretul indexze (index 2 am shemtkhvevashi)
namesArray.splice(2, 0, "Gina");
// masivs dabewdavs mas shemdeg rac mivaniwe 'Gina' 2 indexs
console.log("After adding 'Gina' at index 2:", namesArray);

// sakhelis washla konkretul indexze (am shemtkhvevashi index 1)
namesArray.splice(1, 1);
// dabewdavs  masivs sakhelis washlis shemdeg index 1-shi
console.log("After deleting name at index 1:", namesArray);

// Task 4: sheqmenit masivi da sheavset igi 1-dan 10000-mde ritskhvebis kvadratebit
console.log("\nTask 4:");
// cariel masivs vqmni kvadratebis shesanaxad
let squaresArray = [];
// vwert for loops 1-dan 10000-mde
for (let i = 1; i <= 10000; i++) {
   // gamoitvlis titoeuli ritskhvis kvadrats da gadaitans  SquaresArray-shi
   SquaresArray.push(i * i);
}
// amobechdavs kvadratebis masivs console.log-shi
console.log("Array of squares:", squaresArray);
// Task 5: sheqmenit 5 elementisgan shemdgari masivi, romlis titoeuli elementi aris ritskhvi da daitvalet jami for gamokenebit
console.log("Task 5:");
let numbersArray = [10, 20, 30, 40, 50];
let sum = 0; // tsvladis initsireba jamis shesanakhad
for (let i = 0; i < numbersArray.length; i++) {
    sum += numbersArray[i]; // daamatebs titoeul elements jamshi
}
console.log("Sum of the numbers:", sum);

// Task 6: daweret punqcia,rom sheamowmos ricxvi kentia tu luwi
console.log("\nTask 6:");
function isOdd(number) {
    return number % 2 !== 0; // daabrunebs true tu ritskhvi kentia, tu mtsdaria luws
}
console.log("Is 5 odd?", isOdd(5)); // testavs kent ricxvs
console.log("Is 10 odd?", isOdd(10)); // testavs luw ricxvs 

//Task 7: daweret punqcia, romelic miighebs UpperCase strings mag: (MY NAME IS JOHN) da daabrunebs LowerCase (my name is john) strings 
console.log("\nTask 7:");
function convertToLowerCase(upperCaseString) {
    return upperCaseString.toLowerCase(); // abrunebs stringis lowercase versias
}
console.log("Lowercase:", convertToLowerCase("MY NAME IS JOHN")); // datestavs uppercase strings

// Task 8: daweret punktsia, romelits miighebs ritskhvebis masivebs da daabrunebs gapiltrul masivx .filter sadats mkholod luwi ritskhvebi ikneba
console.log("\nTask 8:");
function filterEvenNumbers(numbers) {
    return numbers.filter(number => number % 2 === 0); //  .filter() metods vikenebt rom daabrunos mxolod luwebi
}
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // shereuli ricxvebis testireba
console.log("Filtered even numbers:", filterEvenNumbers(numbers));