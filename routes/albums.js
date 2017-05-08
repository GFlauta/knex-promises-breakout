const express = require('express');
const router = express.Router({mergeParams: true});
const knex = require('../db/knex');

router.get('/', (req, res) => {
  knex('albums').then(albums => res.send(albums));
});

router.get('/:id', (req, res) => {
  knex('albums').where('id', req.params.id).then(album => res.send(album));
});

router.post('/', (req, res) => {
  knex('albums').insert(req.body).returning('*').then(album => res.status(201).send(album));
});

router.put('/:id', (req, res) => {
  knex('albums').where('id', req.params.id).update(req.body, 'id').then(id => res.send(`Updated album ${id}`));
});

router.delete('/:id', (req, res) => {
  knex('albums').where('id', req.params.id).del().returning('id').then(id => res.send(`Deleted album ${id}`));
});

module.exports = router;
