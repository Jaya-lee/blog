import React from 'react';
import {HashRouter,Route} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import store from '../redux/store'
import {Provider} from 'react-redux'

import Header from './Header';
import Footer from './Footer';
import LeftNav from './LeftNav';

import Home from './Home';

import Blog from '../blog/Blog';
import Post from '../blog/Post';

import Work from '../work/Work';

import About from '../about/About';

class App extends React.Component{
  constructor(){
    super()
    this.state={
      mobile:true
    }
  }
  setNav(){
    document.body.clientWidth>765 ? this.setState({mobile:false}) : this.setState({mobile:true})
  }
  componentWillMount(){
    this.setNav();
    window.onresize = () => {this.setNav()};
  }

  render(){
    return (
      <MuiThemeProvider>
        <HashRouter>
          <Provider store={store}>
          <div className='content-wrap'>
            {this.state.mobile ? <Header /> : <LeftNav />}
            <div className='content-main'>
              <Route exact path='/' component={Home}/>
              <Route path='/Blog' component={Blog}/>
              <Route path='/Work' component={Work}/>
              <Route path='/About' component={About}/>
              <Route path='/content/:item/:id' component={Post}/>
            </div>
            {this.state.mobile ? <Footer /> : null}
          </div>
          </Provider>
        </HashRouter>
      </MuiThemeProvider>

    )
  }
}
export default App
