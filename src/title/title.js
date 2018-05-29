import React , { Component } from 'react';
import './title.css';
import Home from '../page/home';
import { Route, Link } from 'react-router-dom'


class Title extends Component{
  render() {

    return (
      <div class="font1">
        <h1 style={{fontSize: 38, textAlign: 'left'}}>พื้นที่แลกเปลี่ยนชีทสรุปแห่งแรก<br/>ในประเทศไทย</h1><hr/>
        <h3 style={{fontSize: 22}}>ยินดีต้อนรับ</h3><br/>
        <Link exact class="button1" to="/page/home">เข้าสู่เว็บไซต์</Link>
        <Route path="/page/home" component={Home} />
      </div>
    )
  }
}
export default Title;
