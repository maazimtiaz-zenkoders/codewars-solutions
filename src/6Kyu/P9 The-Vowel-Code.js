/*Description:
Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

a -> 1
e -> 2
i -> 3
o -> 4
u -> 5
For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

For example, decode("h3 th2r2") would return "hi there".

For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.*/

/*SOLUTION*/
function encode(str){
    let encStr = '';
    for(let i=0;i<str.length;i++){
        let char = str[i];
        switch(char){
            case 'a':
                encStr += 1;
                break;
            case 'e':
                encStr += 2;
                break;
            case 'i':
                encStr += 3;
                break;
            case 'o':
                encStr += 4;
                break;
            case 'u':
                encStr += 5;
                break;
            default:
                encStr += char;
        }
    }
    return encStr;
}
function decode(str){
    let decStr = '';
    for(let i=0;i<str.length;i++){
        let char = str[i];
        switch(char){
            case '1':
                decStr += 'a';
                break;
            case '2':
                decStr += 'e';
                break;
            case '3':
                decStr += 'i';
                break;
            case '4':
                decStr += 'o';
                break;
            case '5':
                decStr += 'u';
                break;
            default:
                decStr += char;
        }
    }
    return decStr;
}
console.log("The Encoded Message is :",encode("hello"));
console.log("The Decoded Message is :",decode("h3 th2r2"));

/*PROBLEM LINK/URL*/
/*https://www.codewars.com/kata/53697be005f803751e0015aa*/

