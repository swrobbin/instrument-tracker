# InstrumentTracker: A React/Rails API Project

## Description

This project is intended to provide a user with the ability to keep track of their own instrument collection by adding individual instruments in different categories.
They will then be able to access their complete 'inventory' of instruments by viewing an instrument's category, or by viewing an index of all their instruments. 
A user is also able to search through their instrument collection. This project utilizes a one-to-many relationship between a user and their instruments, as well as a category having many instrument. The user is able to create, read, update, and delete their instruments, and create their own categories for each instrument or assign a new instrument to an existing category. 

## Setup

You can use the following commands to run the application:

- `rails s`: run the backend on [http://localhost:3000](http://localhost:3000)

- `npm start --prefix client`: run the frontend on
  [http://localhost:4000](http://localhost:4000)