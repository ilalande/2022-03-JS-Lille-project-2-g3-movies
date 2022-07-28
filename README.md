# CINERAMA - a Cinema Web Application on React

## Contents

1. [General information](#general-information)
2. [Technologies](#technologies)
3. [Installation](#installation)
4. [Authors](#authors)

## General information

This WebApp is an application based on the API ["The movie database"](https://www.themoviedb.org/) (TMDB). It offers access from the home page to the new movies of the week and to movies by genre. A "suggerator", a movie suggestion interface proposes a filter based on the mood, the state of tiredness and the interest of the spectator (which translates into a filter on the duration of the movie, its style and its release date). 

### Project status and progress

This project is a Front project. It was developed by 6 developers in training at the Wild Code School of Lille (React Javascript) as a half training project (Project 2). 
## Technologies

### Template

- Template` : Application developed on React, Node Express from a [template](https://github.com/WildCodeSchool/js-template-fullstack) developed by the Wild Code School. Only the frontend was used. 

**Tools used in this template:**

- _Concurrently_ : Allows to execute several commands in the same terminal
- _Husky_ : Allows to execute actions when triggered by _git_ commands
- _Vite_ : Alternative to _Create-React-App_, with fewer packages for a smoother experience
- _ESLint_ : "Code quality" tool, ensures that pre-configured rules are respected
- _Prettier_ : "code quality" tool also, focuses more specifically on code style
- _Standard Airbnb_ : One of the most well known "standards", even if it is not officially linked to ES/JS
- _Nodemon_ : Tool to restart a server each time one of the files is modified

### Libraries used

  - Styled Component was used to manage the style of the application.
  - React Router to manage the links between pages.
  - Swiper to manage the welcome carousel on the application.
  - Prop-types to type the props.
  - Axios for API calls.

## Installation

### To start a project

    On VSCode, install Prettier - Code formatter and ESLint plugins and configure them
    Clone this repository, go inside
    Run the npm run setup command
    NB: To run the backend, an environment file with the connection data of a valid DB is required. A sample can be found in backend/.env.sample

### List of commands and meaning

    setup : Initialization of the frontend and backend as well as the tools
    dev : Start the three servers (frontend in the same terminal)
    dev-front : Start a React server for the frontend
    lint: Run code validation tools (will be run automatically at each commit)
    fix: Fix formatting errors (to be run if lint doesn't pass)

## Team

A team of developers in training from March to June 2022 at the Wild Code School in Lille

- [Amar](https://github.com/Dash293)
- [Matthéo](https://www.linkedin.com/in/math%C3%A9o-boumbas/)
- [Rémi](https://github.com/remi59800)
- [Juliane](https://github.com/ilalande)
- [Samir](https://www.linkedin.com/in/decambray-samir-952759233/)
- [Valentin](https://www.linkedin.com/in/valentin-navarro-857199139/)
