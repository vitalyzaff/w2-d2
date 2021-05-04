const transpose = function(matrix) {
  let result = [];
  let final = [];
  let length = matrix.length;
  for (let i in matrix) {
    for (let elem of matrix) {
      if (elem[i]) {
        result.push(elem[i]);
      }
    }
  }
  while (result.length >= length) {
    final.push(result.splice(0, length));
  }
  if (matrix.length === 1) {
    return matrix;
  }
  return final;
};


// Do not edit this function.
const printMatrix = (matrix) => {
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el + " ");
    }
    process.stdout.write('\n');
  }
};

printMatrix(transpose([
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4]
]));

console.log('----');

printMatrix(transpose([
  [1, 2],
  [3, 4],
  [5, 6]
]));

console.log('----');

printMatrix(transpose([
  [1, 2, 3, 4, 5, 6, 7]
]));