import React from 'react';
import axios from 'axios';
import CircularProgress from 'material-ui/CircularProgress';
// import TextField from 'material-ui/TextField';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';
import '../css/blog.css'
import Paper from 'material-ui/Paper';

class Blog extends React.Component{
  constructor(){
    super();
    this.state={
      wait: true
    }
  }
  componentDidMount(){
    axios.get('https://raw.githubusercontent.com/Jaya-lee/blog-data/master/blogData.json')
      .then(res =>{
        this.setState({wait:false}),
        this.props.dispatch({type:'DATA',data:res.data})
      })
      .catch(err => alert(err))
  }
  // handleChange(e){
  //   this.setState({input:e.target.value})
  // }
  render(){
    let sty={
      display:'flex',
      flexDirection:'column',
      marginTop:'40%'
    }
    let styc={
      margin:'50px auto'
    }
    let styp={
      textAlign:'center'
    }
    let posts = []
    this.props.data.forEach(item => posts=[...posts,...item.posts])
    return (
      <div style={{width:'92%',margin:'20px auto'}}>
        {
          this.state.wait ?
          <div style={sty}>
           <CircularProgress size={60} thickness={7} style={styc}/>
           <p style={styp}>正在加载，请稍后......</p>
           </div>:
            <div>
              {
                    posts.map(item=>
                     <Paper zDepth={2} className='card' key={Math.random()}>
                      <p className='index'>{item.index}</p>
                      <div className='aside'>
                        <h3 className='title'>{item.title}</h3>
                        <Link to={`/content/${item.url}`} className="blog-btn">阅读更多</Link>
                      </div>
                    </Paper>
                )
              }
            </div>
        }
      </div>
    )
  }
}
const mapStateToProps =(state)=>({
  data:state.data
})
export default connect(mapStateToProps)(Blog)
