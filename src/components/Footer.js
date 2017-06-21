import React from 'react';
import {Icon} from 'antd';
import {NavLink} from 'react-router-dom';

class Footer extends React.Component{
  render(){
    return (
      <footer>
        <NavLink exact activeStyle={{color:'#F44336'}} to='/'>
          <Icon type="home" /><br/>Home</NavLink>
        <NavLink activeStyle={{color:'#F44336'}} to='/blog'><Icon type="file-text" /><br/>Blog</NavLink>
        <NavLink activeStyle={{color:'#F44336'}} to='/work'><Icon type="appstore" /><br/>Work</NavLink>
        <NavLink activeStyle={{color:'#F44336'}} to='/about'><Icon type="user" /><br/>Me</NavLink>
      </footer>
    )
  }
}
export default Footer
