# QR

## Usage

Used for Hessenberg matrix

```
import mathMethods from "math-methods"

const m = [
  [1, 4, 2, 3],
  [3, 4, 1, 7],
  [0, 2, 3, 4],
  [0, 0, 1, 3]
];

const qr = mathMethods.eigenvalues.qr

const { Q, R } = qr(m)
```
