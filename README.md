# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

This repository is the starter code for the project: Students will fork and clone this repository, then build upon it to practice their HTML, CSS, JS, jQuery and AJAX front-end skills, and their Node, Express and MongoDB back-end skills.

## previews

![desktop](https://github.com/jbawt/tweeter/blob/master/public/images/demo-images/desktop.png?raw=true)
![desktop with form showing](https://github.com/jbawt/tweeter/blob/master/public/images/demo-images/desktop-with-form-showing.png?raw=true)
![tablet](https://github.com/jbawt/tweeter/blob/master/public/images/demo-images/tablet.png?raw=true)
![tablet mode with form showing](https://github.com/jbawt/tweeter/blob/master/public/images/demo-images/tablet-mode-with-form-showing.png?raw=true)
![tweets in tablet mode](https://github.com/jbawt/tweeter/blob/master/public/images/demo-images/tweets-in-tablet-mode.png?raw=true)

## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Express
- Node 5.10.x or above
- body-parser
- chance
- moment.js (cdn link in index.html file)

## Information

This is a project that I built during my time at lighthouse labs.

### functionality
You can use this single page application to create tweets and have them render on the page without refreshing the browser. The avatar and the _**Write** a new tweet_ button are both animated as well as the toggle behaviour for the tweet submission form. The _**Write** a new tweet_ button toggles the new tweet forms visibility using jQuery's slideToggle method. The bouncing and spin animations were both done using css.