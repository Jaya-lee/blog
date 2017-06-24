import React from 'react';
import axios from 'axios';

import CircularProgress from 'material-ui/CircularProgress';
import FlatButton from 'material-ui/FlatButton';

import marked from 'marked';
import hljs from 'highlight.js';
class Post extends React.Component{
  constructor(){
    super();
    this.state={
      data:'',
      wait:true
    }
  }

  componentDidMount(){
    let name = this.props.location.pathname
    axios.get(`https://raw.githubusercontent.com/Jaya-lee/hello-fe/master/${name}.md`)
      .then(res => this.setState({data:res.data,wait:false}))
      .catch(err => alert(err))
    marked.setOptions({
      highlight: function (code) {
        return hljs.highlightAuto(code).value;
      }
    })
  }
  handleClick(){
    this.props.history.goBack()
  }
  render(){
    console.log(this.props);
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
      <div style={{width:'100%'}}>
        <div style={{padding:'0 20px',border:0}}>
             <FlatButton label="back" primary={true} onClick={this.handleClick.bind(this)}/>
        </div>
        {
          this.state.wait ?
            <div style={sty}>
               <CircularProgress size={60} thickness={7} style={styc}/>
               <p style={styp}>正在加载，请稍后......</p>
             </div>:
              <div dangerouslySetInnerHTML={{__html: marked(this.state.data)}} className='post-content'/>
        }
      </div>
    )
  }
}
export default Post
