class ComplexNumber {
  ISQUARE = -1;
  constructor(r, i) {
    this.real = r;
    this.imaginary = i;
  }

  square() {
    return this.multiply(this);
  }

  multiply(cNumber) {
    let sReal = this.real * cNumber.real - this.imaginary * cNumber.imaginary;
    let sImag = this.real * cNumber.imaginary + cNumber.real * this.imaginary;

    let c = new ComplexNumber(sReal, sImag);
    return c;
  }

  add(cNumber) {
    let sReal = this.real + cNumber.real;
    let sImag = this.imaginary + cNumber.imaginary;
    return new ComplexNumber(sReal, sImag);
  }

  compare(cNumber) {
    if (this.real == NaN || this.imaginary == NaN) {
      return 1;
    }

    if (cNumber instanceof ComplexNumber) {
      cNumber = cNumber.real;
    }

    if (cNumber <= Math.abs(this.real)) {
      return 1;
    }
    return 0;
  }

  display() {
    console.log(`${this.real} + ${this.imaginary}i`);
  }

  toString() {
    return `${this.real} + ${this.imaginary}i`;
  }
}
