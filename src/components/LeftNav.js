import React from 'react';
import Icon from 'antd/lib/icon';
import {NavLink} from 'react-router-dom';
import {withRouter} from 'react-router-dom';

class LeftNav extends React.Component{
  render(){
    let pathname = this.props.location.pathname.slice(1).toUpperCase()
    let styleActive={
      backgroundColor:'rgba(0,0,0,0.3)'
    }
    return (
      <div className='left-nav'>
        <h2>Jaya@{!pathname ? 'HOME' : pathname.includes('POST') ? 'NOTE' : pathname }</h2>
        <NavLink  activeStyle={styleActive} exact to='/'>
          <Icon type="home" style={{marginRight:'10px'}}/>
          <span>Home</span>
        </NavLink>
        <NavLink activeStyle={styleActive} to='/blog'>
          <Icon type="book" style={{marginRight:'10px'}}/>
          <span>Blog</span>
        </NavLink>
        <NavLink activeStyle={styleActive} to='/work'>
          <Icon type="appstore" style={{marginRight:'10px'}}/>
          <span>Work</span>
        </NavLink>
        <NavLink activeStyle={styleActive} to='/about'>
          <Icon type="smile-o" style={{marginRight:'10px'}}/>
          <span>Me</span>
        </NavLink>
      </div>
    )
  }
}
export default withRouter(LeftNav)
