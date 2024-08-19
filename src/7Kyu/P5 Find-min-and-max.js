/*
Description:
Implement a function that returns the minimal and the maximal value of a list (in this order).
*/
/*SOLUTION*/


function findMinMax(array){
    let min = array[0];
    let max = array[0];
    
    for(let i=0;i<array.length;i++){
        if(array[i] < min){
            min = array[i];
        }
        if(array[i] > max){
            max = array[i];
        }
    }
    console.log("Minimum number in array is: ",min);
    console.log("Maximum number in array is: ",max);

}
let array = [34,56,155,89,1,0,255,1000];
let result = findMinMax(array);

/*PROBLEM LINK/URL*/
/*https://www.codewars.com/kata/57a1ae8c7cb1f31e4e000130*/