function foo(a, b) {
  if (a === 0 && b === 0) {
    throw new Error("Cannot divide by zero"); // Throw an error if a and b are both 0
  } else if (a === 0 || b === 0) {
    return 0;
  }
  return a / b;
}