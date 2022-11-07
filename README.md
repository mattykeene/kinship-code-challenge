# Kinship Code Challenge
Greetings! Thank you for taking the time to review my code challenge, I hope it's easy for you to follow.

## About the Project
I chose to use Create React App because it's fast and takes very little time to get the ball rolling. The project is styled with Bootstrap 5.

### Dependencies
- Node v18.12.0
- npm 8.19.2
- React 18.2.0

This project was built with the help of [Create React App](https://github.com/facebook/create-react-app). You can run the project locally by doing the following:
- Clone the project
- Navigate into the project from a terminal and run `nmp install`
- Create an .env file in the project root, I have attached the client id/secret in an email
- next run `npm start`
- view the project in your browser at [localhost:3000](http://localhost:3000/)
- log in with the code challenge credentials provided in the same email as the env variables


## Next Steps
If I were to take this project further I would do a few things:
- Store the auth token in a hashed cookie. The instructions seemed clear to use the Context API and I didn't want to stray too far from those requirements. I set up a bare-bones localStorage solution so the page wouldn't break while refreshing.
- Abstract all of the API calls into an API service file for better organization.
- Write tests.
- Possibly add more styling.
