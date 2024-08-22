/*Description:
If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!

Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:

[[0, 0, 1],
 [0, 1, 2],
 [2, 1, 0]]
We want our function to return:

-1 if the board is not yet finished AND no one has won yet (there are empty spots),
1 if "X" won,
2 if "O" won,
0 if it's a cat's game (i.e. a draw).
You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.*/

/*SOLUTION*/
function tictactoe(arr) {
    let winPatterns = [
        [[0,0],[0,1],[0,2]],
        [[1,0],[1,1],[1,2]],
        [[2,0],[2,1],[2,2]],

        [[0,0],[1,0],[2,0]],
        [[0,1],[1,1],[2,1]],
        [[0,2],[1,2],[2,2]],

        [[0,0],[1,1],[2,2]],
        [[0,2],[1,1],[2,0]],
    ];

    for (let pattern of winPatterns) {
        let is1Win = true;
        let is2Win = true;

        for (let [row, col] of pattern) {
            if (arr[row][col] !== 1) {
                is1Win = false;
            }
            if (arr[row][col] !== 2) {
                is2Win = false;
            }
        }
        if (is1Win) {
            return 1;
        }
        if (is2Win) {
            return 2;
        }
    }
    for (let row of arr) {
        for (let box of row) {
            if (box === 0) { 
                return -1;
            }
        }
    }
    return 0;
}
let arr = [
    [0, 0, 2],
    [0, 1, 2],
    [2, 1, 0]
];
console.log(tictactoe(arr)); 


/*PROBLEM URL/LINK*/
/*https://www.codewars.com/kata/525caa5c1bf619d28c000335*/