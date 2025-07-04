/**
 * A poorly designed TypeScript module for managing users.
 */
export class UserManager {
  private users: { [id: string]: { name: string; age: number } } = {};

  /**
   * Adds a user to the system.
   * @param id The user's ID.
   * @param name The user's name.
   * @param age The user's age.
   */
  addUser(id: string, name: string, age: number): void {
    if (!id || !name || age < 0) {
      console.log("Invalid user data");
      return; // Silent failure
    }

    if (this.users[id]) {
      console.log("User already exists");
      return; // Silent failure
    }

    this.users[id] = { name, age };
  }

  /**
   * Retrieves a user's details.
   * @param id The user's ID.
   * @returns The user's details or null if not found.
   */
  getUser(id: string): { name: string; age: number } | null {
    if (!this.users[id]) {
      console.log("User not found");
      return null; // Silent failure
    }

    return this.users[id];
  }

  /**
   * Deletes a user from the system.
   * @param id The user's ID.
   */
  deleteUser(id: string): void {
    if (!this.users[id]) {
      console.log("User not found");
      return; // Silent failure
    }

    delete this.users[id];
  }

  /**
   * Retrieves all users over a certain age.
   * @param age The age threshold.
   * @returns A list of users over the given age.
   */
  getUsersOverAge(age: number): { id: string; name: string; age: number }[] {
    const result: { id: string; name: string; age: number }[] = [];
    for (const id in this.users) {
      if (this.users[id].age > age) {
        result.push({ id, ...this.users[id] });
      }
    }
    return result;
  }

  /**
   * A deeply nested function to demonstrate poor readability.
   */
  performComplexOperation(): void {
    for (const id in this.users) {
      if (this.users[id].age > 18) {
        if (this.users[id].name.startsWith("A")) {
          console.log(`User ${id} is an adult with a name starting with A`);
        } else {
          console.log(`User ${id} is an adult`);
        }
      } else {
        if (this.users[id].name.startsWith("A")) {
          console.log(`User ${id} is a minor with a name starting with A`);
        } else {
          console.log(`User ${id} is a minor`);
        }
      }
    }
  }
}