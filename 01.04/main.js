//task1
// function volumeOfBox(obj) {
//     return obj.width* obj.length*obj.height;
// }
// console.log( volumeOfBox({ width: 2, length: 5, height: 1 }) );
// console.log( volumeOfBox({ width: 4, length: 2, height: 2 }) );
// console.log( volumeOfBox({ width: 2, length: 3, height: 5 }));


//task3
// let letters=[];
// let count=0;
// function getUnique(str) {
//     let start = false;
 
// for (let j = 0; j < str.length; j++) {
//     for (let k = 0; k <letters.length; k++) {
//         if (str[j] == letters[k]) {
//             start = true;
//         }
//     }
//     count++;
//     if (count == 1 && start == false) {
//         letters.push(str[j]);
//     }
//     start = false;
//     count = 0;
// }
 
// console.log(letters);
// }
       
          
// console.log(getUnique("armud"));

//task2
// function capitalizeEachWords(param) {
//     param=param.split(" ");
//     for(let i=0;i<param.length;i++ ){
//         param[i]=param[i][0].toUpperCase()+param[i].slice(1)
//     }
//     return param.join(" ")
// }
// console.log(capitalizeEachWords("zakir elacidir"))

//task4
//cumle daxilində ən uzun sozu tapan function
// function getMaxLengthWord(sentence) {
//     let max = sentence[0];
//     sentence = sentence.split(" ");
//     for (let i = 0; i < sentence.length; i++) {
//         if (sentence[i].length > max.length) {
//             max = sentence[i];
//         }
//     }
//     return max;
// }

// console.log(getMaxLengthWord("aytac azer leman elektrik"));


//task5 anagram strings

// function anagramStrings(str1,str2){
//     str1=str1.split("").sort();
//     str2=str2.split("").sort();
//     return str1.toString()===str2.toString();
// }
// console.log(anagramStrings("salam","masal" ))
// console.log(anagramStrings("salefam","masegal" ))

//task5
let mixArr=[2, undefined,-5,-4,"AzerBayCan",true,12, null,"Baku",NaN,182,4]
function findAllNums(arr) {
   let res=[];
   for (let i = 0; i < arr.length; i++) {
    arr[i]*1===arr[i] && res.push(arr[i])
    
   }
   return res;
}
console.log(findAllNums(mixArr));
                          