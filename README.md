# react-photolabs
The PhotoLabs project for the Web Development React course programming.

# PhotoLabs
[PhotoLabs](https://github.com/Rusgyn/PhotoLabs) is a simple stock photo application - specifically a React-based single-page application (SPA) that allows users to view photos in different contexts.

## Goals
* Build a client-side application using the React view-layer library

## Functional Requirements
* The client-side consists of the development of a React single page application (SPA) called PhotoLabs
* The server and persistence layer given as follows:
    * The data layer consists of PostgreSQL database
    * The API server consists of a Node Express.js server application
    * The server/persistence layer may require modifications for stretch goals
* The client will communicate with the API over HTTP using the JSON format

## Behavioral Requirements
1. A user can view photos from the homepage loaded from the API.
2. The user can navigate to different photo categories, also called topics.
3. The user can click on a photo to view a larger version of the photo and relevant / similar photos.
4. The user can like a photo from anywhere within the application where the photo is displayed.
5. The user can view a heart icon with a notification in the navigation if there are liked photos.
6. The navigation will consist of different topics and heart icon.
7. The client-side application will make API requests to load data.

## Dependencies

* Frontend
    - @testing-library/jest-dom,
    - @testing-library/react,
    - @testing-library/user-event,
    - axios,
    - react,
    - react-dom,
    - react-scripts,
    - web-vitals

* Backend
    - body-parser,
    - cors,
    - dotenv,
    - express,
    - helmet,
    - pg,
    - socket.io,
    - ws

## Setup

> There are two different servers running during development
  - Client-side Webpack development server, and
  - API server to provide photo data

1. Clone the [PhotoLabs](https://github.com/Rusgyn/PhotoLabs) repository to your local device.machine. For reference, see Github [cloning](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) a repository steps.
2. Expand PhotoLabs folder and go to frontend and backend folder to start the installation
3. Install dependencies with Install dependencies with `npm install` in each respective `/frontend` and `/backend`
4. Run the servers
  - [Frontend] Running Webpack Development Server

```sh
cd frontend
npm start
```

  - [Backend] Running Backend Server

Read `backend/readme` for further setup details.

```sh
cd backend
npm start
```

## PhotoLabs App images

### Homepage
![HomePage](<App Images/AppScreenshots/HomePage.png>)

### Navigation
> PhotoLabs logo - will redirect back to homepage
> Photo are categorize as per Topics: People, Nature, Travel, Animals, Fashion, are all clickable
> Heart icon as notifications if you have favorites

![Navigation](<App Images/AppScreenshots/Navigation-1.png>)

### Notifications / Favorites
> Heart or Favorites notification
> A green dot notification on the heart if you have like some photos, favorites.

![Notifications and Favorites](<App Images/AppScreenshots/Notifications and Favorites.png>)

### Modal - Selected Photo

![Selected Photo](<App Images/AppScreenshots/Selected Photo.png>)

### Modal - Similar Photo
> Similar photo as per the selected photo category.
![Modal - SimilarPhoto](<App Images/AppScreenshots/Modal - Similar photo.png>)
