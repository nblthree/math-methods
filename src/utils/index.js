export const transpose = M => {
  const B = new Array(M.length).fill(0).map(() => new Array(M.length).fill(0))
  for (let i = 0; i < M.length; i++) {
    for (let j = 0; j < M.length; j++) {
      B[j][i] = M[i][j]
    }
  }
  return B
}

export const matrixDot = (M, N) => {
  var result = new Array(M.length)
    .fill(0)
    .map(() => new Array(N[0].length).fill(0))
  return result.map((row, i) => {
    return row.map((val, j) => {
      return M[i].reduce((sum, elm, k) => sum + elm * N[k][j], 0)
    })
  })
}
