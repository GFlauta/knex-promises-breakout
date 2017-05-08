const express = require('express');
const router = express.Router({mergeParams: true});
const knex = require('../db/knex');

router.get('/', (req, res) => {
  knex('artists').then(artists => res.send(artists));
});

router.get('/:id', (req, res) => {
  knex('artists').where('id', req.params.id).then(artist => res.send(artist));
});

router.post('/', (req, res) => {
  knex('artists').insert(req.body).returning('*').then(artist => res.status(201).send(artist));
});

router.put('/:id', (req, res) => {
  knex('artists').where('id', req.params.id).update(req.body, 'id').then(id => res.send(`Updated artist ${id}`));
});

router.delete('/:id', (req, res) => {
  knex('artists').where('id', req.params.id).del().returning('id').then(id => res.send(`Deleted artist ${id}`));
});

module.exports = router;
