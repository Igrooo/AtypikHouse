const express = require("express");
const nedb = require("nedb");
const rest = require("express-nedb-rest");
const cors = require("cors");

const app = express();

const datastore = new nedb({
   filename: "atypikhouse.db",
   autoload: true
});

const restAPI = rest();
restAPI.addDatastore('houses', datastore);
restAPI.addDatastore('categories', datastore);
restAPI.addDatastore('activities', datastore);
restAPI.addDatastore('booking', datastore);
restAPI.addDatastore('comments', datastore);
restAPI.addDatastore('payments', datastore);
restAPI.addDatastore('pics', datastore);
restAPI.addDatastore('posts', datastore);
restAPI.addDatastore('tags', datastore);
restAPI.addDatastore('users', datastore);

app.use(cors());
app.use('/' , restAPI);

app.listen(3000);