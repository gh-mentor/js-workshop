# Copilot Code Generation Instructions

## General Guidelines
- Use camelCase for variable and function names.
- Use PascalCase for class names.
- Use double quotes for strings.
- Ensure all functions have Doxygen comments.
- Ensure consistent indentation using 2 spaces.
- Use 'm_' as a prefix for private and protected member variables.
- Separate implementation and design by using header (`.h` or `.hpp`) and source (`.cpp`) files.
- Favor composition over inheritance where possible.

## Specific Instructions
- Use `const` for variables that do not change.
- Use `auto` for type inference where appropriate.
- Prefer lambda functions for anonymous functions.
- Use `std::stringstream` for string concatenation. 
- Ensure all functions handle errors using exceptions. 
- Verify that all included headers are used.
- Check for proper error handling in all functions.
- Ensure all loops have proper termination conditions.
- Use descriptive names for variables and functions.
- Avoid deeply nested code; refactor into smaller functions if necessary.
- Ensure all promises are properly awaited using `std::future`. [Reference](https://en.cppreference.com/w/cpp/thread/future)
- Verify that all dependencies are listed in `CMakeLists.txt`.
- Check for any potential performance issues.
- Ensure all abstract base classes have a virtual destructor. 

## Testing Guidelines
- Use DocTest for all tests. [Reference](https://github.com/onqtam/doctest)
- Ensure all tests are self-contained and do not rely on external state.
- Write tests for all public functions and classes.
- Ensure tests cover both typical and edge cases.
- Use descriptive names for test cases and functions.

### Example Test Snippet
```cpp
#include "doctest.h"
#include "manager.h"

/**
 * Test case for Manager class.
 */
TEST_CASE("Manager class") {
  Manager manager(1, "Alice", 75000.0, "Engineering");

  SUBCASE("getDetails") {
    CHECK(manager.getDetails() == "ID: 1, Name: Alice, Salary: 75000, Department: Engineering");
  }

  SUBCASE("getDepartment") {
    CHECK(manager.getDepartment() == "Engineering");
  }
}
```

## Example Code Snippets

```cpp
// Good example of a function to add a new employee with proper naming and error handling
/**
 * Adds a new employee to the company.
 * @param employeeName The name of the employee.
 * @param employeeId The ID of the employee.
 * @return True if the employee was added successfully, false otherwise.
 */
bool addEmployee(const std::string& employeeName, const std::string& employeeId) {
  try {
    // Assuming addEmployeeToDatabase is a function that adds an employee to the database
    auto success = addEmployeeToDatabase(employeeName, employeeId);
    if (!success) {
      throw std::runtime_error("Failed to add employee to the database");
    }
    return true;
  } catch (const std::exception& e) {
    std::cerr << "Failed to add employee: " << e.what() << std::endl;
    return false;
  }
}

```

```cpp

// Good example of a function to calculate the department budget with proper naming and error handling
/**
 * Calculates the budget for a department.
 * @param departmentId The ID of the department.
 * @return The budget of the department.
 */
double calculateDepartmentBudget(const std::string& departmentId) {
  try {
    // Assuming getDepartmentExpenses is a function that retrieves the expenses of a department
    auto expenses = getDepartmentExpenses(departmentId);
    // Assuming getDepartmentRevenue is a function that retrieves the revenue of a department
    auto revenue = getDepartmentRevenue(departmentId);
    return revenue - expenses;
  } catch (const std::exception& e) {
    std::cerr << "Failed to calculate department budget: " << e.what() << std::endl;
    // rethrow the exception to propagate it up the call stack
    throw;
  }
}
```

```cpp
// Good example of a function to fetch manager details with proper naming and error handling
/**
 * Fetches the details of a manager.
 * @param managerId The ID of the manager.
 * @return The details of the manager.
 */
std::string fetchManagerDetails(const std::string& managerId) {
  try {
    auto response = fetch("/api/managers/" + managerId);
    if (!response.ok()) {
      throw std::runtime_error("Network response was not ok");
    }
    auto data = response.json();
    return data;
  } catch (const std::exception& e) {
    std::cerr << "Failed to fetch manager details: " << e.what() << std::endl;
    // rethrow the exception to propagate it up the call stack
    throw;
  }
}
```

```cpp
// Good example of a function to update an employee's department with proper naming and error handling
/**
 * Updates the department of an employee.
 * @param employeeId The ID of the employee.
 * @param newDepartment The new department to be assigned.
 * @return True if the department was updated successfully, false otherwise.
 */
bool updateEmployeeDepartment(const std::string& employeeId, const std::string& newDepartment) {
  try {
    // Assuming updateDepartmentInDatabase is a function that updates the department in the database
    auto success = updateDepartmentInDatabase(employeeId, newDepartment);
    if (!success) {
      throw std::runtime_error("Failed to update employee department in the database");
    }
    return true;
  } catch (const std::exception& e) {
    std::cerr << "Failed to update employee department: " << e.what() << std::endl;
    return false;
  }
}
```

```cpp
// Good example of a function to generate a report with proper string concatenation using std::stringstream
/**
 * Generates a report for an employee.
 * @param employeeId The ID of the employee.
 * @param employeeName The name of the employee.
 * @param employeeSalary The salary of the employee.
 * @return A string containing the report of the employee.
 */
std::string generateEmployeeReport(const std::string& employeeId, const std::string& employeeName, double employeeSalary) {
  std::stringstream ss;
  ss << "Employee Report\n";
  ss << "ID: " << employeeId << "\n";
  ss << "Name: " << employeeName << "\n";
  ss << "Salary: " << employeeSalary << "\n";
  return ss.str();
}
```

