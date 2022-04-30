// the output should be true
const grid1 = [
    [".", ".", ".", "1", "4", ".", ".", "2", "."],
    [".", ".", "6", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", "1", ".", ".", ".", ".", ".", "."],
    [".", "6", "7", ".", ".", ".", ".", ".", "9"],
    [".", ".", ".", ".", ".", ".", "8", "1", "."],
    [".", "3", ".", ".", ".", ".", ".", ".", "6"],
    [".", ".", ".", ".", ".", "7", ".", ".", "."],
    [".", ".", ".", "5", ".", ".", ".", "7", "."],
  ];
  
  // the output should be false
  const grid2 = [
    [".", ".", ".", ".", "2", ".", ".", "9", "."],
    [".", ".", ".", ".", "6", ".", ".", ".", "."],
    ["7", "1", ".", ".", "7", "5", ".", ".", "."],
    [".", "7", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", "8", "3", ".", ".", "."],
    [".", ".", "8", ".", ".", "7", ".", "6", "."],
    [".", ".", ".", ".", ".", "2", ".", ".", "."],
    [".", "1", ".", "2", ".", ".", ".", ".", "."],
    [".", "2", ".", ".", "3", ".", ".", ".", "."],
  ];
  
  function sudoku2(grid) {
    for (let row of grid) {
        if (!checkRow(row))
         return false; 
    }

    for (let j = 0; j < grid[0].length; j++) {
        if (!checkCol(j, grid))
         return false;
    }

    for (let i = 0; i < grid.length; i += 3) {
        for (let j = 0; j < grid[0].length; j += 3) {
            if (!checkBox(grid, i, j))
             return false;
        }
    }
    return true;
}

function checkCol(j, grid) {
    let seen = new Set();
    for(let i = 0; i < grid.length; i++) {
        if (grid[i][j] !== '.' && seen.has(grid[i][j])) {
            return false;
        }
        seen.add(grid[i][j]);
    }
    return true;
}

function checkRow(row) {
    let seen = new Set();
    for (let num of row) {
        if (num !== '.' && seen.has(num)) {
            return false;
        }
        seen.add(num)
    }
    return true;
} 

function checkBox(grid, i, j) {
    let seen = new Set();
    let neighbors = [
         [0,0], [0,1], [0,2],
         [1,0], [1,1], [1,2],
         [2,0], [2,1], [2,2],
    ]

    for (let [x, y] of neighbors) {
        let curr = grid[i+x][j+y];
        if (curr !== '.' && seen.has(curr)) {
            return false;
        }
        seen.add(curr);
    }
    return true;
}
  
  console.log(sudoku2(grid1)); // true
  console.log(sudoku2(grid2)); // false
  