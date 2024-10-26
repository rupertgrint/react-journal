# Journal App

A simple journal application built with React that allows users to create, filter, and manage daily journal entries. This app offers a dark/light mode switch and stores entries using localStorage for persistent data.

## Features

- **Write and Save Journals:** Write journal entries with a title and content, saved automatically to localStorage.
- **Edit and Delete Journals:** Modify or remove any existing entry with ease.
- **Filter by Date:** Filter entries by month and year for easy navigation.
- **Dark/Light Mode:** Toggle between dark and light themes, with settings managed through React context.

## Tech Stack

- **Frontend:** React, JavaScript, HTML, CSS
- **Styling:** CSS Modules for scoped and maintainable styles
- **Storage:** localStorage for persistent data saving

## Getting Started

To run this project locally:
### 1. Clone the respository:
```bash
git clone [https://github.com/rupertgrint/react-journal.git](https://github.com/rupertgrint/react-journal.git)
cd react-journal
```
### 2. Install dependencies:
```bash
yarn install
```
### 3. Start the application:
```bash
yarn start
```

## Project Structure
```bash
src/
│
├── components/       # Reusable components (e.g., JournalItem, JournalList, Header etc.)
├── context/          # Theme context for dark/light mode toggle and journal data
├── pages/            # Main pages (e.g., Home, JournalDetail, JournalCreate, and Delete page)
└── App.js            # Main app entry point
```

## Screenshots

### 1. Home Page (Light Mode)
![Screen Shot 2024-10-26 at 8 26 16 pm](https://github.com/user-attachments/assets/619fb1a8-e221-4c96-8767-1c28b2c7b808)

### 2. Home Page (Dark Mode)
![Screen Shot 2024-10-26 at 8 26 33 pm](https://github.com/user-attachments/assets/69c0df63-67ea-49cf-b8aa-dc7b74495243)

### 3. Journal Entry Creation
![Screen Shot 2024-10-26 at 8 24 07 pm](https://github.com/user-attachments/assets/982bc2d8-67f9-4594-80eb-ee2275c8ba4f)

### 4. Detailed Journal View
![Screen Shot 2024-10-26 at 8 26 59 pm](https://github.com/user-attachments/assets/b851fbff-07bb-4ceb-b19a-116e37b2e393)

### 5. Journal Delete
![Screen Shot 2024-10-26 at 8 27 23 pm](https://github.com/user-attachments/assets/785e8450-ed14-4cb4-8b1e-6cf5d8f35b39)




