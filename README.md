This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Wager Match Goals

Create/Accept a match with money that will be deposited to PayPal and once someone wins automatically pay out players with PayPal Api.

### Wager Matches is still in an early stage:
The first goal is to get the site working with just localstorage/react state data and to eventually power the persistance layer with mongoose/mongodb.

<img src="https://i.gyazo.com/041a40b239b92097ce34090cbacd6e17.jpg">

### Server

Server is built with express with typescript in `./server`

### Frontend

Frontend is built with react in `./src`

### Docker

To start server clone project and run:

```bash
docker-compose up --build
```

Now go to `http://localhost:3000`