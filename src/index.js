import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './pages/home/App';

import CadastroVideo from './pages/cadastro/video';
import CadastroCategoria from './pages/cadastro/categoria';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);

// <Route component={() => (<iframe src="https://editor.p5js.org/Spoiler2204/embed/_6NlsGyLC" width="100" height="500"></iframe>)}/>
