const express = require('express');
const db = require('../db/knex');
const path = require('path');


function serverSetup() {
  const app = express();
  app.use(express.static(path.resolve(__dirname, '../client/build')));
  
  app.use(express.json());
  
  app.get('/hello', (req,res) => {
    res.send("world 🌏");
    res.status(200);
  });

  app.get('/api/wrestlers', async (req, res) => {
    const wrestlers = await db('wrestlers')
      .select('*')
      .timeout(1500);
    res.send(wrestlers);
  });

  app.get('/api/wrestlers/:id', async (req,res) => {
    const { id } = req.params;
    const wrestler = await db('wrestlers')
    .select('*')
    .where('id', id)
    .timeout(1500);
  res.send(wrestler);
  });

  app.post('/api/wrestlers', async (req, res) => {
    const { first_name, last_name } = req.body
    await db('wrestlers')
      .insert({
        first_name: first_name,
        last_name: last_name
      })
      .timeout(1500)
    res.send('successully created') 
  })

  app.patch('/api/wrestlers/:id', async (req, res) => {
    const { id } = req.params
    const edits = req.body;
    console.log(id, edits)
    await db('wrestlers')
      .where('id', id)
      .update(edits)
      .timeout(1500)
    res.send('successfully updated')
  })
  app.patch('/api/wrestlers/:id', async (req, res) => {
    const { id } = req.params
    const edits = req.body;
    console.log(id, edits)
    await db('wrestlers')
      .where('id', id)
      .update(edits)
      .timeout(1500)
    res.send('successfully updated')
  })
  return app
}

module.exports = serverSetup;