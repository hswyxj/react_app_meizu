/*
 * @Author: hesw
 * @Date: 2021-03-03 11:34:51
 * @Description: 
 */
import React from "react";
import { Provider } from 'react-redux';
import { Router  } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import BasicRouters from './routers'
import { store } from './store';

// 路由使用 history模式
// import { BrowserRouter } from 'react-router-dom';
// 路由采用 hash模式
// import { HashRouter } from 'react-router-dom'

const history = createBrowserHistory()

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <BasicRouters/> 
      </Router>
    </Provider>

  );
}

export default App;