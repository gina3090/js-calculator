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
  calculator.load = function (x) {
    total = x;
    return total;
  };

  /**
   * Return the value of `total`
   * @return { Number }
   */
  calculator.getTotal = function () {
    return total;
  };

  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */
  

/**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */
  

  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */
  

  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */
  

  /**
   * Return the value stored at `memory`
   * @return { Number }
   */
  

  /**
   * Stores the value of `total` to `memory`
   */
  

  /**
   * Clear the value stored at `memory`
   */
  

  /**
   * Validation
   */

  return calculator;
}

