# Jacobi

## Usage

Used for Symmetric matrix

```
import mathMethods from "math-methods"

const m = [
  [5, -2, 0],
  [-2, 4, 1],
  [0,  1, 4]
];
const epsilon = 0.001

const jacobi = mathMethods.eigenvalues.jacobi

const { matrix, step } = jacobi(m, epsilon) // default epsilon 0.0001
```
