# Copilot Code Generation Instructions for JavaScript

## General Guidelines
- Use camelCase for variable and function names.
- Use PascalCase for class names.
- Use double quotes for strings.
- Ensure all functions have JSDoc comments.
- Ensure consistent indentation using 2 spaces.
- Use '#' as a prefix for private class fields (ES2022+).
- Favor composition over inheritance where possible.

## Specific Instructions
- Use `const` for variables that do not change, `let` otherwise.
- Use `let` or `const` for block scoping.
- Prefer arrow functions for anonymous functions.
- Use template literals (`` `${}` ``) for string concatenation.
- Ensure all functions handle errors using exceptions (`try/catch`).
- Only import modules that are used.
- Check for proper error handling in all functions.
- Ensure all loops have proper termination conditions.
- Use descriptive names for variables and functions.
- Avoid deeply nested code; refactor into smaller functions if necessary.
- Ensure all promises are properly awaited using `async/await`.
- Verify that all dependencies are listed in `package.json`.
- Check for any potential performance issues.
- Ensure all abstract base classes have a proper `constructor` and, if needed, throw if instantiated directly.

## Testing Guidelines
- Use Jest for all tests. [Reference](https://jestjs.io/)
- Ensure all tests are self-contained and do not rely on external state.
- Write tests for all public functions and classes.
- Ensure tests cover both typical and edge cases.
- Use descriptive names for test cases and functions.

### Example Test Snippet
```js
const Manager = require("./manager");

/**
 * Test suite for Manager class.
 */
describe("Manager class", () => {
  const manager = new Manager(1, "Alice", 75000.0, "Engineering");

  test("getDetails returns correct string", () => {
    expect(manager.getDetails()).toBe("ID: 1, Name: Alice, Salary: 75000, Department: Engineering");
  });

  test("getDepartment returns correct department", () => {
    expect(manager.getDepartment()).toBe("Engineering");
  });
});
```

## Example Code Snippets

```js
// Good example of a function to add a new employee with proper naming and error handling
/**
 * Adds a new employee to the company.
 * @param {string} employeeName The name of the employee.
 * @param {string} employeeId The ID of the employee.
 * @returns {boolean} True if the employee was added successfully, false otherwise.
 */
function addEmployee(employeeName, employeeId) {
  try {
    // Assuming addEmployeeToDatabase is a function that adds an employee to the database
    const success = addEmployeeToDatabase(employeeName, employeeId);
    if (!success) {
      throw new Error("Failed to add employee to the database");
    }
    return true;
  } catch (e) {
    console.error("Failed to add employee:", e.message);
    return false;
  }
}
```

```js
// Good example of a function to calculate the department budget with proper naming and error handling
/**
 * Calculates the budget for a department.
 * @param {string} departmentId The ID of the department.
 * @returns {number} The budget of the department.
 */
function calculateDepartmentBudget(departmentId) {
  try {
    // Assuming getDepartmentExpenses is a function that retrieves the expenses of a department
    const expenses = getDepartmentExpenses(departmentId);
    // Assuming getDepartmentRevenue is a function that retrieves the revenue of a department
    const revenue = getDepartmentRevenue(departmentId);
    return revenue - expenses;
  } catch (e) {
    console.error("Failed to calculate department budget:", e.message);
    throw e;
  }
}
```

```js
// Good example of a function to fetch manager details with proper naming and error handling
/**
 * Fetches the details of a manager.
 * @param {string} managerId The ID of the manager.
 * @returns {Promise<Object>} The details of the manager.
 */
async function fetchManagerDetails(managerId) {
  try {
    const response = await fetch(`/api/managers/${managerId}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (e) {
    console.error("Failed to fetch manager details:", e.message);
    throw e;
  }
}
```

```js
// Good example of a function to update an employee's department with proper naming and error handling
/**
 * Updates the department of an employee.
 * @param {string} employeeId The ID of the employee.
 * @param {string} newDepartment The new department to be assigned.
 * @returns {boolean} True if the department was updated successfully, false otherwise.
 */
function updateEmployeeDepartment(employeeId, newDepartment) {
  try {
    // Assuming updateDepartmentInDatabase is a function that updates the department in the database
    const success = updateDepartmentInDatabase(employeeId, newDepartment);
    if (!success) {
      throw new Error("Failed to update employee department in the database");
    }
    return true;
  } catch (e) {
    console.error("Failed to update employee department:", e.message);
    return false;
  }
}
```



