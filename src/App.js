/*
 * @Author: hesw
 * @Date: 2021-03-03 11:34:51
 * @Description: 
 */
import React from "react";
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import Routers from './routers'
import { store } from './store';

const history = createBrowserHistory()

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routers/> 
      </Router>
    </Provider>

  );
}

export default App;