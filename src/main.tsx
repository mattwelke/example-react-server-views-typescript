import * as express from 'express';
import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';

import Index from './views/Index';
import Nav from './views/Nav';
import { renderReactView } from './utils';
import Shell from './views/Shell';

const app = express();

app.get('/', function (req, res) {    
  res.send(renderReactView(<Shell>
    <Nav activeRoute={'/'} />
    <Index backgroundColor={'red'} currentDate={new Date()} profilePhotoUrl={'/img/a'} />
  </Shell>));
});

app.get('/about', function (req, res) {
  res.send(renderReactView(<Shell>
    <Nav activeRoute={'/about'} />
    <Index backgroundColor={'blue'} currentDate={new Date()} profilePhotoUrl={'/img/b'} />
  </Shell>));
});

app.listen(3000);