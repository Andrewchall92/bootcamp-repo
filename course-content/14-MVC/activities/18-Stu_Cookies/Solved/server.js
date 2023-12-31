const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
// Initializes Sequelize with session store
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

// Sets up session and connect to our Sequelize db
const sess = {
  secret: 'Super secret secret',
  // Express session will use cookies by default, but we can specify options for those cookies by adding a cookies property to our session options.
  // Tells our session to use cookies
  // cookie: {},
  cookie: {
    // maxAge sets the maximum age for the session to be active. Listed in milliseconds.
    maxAge: 3600,

    // httpOnly tells express-session to only store session cookies when the protocol being used to connect to the server is HTTP.
    // Note be careful when setting this to true, as compliant clients will not allow client-side JavaScript to see the cookie in document.cookie.
    httpOnly: false, 

    // secure tells express-session to only initialize session cookies when the protocol being used is HTTPS. Having this set to true, and running a server without encryption will result in the cookies not showing up in your developer console.    // Note be careful when setting this to true, as compliant clients will not send the cookie back to the server in the future if the browser does not have an HTTPS connection.
    // Note be careful when setting this to true, as compliant clients will not allow client-side JavaScript to see the cookie in document.cookie.
    secure: false,

    // sameSite tells express-session to only initialize session cookies when the referrer provided by the client matches the domain out server is hosted from.
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  // Sets up session store
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(
      `\nServer running on port ${PORT}. Visit http://localhost:${PORT} and create an account!`
    )
  );
});
