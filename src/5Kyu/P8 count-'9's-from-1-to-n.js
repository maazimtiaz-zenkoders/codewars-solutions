/*Description:
It's 9 time!

I want to count from 1 to n. How many times will I use a '9'?

9, 19, 91.. will contribute one '9' each, 99, 199, 919.. wil contribute two '9's each...etc

Note: n will always be a positive integer.

Examples (input -> output)
8  -> 0
9  -> 1
10 -> 1
98 -> 18
100 -> 20*/

/*SOLUTION*/
function count_9(number){
    
    let counter = 0;
    
    for(let i=1;i<=number;i++){
     let numStr = i.toString();
        for(let j=0;j<numStr.length;j++){
            if(numStr[j] === '9'){
                counter++;
            }
        }
    }
    return counter;
}
console.log(count_9(8));
console.log(count_9(9));
console.log(count_9(10));
console.log(count_9(98));
console.log(count_9(100));


/*PROBLEM URL/LINK*/
/*https://www.codewars.com/kata/55143152820d22cdf00001bb*/