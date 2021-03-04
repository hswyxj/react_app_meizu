/*
 * @Author: hesw
 * @Date: 2021-03-03 11:34:51
 * @Description: 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css'; //引入antd样式

import getPageTitle from '@/utils/getpagetitle'
const name = '魅族官网 - 魅族 17 系列手机：如你，才华横溢' // page title
// set page title
document.title = getPageTitle(name)

//热更新实现
const render = App => {
  ReactDOM.render(
      <App  className='App'/>,
    document.getElementById('root')
  );
}

render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('../src', () => {
      render(App);
  })
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
