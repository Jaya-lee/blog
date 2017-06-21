import React from 'react';
import axios from 'axios';
import CircularProgress from 'material-ui/CircularProgress';
import {Link} from 'react-router-dom';
import '../css/blog.css'
import Paper from 'material-ui/Paper';

class Blog extends React.Component{
  constructor(){
    super();
    this.state={
      data: [],
      wait: true
    }
  }
  componentDidMount(){
    axios.get('https://raw.githubusercontent.com/Jaya-lee/blog-data/master/blogData.json')
      .then(res =>this.setState({data: res.data,wait: false}))

      .catch(err => alert(err))
  }
  render(){
    let sty={
      display:'flex',
      flexDirection:'column'
    }
    let styc={
      margin:'50px auto'
    }
    let styp={
      textAlign:'center'
    }
    return (
      <div style={{width:'100%',width:'92%',margin:'20px auto'}}>
        {
          this.state.wait ?
          <div style={sty}>
           <CircularProgress size={60} thickness={7} style={styc}/>
           <p style={styp}>正在加载，请稍后......</p>
           </div>:
            <div>
              {
                this.state.data.map(folder =>
                  folder.posts.map(item=>
                     <Paper zDepth={2} className='card' key={Math.random()}>
                      <p className='index'>{item.index}</p>
                      <div className='aside'>
                        <h3 className='title'>{item.title}</h3>
                        <Link to={`/post/${item.url}`} className="blog-btn">阅读更多</Link>
                      </div>
                    </Paper>

                  )
                )

              }
            </div>
        }
      </div>
    )
  }
}
export default Blog
