const distance = (a, b) => {
  if (!a && !b) return 0;

  if (
    !(typeof a === "string" || a instanceof String) ||
    !(typeof b === "string" || b instanceof String)
  ) {
    throw new Error("InvalidType");
  }

  var matrix = [];

  for (let i = 0; i < a.length + 1; i++) {
    var rows = [];
    rows[0] = i;
    for (let j = 1; j < b.length + 1; j++) {
      rows.push(j);
    }
    matrix.push(rows);
  }

  for (let i = 1; i < a.length + 1; i++) {
    for (let j = 1; j < b.length + 1; j++) {
      if (a[i - 1] === b[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] =
          Math.min(matrix[i - 1][j], matrix[i - 1][j - 1], matrix[i][j - 1]) +
          1;
      }
    }
  }

  return matrix[a.length][b.length];
};

module.exports.distance = distance;
