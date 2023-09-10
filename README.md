# Getting Started with Stock-Watchlist React App

The above project is a web-based stock watchlist application that allows users to search for and track their favorite companies' stock information. Here's a brief description of its key components:

1. **Home Screen**:

   The Home screen provides users with a search bar where they can enter the name of a company they want to search for. After searching, a list of matching companies is displayed,
   including their stock symbols, names, and share prices. Users can also add these companies to their watchlist.

4. **Watchlist Screen**:

   The Watchlist screen displays a list of companies that the user has added to their watchlist. It shows the stock symbols, names, and share prices of the companies in the watchlist.
   Users can remove companies from their watchlist from this screen.

6. **Navbar**:

   The Navbar provides navigation links for users to switch between the Home screen and the Watchlist screen.

8. **Redux State Management**:

   The project utilizes Redux, a state management library, to manage the user's watchlist data. Redux stores information about the companies in the watchlist, ensuring that this data
   persists even when the user navigates between screens or refreshes the page.

11. **External API**:

    The application interacts with an external API (Alpha Vantage) to fetch stock-related data when a user searches for a company.

14. **Local Storage**:

    User watchlist data is stored in the browser's local storage, ensuring that it persists across sessions and page refreshes.

Overall, this project provides a user-friendly interface for tracking stock information and managing a personalized watchlist of companies. It leverages Redux for state management and integrates with an external API to fetch real-time stock data.

## Setting up the project
To set up the above project, follow these steps:

1. **Install Node.js and npm**:

   If you don't have Node.js and npm installed on your system, download and install them from the official website: [Node.js Official Website](https://nodejs.org/)

2. **Download the Repository or Clone the Repository into a folder**:

   Open your terminal navigate to the folder and run the following command to install the **Node Modules**:

   ```bash
   npm install or npm i
   ```
   
   This will install all the dependency `Node-Modules` in the app folder.

3. **Install Additional Packages**:

   Install the necessary dependencies (axios, react-redux and react-router-dom) by running the following command:

   ```bash
   npm install axios react-redux
               and
   npm i react-router-dom
   ```

4. **Start the Development Server**:

   In the terminal, run the following command to start the development server:

   ```bash
   npm start
   ```

   This will open the project in your default web browser.

5. **Testing**:

    You can now interact with the project in your browser. Use the search bar on the Home screen to search for companies and add them to your watchlist.
