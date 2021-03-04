
import React, { Component } from 'react';
import './login.css'
import { store } from '@/store';

import { Button, Input, Select,Checkbox  } from 'antd'
const { Option } = Select;

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = { loginTip: 2 }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(index) {
    console.log(index);
    this.setState({ loginTip: index })
    console.log(store.dispatch({ type: 'ADD_CHAT',payload:'123' }));
console.log(store.getState());

  }
  render() {
    const loginTip = this.state.loginTip

    const phonelogin = (
      <Input.Group compact className='input-Group'>
        <Select placeholder="+86" size="large" >
          <Option value="+86" size='large' >+86</Option>
          <Option value="+886" size='large'>+886</Option>
        </Select>
        <Input className='login-input' size='large' placeholder="手机号码" />
      </Input.Group>
    )

    const userlogin = (
      <div className='userlogin'>
        <Input className='userlogin-input'  placeholder="手机号/ Flyme 账号" size='large'/>
        <Input className='userlogin-input' placeholder="密码" size='large'/>
        <div className='login-tip'>
        <Checkbox onChange={() => this.onChange}>记住登录状态</Checkbox>
        <Button  type="text">忘记密码?</Button>
        </div>
      </div>
    )

    const loginItem = loginTip === 1?userlogin:phonelogin
    return (
      <div className={loginTip === 1 ? 'content-h' : 'content'}>
        <div className='tab-title'>
          <h3 className={loginTip === 1 ? 'user-login' : 'user-login color-dark'} onClick={() => this.handleClick(1)}>账号登录</h3>
          <h3 className='login-line color-dark'>|</h3>
          <h3 className={loginTip === 1 ? 'phone-login color-dark' : 'phone-login'} onClick={() => this.handleClick(2)}>验证码登录</h3>
        </div>
        {loginItem}
        <Button className='login-button' type="primary" size='large'>登录</Button>
        <Button className='register-button' type="text">注册</Button>
      </div>
    );
  }
}

export default LoginPage;
