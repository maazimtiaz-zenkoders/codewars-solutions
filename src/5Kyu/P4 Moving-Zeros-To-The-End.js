/*Description:
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]*/

/*SOLUTION*/
function moveZeros(array){
    let res = [];
    
    for(let i=0;i<array.length;i++){
        if(array[i] !== 0){
            res.push(array[i]);
        }
    }
    let counter = 0;
    for(let i=0;i<array.length;i++){
        if(array[i] === 0){
            counter++;
        }
    }
    for(let i=0;i<counter;i++){
        res.push(0);
    }
    return res;
}
console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));

/*PROBLEM LINK/URL*/
/*https://www.codewars.com/kata/52597aa56021e91c93000cb0*/