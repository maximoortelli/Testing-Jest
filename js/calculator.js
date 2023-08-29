class MyCalc {
  objective(nums) {
    return nums.every((num) => typeof num === 'number' && !Number.isNaN(num));
  }

  error(error = 'invalid input') {
    throw new Error(error);
  }

  add(...nums) {
    if (this.objective(nums)) {
      return nums.reduce((a, b) => a + b, 0);
    }
    return this.error();
  }

  substract(...nums) {
    if (this.objective(nums)) {
      return nums.reduce((a, b) => a - b);
    }
    return this.error();
  }

  divide(num1, num2) {
    if (this.objective([num1, num2])) {
      if (num2 > 0) {
        return num1 / num2;
      }
      return this.error('Can not divide by 0');
    }
    return this.error();
  }

  multiply(num1, num2) {
    if (this.objective([num1, num2])) {
      return num1 * num2;
    }
    return this.error();
  }
}

module.exports = MyCalc;
