import React from 'react';
import Paper from 'material-ui/Paper';
import {connect} from 'react-redux'
class Github extends React.Component {
  render () {
    let avatar_url=this.props.user.avatar_url
    let login=this.props.user.login
    let public_repos=this.props.user.public_repos
    let followers=this.props.user.followers
    let following=this.props.user.following
    let html_url=this.props.user.html_url
    let styles={
      root:{
        textAlign:'center'
      },
      name:{
        color:'#ff4081',
        fontWeight:'600',
        fontSize:'28px',
        lineHeight:'60px'
      },
      img:{
        borderRadius:'50%',
        width:'100%',
        maxWidth:'150px',
        boxShadow: 'rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px'
      }
    }
    return(
      <div style={styles.root}>
        <p style={styles.name}>{login}</p>
        <a title='跳转到Github' href={html_url}>
          <img alt="头像" src={avatar_url} style={styles.img} />
        </a>
        <Paper className='gitinfo'>
          <div className='gitinfo-card'>
            <p>Repositories</p><span>{public_repos}</span>
          </div>
          <div className='gitinfo-card'>
            <p>Followers</p><span>{followers}</span>
          </div>
          <div className='gitinfo-card'>
            <p>Following</p><span>{following}</span>
          </div>
        </Paper>
      </div>
    )
  }
}
const mapStateToProps=(state)=>({
  user:state.user
})
export default connect(mapStateToProps)(Github)
