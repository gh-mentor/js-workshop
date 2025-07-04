import { UserManager } from "./user-manager";

const main = () => {
  const userManager = new UserManager();

  console.log("Adding users...");
  userManager.addUser("1", "Alice", 25);
  userManager.addUser("2", "Bob", 17);
  userManager.addUser("3", "Charlie", 30);

  console.log("\nRetrieving users...");
  console.log(userManager.getUser("1")); // Should print Alice's details
  console.log(userManager.getUser("4")); // Should log "User not found" and return null

  console.log("\nDeleting a user...");
  userManager.deleteUser("2");
  console.log(userManager.getUser("2")); // Should log "User not found" and return null

  console.log("\nGetting users over age 20...");
  const usersOver20 = userManager.getUsersOverAge(20);
  console.log(usersOver20); // Should print details of Alice and Charlie

  console.log("\nPerforming complex operation...");
  userManager.performComplexOperation(); // Should log messages based on user data
};

main();