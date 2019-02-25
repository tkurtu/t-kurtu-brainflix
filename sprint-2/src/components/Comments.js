import React from 'react';
import Comment from './Comment'
import userImage from '../assets/grey-image.jpg'



class Comments extends React.Component {
  render () {
    const commentList = this.props.videoComments.map((comment, i )=>{
      return <Comment 
      userImg={userImage} 
      name={comment.name} 
      comment={comment.comment} 
      key={i}/>
    })
    
    return (
      <section className="display-comments">
        {commentList}
      </section>
    )
  }
}

export default Comments


