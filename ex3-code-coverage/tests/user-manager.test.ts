import { UserManager } from "../src/user-manager";

describe("UserManager", () => {
  let userManager: UserManager;

  beforeEach(() => {
    userManager = new UserManager();
  });

  test("should add a user successfully", () => {
    userManager.addUser("1", "Alice", 25);
    const user = userManager.getUser("1");
    expect(user).toEqual({ name: "Alice", age: 25 });
  });

});