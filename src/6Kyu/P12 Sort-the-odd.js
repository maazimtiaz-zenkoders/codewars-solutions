/*Description:
Task
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]*/

/*SOLUTION*/
function sortOddNumbers(array){
    let oddNum = [];
    
    for(let i=0;i<array.length;i++){
        if(array[i] % 2 !== 0){
            oddNum.push(array[i]);
        }
    }
    for(let i=0;i<oddNum.length;i++){
        for(let j=i+1;j<oddNum.length;j++){
            if(oddNum[i] > oddNum[j]){
                let temp = oddNum[i];
                oddNum[i] = oddNum[j];
                oddNum[j] = temp;
            }
        }
    }
    let odd = 0;
    for(let i=0;i<array.length;i++){
        if(array[i] % 2 !== 0){
            array[i] = oddNum[odd++];
        }
    }
    return array;
}
console.log(sortOddNumbers([7, 1])); 
console.log(sortOddNumbers([5, 8, 6, 3, 4]));
console.log(sortOddNumbers([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])); 

/*PROBLEM URL/LINK*/
/*https://www.codewars.com/kata/578aa45ee9fd15ff4600090d*/