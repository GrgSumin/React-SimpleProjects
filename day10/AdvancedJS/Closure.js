//A clousre is the combination of function bundled togther with references to its surroundings state
//they are created every time a function is create at funtion creation time
//with closure inner function has access to variables,parameters and function in the outer funtion scope even after outer fn has finished its execution

function outer() {
  let counter = 0;
  function inner() {
    counter++;
    console.log(counter);
  }
  return inner;
}
const fn = outer();
fn();
fn();
fn();
