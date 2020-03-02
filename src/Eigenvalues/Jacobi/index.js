import { transpose, matrixDot } from './../../utils'

const getR = (c, s, p, q, n) => {
  const R = []
  for (let i = 0; i < n; i++) {
    R[i] = []
    for (let j = 0; j < n; j++) {
      if (i === p && j === p) {
        R[i][j] = c
      } else if (i === p && j === q) {
        R[i][j] = s
      } else if (i === q && j === p) {
        R[i][j] = -s
      } else if (i === q && j === q) {
        R[i][j] = c
      } else if (i === j) {
        R[i][j] = 1
      } else {
        R[i][j] = 0
      }
    }
  }
  return R
}

const getPQ = M => {
  let p = 0
  let q = 0
  let m = -1
  const n = M.length // Size of the matrix

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (m < Math.abs(M[i][j])) {
        m = Math.abs(M[i][j])
        p = i
        q = j
      }
    }
  }
  return [p, q]
}

const getCS = (p, q, M) => {
  const µ = (M[q][q] - M[p][p]) / (2 * M[p][q])
  const t = -Math.sqrt(µ ** 2 + 1) - µ

  const c = 1 / Math.sqrt(1 + t ** 2)
  const s = t / Math.sqrt(1 + t ** 2)

  return [c, s]
}

export default function jacobi (matrix, epsilon = 10 ** 4 * Number.EPSILON) {
  let step = 0
  let v = Number.MAX_SAFE_INTEGER
  while (Math.abs(v) > epsilon) {
    const [p, q] = getPQ(matrix)
    v = matrix[p][q]
    const [c, s] = getCS(p, q, matrix)
    const r = getR(c, s, p, q, matrix.length)
    const rt = transpose(r)

    matrix = matrixDot(rt, matrixDot(matrix, r))
    step++
  }
  return {
    matrix,
    step
  }
}
