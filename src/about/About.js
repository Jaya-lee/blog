import React from 'react';
import {connect} from 'react-redux'
import axios from 'axios'

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import '../css/about.css'

import Github from './Github'
import Echarts from './Echarts'

class About extends React.Component {
  constructor(){
    super();
    this.state={
      input:'',
      wait:0
    }
  }
  componentDidMount(){
    axios.get('https://api.github.com/users/jaya-lee')
    .then(res=>{
      this.props.dispatch({type:'GITHUBUSER',content:res.data}),
      this.setState({wait:2})})
  }
  handleChange(e){
    this.setState({input:e.target.value})
  }

  handleSubmit(e){
    e.preventDefault();
    if(this.state.input){
      this.setState({
        wait:1
      })
      axios.get(`https://api.github.com/users/${this.state.input}`)
      .then(res=>{
      this.props.dispatch({type:'SEARCH',content:res.data}),
      this.setState({wait:2})
      })
      .catch(err=>this.setState({wait:3}))
    }
    e.target.reset()
  }

  render () {
    let getUser=this.state.wait===2 ? <Github/> :
      this.state.wait===3 ?
      <div style={{textAlign:'center'}}>没有找到该用户,请输入正确的github账号</div>
       : <div style={{textAlign:'center'}}>
          <CircularProgress size={40} style={{marginTop:'25px'}}/><br/>
          <span>正在加载,请稍等....</span>
        </div>
    let styles={
      root:{
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 6px, rgba(0, 0, 0, 0.1) 0px 1px 4px',
        maxWidth:'750px',
        height:'auto',
        margin:'50px auto 10px',
        padding:'20px'
      },
      title:{
        color:'#00BCD4'
      },
      search:{
        padding:'10px',
        textAlign:'center',
        maxWidth:'90%',
        margin:'0 auto'
      },
      field:{
        width:'50%',
        marginRight:'20px'
      }
    }
    return(
      <div className='about-container'>
        <div className='clearfix' style={styles.root}>
          <h2 style={styles.title}>Search Github Info</h2>
          <div style={styles.search}>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <TextField hintText="search github"
                style={styles.field}
                value={this.state.input}
                onChange={this.handleChange.bind(this)}
                inputStyle={{color:'#00BCD4'}}/>
                <RaisedButton type='submit' label="搜索" primary={true} style={{margin: 12}}/>
            </form>
          </div>
          {getUser}
          <Echarts />
        </div>
      </div>
    )
  }
}

export default connect(null)(About)
