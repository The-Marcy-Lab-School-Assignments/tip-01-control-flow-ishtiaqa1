// This function takes in a value and shows how JS evaluates it
const checkValue = (value) => {
  // JavaScript will convert the value to a boolean inside this if statement depending on if this value is truthy or falsy
  if (value) {
    console.log(value, "This value is truthy ✅");
  } else {
    console.log(value, "This value is falsy ❌");
  }

  console.log("--------------------------");
};

// 🧪 Test with different data types
checkValue("Hello"); // String (truthy)
checkValue("");           // Empty string (falsy)
checkValue(42);            // Number (truthy)
checkValue(0); // Number zero (falsy)
checkValue(true);          // Boolean (truthy)
checkValue(false);         // Boolean (falsy)
checkValue(undefined);     // Undefined (falsy)
checkValue(null);          // Null (falsy)
checkValue(NaN);            // Not-a-Number (falsy)

// This function takes a numeric test score (0–100)
// and returns the corresponding letter grade (A–F)
const assignGrade = (score) => {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
};

// 🧪 Test the function
console.log(assignGrade(95)); // "A"
console.log(assignGrade(74)); // "C"
console.log(assignGrade(40)); // "F"
