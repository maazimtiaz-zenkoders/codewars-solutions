/*Description:
Your task is to write a function that takes two integers n and m, and returns a sorted array of all integers from n to m inclusive, which have exactly 3 divisors (excluding 1 and the number itself).

Example:
solution(2, 20) -> [16]
16 has 3 divisors: 2, 4, 8 (1 and 16 aren't included)

Input:
n - integer (2 ≤ n ≤ 10^14)
m - integer (2 ≤ m ≤ 10^18)
NOTE: In Rust, the bounds are (2 ≤ n ≤ 2^51), (20 ≤ m ≤ 2^52).

Output:
result - array of integers*/


/*SOLUTION*/
function threeDivisor(n,m){
    let res = [];
    
    for(let i = n; i <= m; i++){
        let counter = 0;
        
        for(let j = 2; j < i; j++){
            if(i % j === 0){
                counter++;
            }
        }
        if(counter === 3){
            res.push(i);
        }
    }
    return res;
}
console.log(threeDivisor(2,20));

/*PROBLEM LINK/URL*/
/*https://www.codewars.com/kata/65eb2c4c274bd91c27b38d32*/
