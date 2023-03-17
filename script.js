class OutOfRangeError extends Error {
  constructor() {
    super("Expression should only consist of integers and +-/* characters");
    this.name = "OutOfRangeError";
  }
}

class InvalidExprError extends Error {
  constructor() {
    super("Expression should not have an invalid combination of expression");
    this.name = "InvalidExprError";
  }
}

function evalString(expression) {
  const operators = ["+", "-", "*", "/"];
  const operatorCombos = ["++", "+-", "-+", "--", "**", "//", "/*", "/*", "+/", "-/", "*/", "/*"];

  if (/^[+\-*/]/.test(expression)) {
    throw new SyntaxError("Expression should not start with invalid operator");
  }

  if (/[+\-*/]$/.test(expression)) {
    throw new SyntaxError("Expression should not end with invalid operator");
  }

  for (let i = 0; i < operatorCombos.length; i++) {
    if (expression.includes(operatorCombos[i])) {
      throw new InvalidExprError();
    }
  }

  const cleanedExpr = expression.replace(/\s/g, "");

  for (let i = 0; i < cleanedExpr.length; i++) {
    if (!/^[0-9+\-*/]$/.test(cleanedExpr[i])) {
      throw new OutOfRangeError();
    }
  }

  return eval(expression);
}