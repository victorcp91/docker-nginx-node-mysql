const express = require('express');
const util = require("util"); 
const app = express();
const port = 3000;
const mysql = require('mysql');
var random_name = require('node-random-name');

const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb',
};

const connection = mysql.createConnection(config);

connection.query = util.promisify(connection.query).bind(connection);

app.get('/', async (_, res) => {
  const createPerson = `INSERT INTO people(name) values ("${random_name()}");`;
  const getPeople = 'SELECT * FROM people;';
  try {
    await connection.query(createPerson);
    let people = [];
    await connection.query(getPeople).then((values) => {
      people = values.map(val => ({id: val.id, name: val.name}));
    });
  
    res.send(`<h1>Full Cycle Rocks!</h1>
      <ul>
        ${people?.length ? people.map(p => 
          `<li id=${p.id}>${p.name}</li>`
        ).join(" "): ''}
      </ul>
    `);

  } catch(error) {
    res.status(500).send({
      message: 'DB error'
    });
  }
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})