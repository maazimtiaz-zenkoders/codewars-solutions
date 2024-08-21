/*Description:
Write a function that outputs the transpose of a matrix - a new matrix where the columns and rows of the original are swapped.

For example, the transpose of:

| 1 2 3 |
| 4 5 6 |
is

| 1 4 |
| 2 5 |
| 3 6 |
The input to your function will be an array of matrix rows. You can assume that each row has the same length, and that the height and width of the matrix are both positive.*/

/*SOLUTION*/
function transposeMatrix(mat){
    let transpoeMatrix = [];
    
    for(let i=0;i<mat[0].length;i++){
        transpoeMatrix[i] = []; 
        for(let j=0;j<mat.length;j++){
            transpoeMatrix[i][j] = mat[j][i];
        }
    }
    return transpoeMatrix;
}
let mat = [
    [1,2,3],
    [4,5,6]
];
console.log("Original Matrix");
console.log(mat);
console.log("Transposed Matrix");
console.log(transposeMatrix(mat));

/*PROBLEM LINK/URL*/
/*https://www.codewars.com/kata/52fba2a9adcd10b34300094c*/
