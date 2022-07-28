# CINERAMA - une Web Application de cinéma sur React

## Contenus

1. [Informations Générales](#informations-generales)
2. [Technologies](#technologies)
3. [Installation](#installation)
4. [Auteurs](#auteurs)

## Informations Générales

Cette WebApp est une application basée sur l'API ["The movie database"](https://www.themoviedb.org/) (TMDB). Elle propose d'accéder depuis la page d'accueil aux nouveautés cinéma de la semaine et aux films par genre. Un "suggerator", une interface de suggestion de films propose un filtre basé sur l'humeur, l'état de fatigue et l'intérêt du spectateur (ce qui se traduit par un filtre sur la durée du film, son style et sa date de sortie). 

### Statut du projet et état d'avancement

Ce projet est un projet de Front. Il a été développé par 6 développeurs en formation à la Wild Code School de Lille (React Javascript) comme projet de moitié de formation (Projet 2). 
## Technologies

### Template

- `Template` : Application développée sur React, Node Express à partir d'un [template](https://github.com/WildCodeSchool/js-template-fullstack) développé par la Wild Code School. Seule la partie Front a été utilisée. 

**Outils utilisés dans ce template:**

- _Concurrently_ : Permet d'exécuter plusieurs commandes dans un même terminal
- _Husky_ : Permet d'exécuter des actions en déclenchement de commandes _git_
- _Vite_ : Alternative à _Create-React-App_, embarquant moins de packages pour une expérience plus fluide
- _ESLint_ : Outil de "qualité de code", permet de s'assurer que des règles pré-configurées sont bien respectées
- _Prettier_ : Outil de "qualité de code" également, se concentre plus particulièrement sur le style du code
- _Standard Airbnb_ : L'un des "standards" les plus connus, même s'il n'est pas officiellement lié à ES/JS
- _Nodemon_ : Outil permettant de relancer un serveur à chaque fois qu'un des fichiers est modifié

### Librairies utilisées

  - Styled Component a été utilisé pour gérer le style de l'application.
  - React Router pour gérer les liens entre les page.
  - Swiper pour gérer le carroussel de d'accueil sur l'application.
  - Prop-types pour typer les props.
  - Axios pour les appels API.

## Installation

### Pour commencer un projet

    Sur VSCode, installer les plugins Prettier - Code formatter et ESLint et les configurer
    Cloner ce dépôt, se rendre à l'intérieur
    Lancer la commande npm run setup
    NB: Pour exécuter le backend, un fichier d'environnement avec les données de connexion d'une BdD valide est nécesaire. Un modèle se trouve dans backend/.env.sample

### Liste des commandes et signification

    setup : Initialisation du frontend et du backend ainsi que des outils
    dev : Démarrage des trois serveurs (frontend dans un même terminal
    dev-front : Démarrage d'un serveur React pour le frontend
    lint : Exécute des outils de validation de code (sera exécutée automatiquement à chaque commit)
    fix : Fixe les erreurs de formatage (à lancer si lint ne passe pas)

## Equipe

Une équipe de développeurs en formation de mars à juin 2022 à la Wild Code School de Lille

- [Amar](https://github.com/Dash293)
- [Matthéo](https://www.linkedin.com/in/math%C3%A9o-boumbas/)
- [Rémi](https://github.com/remi59800)
- [Juliane](https://github.com/ilalande)
- [Samir](https://www.linkedin.com/in/decambray-samir-952759233/)
- [Valentin](https://www.linkedin.com/in/valentin-navarro-857199139/)
