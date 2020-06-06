# MyReads Project
A Udacity React Developer Nanodegree 1st Project

## Project Overview
In the MyReads project, I had created a bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read. The project is done React to build the application and provides an API server and client library.

## Project Demo
[MyReads: A Book Landing App](#)

## Project File Structure

├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    ├── components # The app components
    │    ├── Books.js
    │    ├──  Shelf.js
    │    └── pages # contain search and main page of the app
    │        ├── MainPage.js
    │        └──SearchPage.js 
    │ 
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.

## How To Run / Install

- `npm install` or `yarn install` to install all project dependencies
- `npm start` or `yarn start` to start development server
- server will be running on `localhost:3000` on your local  machine.

## Backend Server
- This project is done using BookAPI backend server which is provied by Udacity to simplify the development process.
- For more info about the [`BooksAPI.js`](src/BooksAPI.js) provided for development please refer to the [react nanodegree starter project](https://github.com/udacity/reactnd-project-myreads-starter).

## App Functionality
In this application, the main page displays a list of "shelves" (i.e. categories), each of which contains a number of books. The three shelves are:

* Currently Reading
* Want to Read
* Read

![Main Page View](https://video.udacity-data.com/topher/2017/May/590c0f12_react-project1-a/react-project1-a.png)

Each book has a control that lets you select the shelf for that book. When you select a different shelf, the book moves there. Note that the default value for the control should always be the current shelf the book is in.

![](https://video.udacity-data.com/topher/2017/May/590c0f26_react-project1-b/react-project1-b.png)

he main page also has a link to /search, a search page that allows you to find books to add to your library.

The search page has a text input that may be used to find books. As the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets you add the book to your library. To keep the interface consistent, you may consider re-using some of the code you used to display the books on the main page.

![Search Page View](https://video.udacity-data.com/topher/2017/December/5a3c22b9_screen-shot-2017-12-21-at-1.06.59-pm/screen-shot-2017-12-21-at-1.06.59-pm.png)

When a book is on a bookshelf, it should have the same state on both the main application page and the search page.

![](https://video.udacity-data.com/topher/2017/July/595d48a9_correct-use-of-state/correct-use-of-state.gif)

The search page also has a link to / (the root URL), which leads back to the main page.

When you navigate back to the main page from the search page, you should instantly see all of the selections you made on the search page in your library.

## How To Search A Book
For searching books, only some specific words are allowed. [Here](SEARCH_TERMS.md)is where you can find an exhaustive list of these words.

## **📓 Notes**

This project was bootstrapped with `[Create React App](https://github.com/facebookincubator/create-react-app)` and integrated with some of the materials provided by the `[react nanodegree starter project](https://github.com/udacity/reactnd-project-myreads-starter)`.
