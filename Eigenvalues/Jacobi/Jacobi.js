let A = [
  [5, -2, 0],
  [-2, 4, 1],
  [0,  1, 4]
];

const getTronsposer = (M) => {
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

const multiply = (M, N) => {
  const B = []
  for(let i=0; i<M.length; i++){
    B[i] = []
    for(let j=0; j<M.length; j++){
      B[i][j] = 0
    }
  }

  const TN = getTronsposer(N)
  for(let i=0; i<M.length; i++){
    for(let j=0; j<M.length; j++){
      for(let k=0; k<M.length; k++){
        B[j][i] += M[j][k] * TN[i][k]
      }
    }
  }

  return B
}

const getR = (c, s) => {
  return (
    [
      [c, 0, -s],
      [0, 1, 0],
      [s, 0, c]
    ]
  );
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
  const t = Math.sqrt(µ**2 + 1) - µ;

  const c = (1 - t**2) / (1 + t**2);
  const s = (2 * t) / ( 1 + t**2);
  
  return [c, s]
}

for(let k = 0; k<14; k++){
  let [p, q] = getPQ(A)
  let [c, s] = getCS(p, q, A)
  let r = getR(c, s)
  let rt = getTronsposer(r)

  A = multiply(rt, multiply(A, r))
}

console.log(A)