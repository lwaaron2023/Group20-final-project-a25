# Group 20 Final Project

**Deployment Link**

https://group20-final-project-a25.onrender.com/

**Repository Used In Deployment (contains server files and built files)**

https://github.com/lwaaron2023/Group20-final-project-a25-production.git

## What we created:

As a group we created a web application that allows a user to play a variety of simple games. These games include simpler games such as click the button and more complex games like battleship. Some games are 1 player while others are online multiplayer games.

## Instructions on how to play each game:

### Battleship

The controls are:

To interact with tiles/select ships/place ships: left-click
To rotate a ship before placement: press r with a ship selected

To select a ship to place simply click on one of the boxes with the letter "0" in it, and the number of "0"s will dictate the length of the ship.

### 1000 Click in 10 Minutes

The controls are:

To start the game, press the pink button. 
To continue clicking, press the pink button to add points. 
When you win (or lose), press the pink button to reset the game.
When you have enough points, you can scroll below to (upgrades) to get more points per click


## Technologies used throughout the project

We used a variety of libraries and technologies including, but not limited to:

1. Vite was used to create and build the client-side experience.
2. Express was used for the server side experience.
3. Http was used for the server side experience
4. Node js was used for the server side experience
5. Websocket API was used to allow the server to establish ways of communicating with clients that allowed clients to communicate with each other.
6. Tailwind CSS and Styled Component was used to style the webpages.
7. React was used to design and structure the webpages.
8. Pug was used to render the webpages.
9. React dom was used for inner-page routing.
10. For Trust AI : Used Svelte for the frontend and Node.js with Express for the backend. Real-time interaction between the player and AI is handled through WebSockets, making the gameplay smooth and responsive. MongoDB stores user and game data, and GitHub OAuth provides secure login. Trivia questions come from custom routes and external APIs like Open Trivia, Geo, and Stooq for variety. Sessions are managed with express-session, and the full app is deployed on Render.

## Challenges faced throughout the project:

The main challenges faced throughout the entire project were:

1. Issues with adapting to the new libraries and technologies used in the project. Certain packages had a learning curve before we were comfortable using them.
2. Coordination and communication in the group. Communicating with each other throughout the project proved to be problematic as lines of communication often broke done at critical moments.
3. For Trust AI : The main challenges were keeping the real-time game smooth with WebSockets and managing session data correctly. It was also tricky to connect multiple APIs and make sure everything worked together in the Svelte app.

## Responsabilites:

1. Aaron Waller was responsible for:
  - Creating the battleship game.
  - Creating the server.js file.
  - Building and deploying the project to Render.
  - Creating the routing within the web application that allowed for users to play the different games from the website.
  - Styling the webpage that contained all the games.
  - Creating the individual pages for the different games so that the games were iframes inside of the container websote.

2. Benedict Antwi was responsible for:
  - Creating, styling and deploying the "1000 clicks in 10 minutes" game.

3. Tien Nguyen was responsible for:
  - Created and styled a demo webpage.
  - Styled the Home page
  - Contribute game "Squish the cockroach"

4. Aditya Patel was reponsible for:
  - Creating, styling and deploying the "Trust AI" game.
  - Edited and Made the Final Video.
  - Added Thumbnails

5. Aishwarya Silam was reponsible for:
  - Creating, styling and deploying the "Unscramble" game.

## Accessibility features:

1. Using high constrast color schemes that did not rely soley on the color itself but rather the shades and hughes of colors to convey meaning
2. Using colors that are easily distigishable for people with common types of color blindness (red-green, blue-purple, etc)
3. Using shape and location of elements to convey information about them
4. For Trust AI: The game includes several accessibility features to make it easy for everyone to play. All buttons and controls can be used with the keyboard using the Tab and Enter keys. The design uses a clear dark-on-light color scheme for better visibility and readable font sizes that adjust to any screen size. Each button and score element includes ARIA labels for screen readers, and visual highlights help players easily follow round changes and button selections.


