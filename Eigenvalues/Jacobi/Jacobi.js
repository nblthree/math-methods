const transpose = (M) => {
  const B = []
  for(let i=0; i<M.length; i++){
    B[i] = []
    for(let j=0; j<M.length; j++){
      B[i][j] = 0
    }
  }

  for(let i=0; i<M.length; i++){
    for(let j=0; j<M.length; j++){
      B[j][i] = M[i][j]
    }
  }

  return B
}

const matrixDot = (M, N) => {
  var result = new Array(M.length).fill(0).map(row => new Array(N[0].length).fill(0));
  return result.map((row, i) => {
    return row.map((val, j) => {
      return M[i].reduce((sum, elm, k) => sum + (elm*N[k][j]) ,0)
    })
  })
}

const getR = (c, s, p, q, n) => {
  const R = []
  for(let i=0; i<n; i++){
    R[i] = []
    for(let j=0; j<n; j++){
      if(i === p && j === p){
        R[i][j] = c;
      } else if(i === p && j === q) {
        R[i][j] = s;
      } else if(i === q && j === p) {
        R[i][j] = -s;
      } else if(i === q && j === q) {
        R[i][j] = c;
      } else if(i === j) {
        R[i][j] = 1;
      } else {
        R[i][j] = 0;
      }
    }
  }
  return R;
}

const getPQ = (M) => {
  let p = 0;
  let q = 0;
  let m = -1;
  const n = M.length // Size of the matrix

  for(let i=1; i<n; i++){
    for(let j=0; j<i; j++){
      if(m < Math.abs(M[i][j])){
        m = Math.abs(M[i][j]);
        p = i;
        q = j;
      }
    }
  }
  return [p, q];
}

const getCS = (p, q, M) => {
  const µ = (M[q][q] - M[p][p]) / (2 * M[p][q]);
  const t = -Math.sqrt(µ**2 + 1) - µ;

  const c = 1 / Math.sqrt(1 + t**2);
  const s =  t / Math.sqrt( 1 + t**2);
  
  return [c, s]
}

// Test
let A = [
  [5, -2, 0],
  [-2, 4, 1],
  [0,  1, 4]
];

for(let k = 0; k<8; k++){
  let [p, q] = getPQ(A)
  let [c, s] = getCS(p, q, A)
  let r = getR(c, s, p, q, A.length)
  let rt = transpose(r)

  A = matrixDot(rt, matrixDot(A, r))
}

console.log(A)
