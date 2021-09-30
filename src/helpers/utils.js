export const getNumbersFromString = (string) => string.replace(/\D/g, '');

export const reverseMatrix = (matrix) => {
  const reversedMatrix = [];

  for (let column = 0; column < matrix[0].length; column += 1) {
    const newRow = [];

    for (let row = 0; row < matrix.length; row += 1) {
      newRow.push(matrix[row][column]);
    }

    reversedMatrix.push(newRow);
  }

  return reversedMatrix;
};
