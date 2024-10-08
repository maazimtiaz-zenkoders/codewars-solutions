/*Description:
Multiplication - Generators #2
Generators can be used to wonderful things. You can use them for numerous things, but here is one specific example. You are studying for a test so you must practice your multiplication, but you don't have a multiplication table showing the different examples. You have decided to create a generator that prints out a limitless list of time tables.
Task
Your generator must take one parameter `a` then everytime the generator is called you must return a string in the format of: `'a x b = c'` where c is the answer. Also, the value of `b`, which starts at 1, must increment by 1 each time!

More Info: Generators (JS), Generators (Python), Generators (PHP), Generators (Java)*/

/*SOLUTION*/
function multiplication(a) {
  let b = 1;

  function nextElement() {
    let c = a * b;
    let res = `${a} x ${b} = ${c}`;
    b++;
    return res;
  }

  return nextElement;
}

let mul = multiplication(5);

console.log(mul());
console.log(mul());
console.log(mul());
console.log(mul());
console.log(mul());

/*PROBLEM LINK/URL*/
/*https://www.codewars.com/kata/5637ead70013386e30000027*/
