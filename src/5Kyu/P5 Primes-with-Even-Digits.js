/*Description:
Find the closest prime number under a certain integer n that has the maximum possible amount of even digits.

For n = 1000, the highest prime under 1000 is 887, having two even digits (8 twice)

Naming f(), the function that gives that prime, the above case and others will be like the following below.

f(1000) ---> 887 (even digits: 8, 8)

f(1210) ---> 1201 (even digits: 2, 0)

f(10000) ---> 8887

f(500) ---> 487

f(487) ---> 467
Features of the random tests:

Number of tests = 28
1000 <= n <= 5000000
Enjoy it!!*/

/*SOLUTION*/
function isPrime(num){
    if(num <= 1) return false;
    if(num === 2) return true;
    if(num % 2 === 0) return false;
    
    for(let i = 3; i < num; i+=2){
        if(num % i === 0){
            return false
        }
    }
    return true;
}
function countEven(num){
    let counter = 0;
    let strNum = num.toString();
    
    for(let i=0;i<strNum.length;i++){
        let dig = parseInt(strNum[i],10);
        if(dig % 2 === 0){
            counter++;  
        }
    }
    return counter;
}
function f(n){
    let evenDigit = 0;
    let res = 0;
    
    for(let i=n-1;i>=2;i--){
        if(isPrime(i)){
            let even = countEven(i);
            if(even > evenDigit){
                evenDigit = even;
                res = i;
            }
        }
    }
    return res;
}

console.log(f(1000)); 
console.log(f(1210));
console.log(f(10000)); 
console.log(f(500)); 
console.log(f(487)); 

/*PROBLEM LINK/URL*/
/*https://www.codewars.com/kata/582dcda401f9ccb4f0000025/javascript*/