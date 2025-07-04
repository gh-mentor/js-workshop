# Building Dynamic Front-End Applications with React.js and Node.js Integration

## Objective

In this exercise, you will build a dynamic front-end application using **React.js** and integrate it with a **Node.js** backend. The goal is to use **GitHub Copilot** to streamline the creation of React components, manage application state effectively, and simplify server implementation using **Express.js**. Additionally, you will set up a small in-memory data repository to simulate a database for storing and retrieving data.

By the end of this exercise, you will have a fully functional application where the front-end communicates seamlessly with the back-end, demonstrating the power of modern web development practices.

---

## Key Learning Objectives

1. **React Component Creation**: Use Copilot to quickly generate reusable React components.
2. **State Management**: Implement state management using React hooks like `useState` and `useEffect`.
3. **API Integration**: Learn how to fetch data from a Node.js backend using the Fetch API.
4. **Express.js Backend**: Set up a simple Express.js server to handle API requests and serve data to the front-end.
5. **In-Memory Data Repository**: Implement a small in-memory data repository to simulate database operations.
6. **Copilot Assistance**: Leverage Copilot to accelerate development, reduce boilerplate code, and follow best practices.

---

## Folder Structure

The project is divided into two main directories:
ex5-stack/
├── client/          # React front-end application
├── server/          # Express.js back-end application
```

### Client Folder Structure

```
client/
├── public/          # Static assets
├── src/
│   ├── components/  # Reusable React components
│   ├── pages/       # Page-level components
│   ├── services/    # API service functions using Fetch API
│   ├── App.js       # Main application component
│   ├── index.js     # Entry point
├── package.json     # Project metadata and dependencies
```

### Server Folder Structure

```
server/
├── routes/          # API route handlers
├── models/          # Data models (if using a database)
├── controllers/     # Business logic for routes
├── middleware/      # Custom middleware
├── app.js           # Main application file
├── package.json     # Project metadata and dependencies
```

---

## Setup Instructions

### Client Setup

1. Navigate to the `client` directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the application.

### Server Setup

1. Navigate to the `server` directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

4. The server will run on `http://localhost:5000`.

---

## Exercise Overview

### Part 1: Setting Up the Backend
1. Create a **Node.js** project with **Express.js**.
2. Implement a small in-memory data repository (e.g., an array of objects) to store items such as products, tasks, or users.
3. Implement a RESTful API with endpoints to:
   - Retrieve a list of items from the repository.
   - Add a new item to the repository.
   - Delete an item from the repository.
4. Use **Copilot** to assist in writing the Express routes and middleware.

### Part 2: Building the Front-End
1. Create a **React.js** application using `create-react-app` or `Vite`.
2. Design a simple UI with the following features:
   - A list view to display items fetched from the backend.
   - A form to add new items.
   - A delete button for each item to remove it from the list.
3. Use **Copilot** to generate React components and manage state with hooks.

### Part 3: Integrating Front-End and Back-End
1. Connect the React front-end to the Express back-end using the Fetch API.
2. Implement error handling for API requests.
3. Ensure the application updates dynamically when items are added or removed.

---

## Requirements

- **Backend**:
  - Use **Express.js** for server implementation.
  - Implement a small in-memory data repository to simulate database operations.
  - Implement at least three API endpoints (`GET`, `POST`, `DELETE`).
  - Use **CORS** middleware to enable communication between the front-end and back-end.

- **Front-End**:
  - Use **React.js** for building the UI.
  - Implement state management with React hooks.
  - Use **Bootstrap** or **Material-UI** for basic styling (optional).

- **Integration**:
  - Ensure the front-end fetches data from the back-end using the Fetch API and updates dynamically.
  - Handle errors gracefully (e.g., display error messages for failed API requests).

---

## Deliverables

1. A fully functional React.js front-end application.
2. A Node.js backend with Express.js serving the required API endpoints.
3. A working integration between the front-end and back-end.

---

## Bonus Challenges

1. Add **pagination** to the list view on the front-end.
2. Implement **search functionality** to filter items dynamically.
3. Use **React Context** or a state management library like **Redux** for advanced state management.
4. Deploy the application using **Heroku** or **Vercel**.

---

## Testing the Application

- Test the API endpoints using **Postman** or **cURL**.
- Verify that the front-end correctly displays data from the back-end.
- Ensure that adding and deleting items updates the UI dynamically.

---

## Tools and Technologies

- **Node.js** and **Express.js** for the back-end.
- **React.js** for the front-end.
- **Fetch API** for HTTP requests.
- **GitHub Copilot** for code generation and assistance.

---

## Instructions

1. Clone the starter repository provided for this exercise.
2. Follow the step-by-step instructions in the `README.md` files within the `backend` and `frontend` directories.
3. Use GitHub Copilot to assist with code generation and follow best practices.
4. Test your application thoroughly to ensure all features work as expected.

---

## Expected Outcome

By completing this exercise, you will gain hands-on experience in building a modern web application with a React.js front-end and a Node.js back-end. You will also learn how to leverage GitHub Copilot to accelerate development and improve code quality.