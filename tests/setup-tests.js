import express from 'express';
import bodyParser from 'body-parser';
import http from 'http';
import { setup as studentsControllerSetup } from '../controllers/students-controller.js';

let server;

setup(function() {
  let students = [
    {"name" : "Steve", "email" : "steve@gmail.com"},
    {"name" : "Tina", "email" : "tina@yahoo.com"}
  ];
  const app = express();
  server = http.createServer(app);
  app.set('view engine', 'pug');
  app.use(bodyParser.urlencoded({extended:true}));
  studentsControllerSetup(app, students);
  server.listen(8888);
});

teardown(function() {
  server.close();
});
