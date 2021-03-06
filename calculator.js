/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */
function calculatorModule() {
  var calculator = {};
  var total = 0;
  var memory = 0;
  
  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */
  calculator.load = function(x) {
    validation(x);
    total = x;
    return total;
  };

  /**
   * Return the value of `total`
   * @return { Number }
   */
  calculator.getTotal = function() {
    return total;
  };

  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */
  calculator.add = function(x) {
    validation(x);
    total = total + x;
    return total;
  };

/**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */
  calculator.subtract = function(x) {
    validation(x);
    total = total - x;
    return total;
  };

  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */
  calculator.multiply = function(x) {
    validation(x);
    total = total * x;
    return total;
  };

  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */
  calculator.divide = function(x) {
    validation(x);
    total = total / x;
    return total;
  };

  /**
   * Return the value stored at `memory`
   * @return { Number }
   */
  calculator.recallMemory = function() {
    return memory;
  };

  /**
   * Stores the value of `total` to `memory`
   */
  calculator.saveMemory = function() {
    memory = total;
  };

  /**
   * Clear the value stored at `memory`
   */
  calculator.clearMemory = function() {
    memory = 0;
  };  

  /**
   * Validation
   */
  function validation(x) {
    if(typeof x !== 'number') {
      throw Error();
    }
  }

  return calculator;

}
