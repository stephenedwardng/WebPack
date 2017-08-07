//since we don't have a database we'll use our front end models at the moment
var films = require('../client/src/models/films')();
var Film = require('../client/src/models/film');
var Review = require('../client/src/models/review');


var express = require('express');
var filmRouter = new express.Router();

// Create array and push new film to it
var newFilms = [];

// Index
filmRouter.get('/', function(req, res) {
  res.json({ data: films });
});

// Show
filmRouter.get('/:id', function(req, res) {
  res.json({ data: films[req.params.id] });
});

// Update
filmRouter.put('/:id', function(req, res) {
  films[req.params.id] = req.body.film;
  res.json({ data: films });
});

// Create
filmRouter.post('/', function(req, res) {
  films.push(newFilms);
  res.json({ data: newFilms });
});

// Delete
filmRouter.delete('/:id', function(req, res) {
  films.splice(req.params.id, 1);
  res.json({ data: films });
});

module.exports = filmRouter;