import React from 'react';
import {withRouter} from 'react-router-dom';

class Header extends React.Component{
  handleBack(){
    this.props.history.goBack()
  }
  render(){
      let pathname = this.props.location.pathname.slice(1)
    return (
      <div className="nav-header">
        <p style={{fontSize:'18px'}} onClick={this.handleBack.bind(this)}>
          Back</p>
          <h2>Jaya@{!pathname ? 'Home' : pathname.includes('content') ? 'Item' : pathname }</h2>
        <a href='https://github.com/Jaya-lee' target='bank'></a>
      </div>
    )
  }
}
export default withRouter(Header);
