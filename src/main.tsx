import * as express from 'express';
import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';

import Home from './views/Home';
import Nav from './views/Nav';
import { renderReactView } from './utils';
import Shell from './views/Shell';

const app = express();

app.get('/', function (req, res) {    
  res.send(renderReactView(<Shell>
    <Nav activeRoute={'/'} />
    <Home backgroundColor={'red'} currentDate={new Date()} profilePhotoUrl={'/img/a'} />
  </Shell>));
});

app.get('/about', function (req, res) {
  res.send(renderReactView(<Shell>
    <Nav activeRoute={'/about'} />
    <Home backgroundColor={'blue'} currentDate={new Date()} profilePhotoUrl={'/img/b'} />
  </Shell>));
});

const port = 3000;
app.listen(port);
console.log(`Listening on port ${port}`);
