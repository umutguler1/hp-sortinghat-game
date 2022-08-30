# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## The Project

This project is a game from the famous movie-book series of "Harry Potter". The "houses" of each character is guessed (or selected) from the 4 options, and the total score is displayed on the screen. A random of 15 characters are chosen from an array of 61 characters. To the end, the guessings become more difficult as the characters are sorted according to their popularity. The information about the houses of the characters are fetched with HTTP requests to https://hp-api.herokuapp.com/. The images are added manually to the fetched data, then, the same logic proceeded as if the images are coming from the api.

## Styling

All the styling is done using Tailwind CSS.
