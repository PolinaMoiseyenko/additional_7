module.exports = function solveSudoku(matrix) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (matrix[i][j] === 0) {      //search for empty fields
        const solves = [];
        for (let a = 0; a < 9; a++) {
          solves.push([matrix[i][a],         //pushes "i" column values
                       matrix[a][j],         //pushes "j" row values
                       matrix[Math.floor(i / 3) * 3 + a % 3][Math.floor(j / 3) * 3 + Math.floor(a / 3)]]);      //pushes 3*3 block values
        }
        for (let b = 0; b < solves.length; b++) {
          matrix[i][j] = solves[b];
          solveSudoku(matrix);
        }
      }
    }
  }
return matrix;  
}